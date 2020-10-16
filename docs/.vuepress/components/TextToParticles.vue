<template>
  <div
    class="canvas-wrapper"
    @click="onMouseClick"
    @mousemove="onMouseMove"
    @mouseout="onMouseOut"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
  >
    <canvas ref="scene"></canvas>
  </div>
</template>

<script>
// 参考：
// https://github.com/antfu/vueuse/blob/master/packages/_docs/showcases/textParticles.stories.tsx
// https://codepen.io/Mamboleoo/pen/obWGYr
const colors = ['#468966', '#FFF0A5', '#FFB03B', '#B64926', '#8E2800'];

function Particle(x, y, ww, wh) {
  this.x = Math.random() * ww;
  this.y = Math.random() * wh;
  this.dest = {
    x: x,
    y: y,
  };
  this.r = Math.random() * 3 + 2;
  this.vx = (Math.random() - 0.5) * 20;
  this.vy = (Math.random() - 0.5) * 20;
  this.accX = 0;
  this.accY = 0;
  this.friction = Math.random() * 0.05 + 0.94;

  this.color = colors[Math.floor(Math.random() * 6)];
}

Particle.prototype.render = function (ctx, x, y, radius) {
  this.accX = (this.dest.x - this.x) / 1000;
  this.accY = (this.dest.y - this.y) / 1000;
  this.vx += this.accX;
  this.vy += this.accY;
  this.vx *= this.friction;
  this.vy *= this.friction;

  this.x += this.vx;
  this.y += this.vy;

  ctx.fillStyle = this.color;
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
  ctx.fill();

  const a = this.x - x;
  const b = this.y - y;

  const distance = Math.sqrt(a * a + b * b);
  if (distance < radius * 70) {
    this.accX = (this.x - x) / 100;
    this.accY = (this.y - y) / 100;
    this.vx += this.accX;
    this.vy += this.accY;
  }
};

export default {
  name: 'text-to-particles',
  props: {
    text: {
      type: String,
      required: true,
      default: 'Zhao Bin',
    },
    fontSize: {
      type: Number,
      default: 100,
    },
    fontFamily: {
      type: String,
      default: 'sans-serif',
    },
  },
  data() {
    return {
      canvas: null,
      ctx: null,
      ww: 0,
      wh: 0,
      particles: [],
      amount: 0,
      // 运行时报错，mouse为undefined
      mouse: {
        x: 0,
        y: 0,
      },
      // 不使用object类型，而是普通类型就没问题。。。
      mx: 0,
      my: 0,
      radius: 1,
      started: false,
    };
  },
  mounted() {
    this.$nextTick()
      .then(() => {
        this.initScene();
        this.start();
      })
      .catch((reason) => {
        console.log(reason);
      });
    window.addEventListener('resize', this.initScene);
  },
  destroyed() {
    this.started = false;
  },
  watch: {
    text() {
      this.initScene();
    },
  },
  methods: {
    initScene() {
      this.canvas = this.$refs['scene'];
      this.ctx = this.canvas.getContext('2d');

      const computedStyle = window.getComputedStyle(this.canvas);

      this.ww = this.canvas.width = parseInt(
        computedStyle.getPropertyValue('width')
      );
      this.wh = this.canvas.height = parseInt(
        computedStyle.getPropertyValue('height')
      );

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.font = `bold ${this.fontSize}px ${this.fontFamily}`;
      this.ctx.textAlign = 'center';
      this.ctx.fillText(
        this.text,
        this.ww / 2,
        this.wh / 2 + this.fontSize / 3
      );

      const data = this.ctx.getImageData(0, 0, this.ww, this.wh).data;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.globalCompositeOperation = 'screen';

      // stepBase越小，粒子越少，密度就越小
      const stepBase = 100;
      this.particles = [];
      for (let i = 0; i < this.ww; i += Math.round(this.ww / stepBase)) {
        for (let j = 0; j < this.wh; j += Math.round(this.ww / stepBase)) {
          if (data[(i + j * this.ww) * 4 + 3] > stepBase) {
            this.particles.push(new Particle(i, j, this.ww, this.wh));
          }
        }
      }
      this.amount = this.particles.length;
    },
    start() {
      this.started = true;
      requestAnimationFrame(() => {
        this.renderParticles();
      });
    },
    stop() {
      this.started = false;
    },
    onMouseMove(e) {
      // this.mouse.x = e.clientX;
      // this.mouse.y = e.clientY;

      // this.mx = e.clientX;
      // this.my = e.clientY;

      this.transformPos(e.clientX, e.clientY);
    },
    onMouseOut() {
      this.mx = -9999;
      this.my = -9999;
      this.radius = 1;
    },
    onTouchMove(e) {
      if (e.touches.length > 0) {
        // this.mouse.x = e.touches[0].clientX;
        // this.mouse.y = e.touches[0].clientY;

        // this.mx = e.touches[0].clientX;
        // this.my = e.touches[0].clientY;

        this.transformPos(e.touches[0].clientX, e.touches[0].clientY);
      }
    },
    onTouchEnd(e) {
      // this.mouse.x = -9999;
      // this.mouse.y = -9999;
      this.mx = -9999;
      this.my = -9999;
    },
    onMouseClick() {
      this.radius++;
      if (this.radius === 5) {
        this.radius = 0;
      }
    },
    renderParticles() {
      if (!this.started) {
        return;
      }
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let i = 0; i < this.amount; i++) {
        // this.particles[i].render(this.ctx, this.mouse.x, this.mouse.y, this.radius);
        this.particles[i].render(this.ctx, this.mx, this.my, this.radius);
      }
      requestAnimationFrame(this.renderParticles);
    },
    transformPos(x, y) {
      const rect = this.canvas.getBoundingClientRect();
      this.mx = x - rect.x;
      this.my = y - rect.y;
    },
  },
};
</script>

<style scoped>
.canvas-wrapper,
canvas {
  display: block;
  width: 100%;
  height: 100%;
}

@media (max-width: 719px) {
  .canvas-wrapper,
  canvas {
    display: none;
  }
}
</style>

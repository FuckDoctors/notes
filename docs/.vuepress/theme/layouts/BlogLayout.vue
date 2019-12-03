<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />

    <div class="blog-container">
      <div class="blog-body">
        <div class="left">
          <slot name="blog-left" />
        </div>
        <div class="main">
          <slot />
        </div>
        <div class="right">
          <slot name="blog-left" />
        </div>
      </div>

      <BlogFooter />
    </div>
  </div>
</template>

<script>
import Navbar from '@parent-theme/components/Navbar.vue';
import BlogFooter from '@theme/components/BlogFooter.vue';

export default {
  name: 'BlogLayout',
  components: {
    Navbar,
    BlogFooter
  },

  data() {
    return {
      isSidebarOpen: false
    };
  },

  computed: {
    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          'sidebar-open': this.isSidebarOpen
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
    });
  },

  methods: {
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
      this.$emit('toggle-sidebar', this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>
<style scoped lang="postcss">
.blog-container {
  margin: 0 auto;
  padding: 4rem 2.5rem 2rem;
  display: flex;
  flex-direction: column;

  .blog-body {
    flex: 1;
  }
}
</style>

<!-- https://github.com/vueComponent/ant-design-vue/blob/master/site/components/demoBox.vue -->
<template>
  <section
    :id="id"
    :class="['code-box', { expand: codeExpand }, { 'code-box-debug': debug }]"
  >
    <section class="code-box-demo">
      <template v-if="showPreview">
        <template v-if="iframe">
          <div class="browser-mockup">
            <iframe
              :id="`${id}--iframe`"
              :ref="`${id}--iframe`"
              src=""
              frameborder="0"
            ></iframe>
          </div>
        </template>
        <template v-else>
          <div :ref="`${id}--preview`" class="preview">
            <slot name="preview" />
          </div>
        </template>
      </template>
      <div v-else>没有预览</div>
    </section>

    <section class="code-box-meta markdown">
      <div class="code-box-title">
        <a-tooltip :title="debug ? 'Debug' : ''">
          <a :href="`#${id}`">{{ title }}</a>
        </a-tooltip>
      </div>
      <div class="code-box-description">
        <slot name="description">没有描述</slot>
      </div>
      <div class="code-box-actions">
        <a-tooltip
          :title="copied ? 'copied' : 'copy'"
          :visible="copyTooltipVisible"
          @visibleChange="onCopyTooltipVisibleChange"
        >
          <a-icon
            :tabIndex="-1"
            :class="['code-box-code-copy']"
            v-clipboard:copy="sourceCode"
            v-clipboard:success="handleCodeCopied"
            :type="copied && copyTooltipVisible ? 'check' : 'snippets'"
          ></a-icon>
        </a-tooltip>
        <a-tooltip :title="codeExpand ? 'hide' : 'show'">
          <span class="code-expand-icon no-zoom">
            <img
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
              :class="[
                'no-zoom',
                codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show',
              ]"
              @click="handleCodeExpand"
            />
            <img
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
              :class="[
                'no-zoom',
                codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide',
              ]"
              @click="handleCodeExpand"
            />
          </span>
        </a-tooltip>
      </div>
    </section>
    <section
      :class="['highlight-wrapper', { 'highlight-wrapper-expand': codeExpand }]"
    >
      <div :ref="`${id}--code`" class="hightlight">
        <template v-if="highlightedCode">
          <div v-html="highlightedCode"></div>
        </template>
        <template v-else>
          <!-- <div v-html="renderedCode" class="code-box-code"></div> -->
          <div class="code-box-code">
            <span v-if="lang" class="lang">{{ lang.toLowerCase() }}</span>
            <pre :class="`language-${lang}`" v-html="renderedCode"></pre>
          </div>
        </template>
      </div>
    </section>
  </section>
</template>

<script>
import { Tooltip as ATooltip, Icon } from 'ant-design-vue';

import highlight from './code-box/highlight';

export default {
  name: 'CodeBox',
  components: {
    ATooltip,
    AIcon: Icon,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: '',
    },
    lang: {
      type: String,
      default: 'vue',
    },
    code: {
      type: String,
      default() {
        return null;
      },
    },
    highlightedCode: {
      type: String,
      default: null,
    },
    showPreview: {
      type: Boolean,
      default: false,
    },
    iframe: {
      type: Object,
      default: () => null,
    },
    debug: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      sourceCode: 'test',
      codeExpand: false,
      copied: false,
      copyTooltipVisible: false,
    };
  },
  mounted() {
    this.sourceCode = this.getSourceCode();
  },
  computed: {
    renderedCode() {
      if (this.code) {
        // highlight code
        return highlight(this.code, this.lang);
      }

      return '';
    },
  },
  methods: {
    handleCodeExpand() {
      this.codeExpand = !this.codeExpand;
    },
    handleCodeCopied() {
      this.copied = true;
    },
    onCopyTooltipVisibleChange(visible) {
      if (visible) {
        this.copyTooltipVisible = visible;
        this.copied = false;

        return;
      }
      this.copyTooltipVisible = visible;
    },
    getSourceCode() {
      if (typeof document !== 'undefined') {
        // if (this.highlightedCode) {
        //   this.sourceCode = this.$refs[`${this.id}--code`].textContent;
        //   return this.sourceCode;
        // }

        // this.sourceCode = this.$refs[`${this.id}--code`].querySelector('code').textContent;

        // return this.sourceCode;

        let elCode = this.$refs[`${this.id}--code`].querySelector('code');
        if (elCode) {
          this.sourceCode = elCode.textContent;
          return this.sourceCode;
        }

        elCode = this.$refs[`${this.id}--code`];
        this.sourceCode = elCode.textContent;

        return this.sourceCode;
      }
      return '';
    },
    prepareAction() {
      const prefillStyle = '';
      const html = `<div id="container"></div>`;

      const sourceCode = this.getSourceCode();
    },
    renderIframe() {
      // iframe处理
    },
  },
};
</script>

<style scoped lang="postcss">
@import './code-box/theme.pcss';
@import './code-box/code-box.pcss';
</style>

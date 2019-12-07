<!-- https://github.com/vueComponent/ant-design-vue/blob/master/site/components/demoBox.vue -->
<template>
  <section
    :id="id"
    :class="['code-box', { expand: codeExpand }, { 'code-box-debug': debug }]"
  >
    <section class="code-box-demo">
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
        <div class="preview" :ref="`${id}--preview`">
          <slot name="preview" />
        </div>
      </template>
    </section>

    <section class="code-box-meta markdown">
      <div class="code-box-title">
        <a-tooltip :title="debug ? 'Debug' : ''">
          <a :href="`#${id}`">{{ title }}</a>
        </a-tooltip>
      </div>
      <div class="code-box-description">
        <slot name="description"></slot>
      </div>
      <div class="code-box-actions">
        <a-tooltip
          :title="copied ? 'copied' : 'copy'"
          :visible="copyTooltipVisible"
          @visibleChange="onCopyTooltipVisibleChange"
        >
          <a-icon
            :type="copied && copyTooltipVisible ? 'check' : 'snippets'"
            v-clipboard:copy="sourceCode"
            v-clipboard:success="handleCodeCopied"
          ></a-icon>
        </a-tooltip>
        <a-tooltip :title="codeExpand ? 'hide' : 'show'">
          <span class="code-expand-icon">
            <img
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/wSAkBuJFbdxsosKKpqyq.svg"
              :class="[
                'no-zoom',
                codeExpand ? 'code-expand-icon-hide' : 'code-expand-icon-show'
              ]"
              @click="handleCodeExpand"
            />
            <img
              alt="expand code"
              src="https://gw.alipayobjects.com/zos/rmsportal/OpROPHYqWmrMDBFMZtKF.svg"
              :class="[
                'no-zoom',
                codeExpand ? 'code-expand-icon-show' : 'code-expand-icon-hide'
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
      <div class="hightlight" :ref="`${id}--code`">
        <template v-if="highlightedCode">
          {{ highlightedCode }}
        </template>
        <template v-else>
          <slot name="code" />
        </template>
      </div>
    </section>
  </section>
</template>

<script>
import { Tooltip as ATooltip, Icon } from 'ant-design-vue';

export default {
  name: 'CodeBox',
  components: {
    ATooltip,
    AIcon: Icon
  },
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      default: ''
    },
    highlightedCode: {
      type: Object,
      default: null
    },
    iframe: {
      type: Object,
      default: () => null
    },
    debug: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sourceCode: 'test',
      codeExpand: false,
      copied: false,
      copyTooltipVisible: false
    };
  },
  mounted() {
    this.sourceCode = this.getSourceCode();
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
        this.sourceCode = this.$refs[`${this.id}--code`].textContent;
        return this.sourceCode;
      }
      return '';
    },
    renderIframe() {
      // iframe处理
    }
  }
};
</script>

<style scoped lang="postcss">
@import './code-box/theme.pcss';
@import './code-box/code-box.pcss';
</style>

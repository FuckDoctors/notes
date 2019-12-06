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
        <div class="code">
          <slot name="code" />
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
        <a-tooltip :title="copied ? 'copied' : 'copy'">
          <a-icon :type="copied ? 'check' : 'snippets'"></a-icon>
        </a-tooltip>
      </div>
    </section>
  </section>
</template>

<script>
import { Tooltip as ATooltip, Icon as AIcon } from 'ant-design-vue';

export default {
  name: 'CodeBox',
  components: {
    ATooltip,
    AIcon
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
      codeExpand: false,
      copied: false
    };
  },
  methods: {
    renderIframe() {
      // iframe处理
    }
  }
};
</script>

<style scoped>
@import './code-box/theme.pcss';
@import './code-box/code-box.pcss';
</style>

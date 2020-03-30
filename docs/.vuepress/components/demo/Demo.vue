<template>
  <!-- https://github.com/view-design/weapp-doc/blob/master/src/components/demo.vue -->
  <div class="demo demo-block">
    <div class="demo-case">
      <div class="result">Result</div>
      <div class="header">header</div>
      <div class="desc">desc</div>
    </div>
    <div class="split"></div>
    <div class="demo-code">
      <div class="code-container">
        <div class="code-content">xxxx</div>
        <div class="icons">
          <span class="btn">Btn1</span>
          <span class="btn">Btn2</span>
          <span class="btn">Btn3</span>
        </div>
      </div>
      <div class="code-more"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo',
};
</script>

<style lang="postcss">
@import './demo.pcss';
</style>

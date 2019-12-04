<template>
  <BlogLayout>
    <div class="post-layout">
      <Content />
    </div>
  </BlogLayout>
</template>

<script>
import BlogLayout from './BlogLayout';

export default {
  name: 'PostLayout',
  components: {
    BlogLayout
  }
};
</script>

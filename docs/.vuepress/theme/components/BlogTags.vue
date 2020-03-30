<template>
  <div class="blog-tags">
    <BlogTag v-for="tag in tags" :key="tag.name" :tag="tag" />
  </div>
</template>

<script>
import BlogTag from '@theme/components/BlogTag';

export default {
  name: 'BlogTags',
  components: {
    BlogTag,
  },
  props: ['tags'],
};
</script>

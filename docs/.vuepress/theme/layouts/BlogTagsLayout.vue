<template>
  <BlogLayout>
    <BlogTags :tags="$frontmatterKey.list"/>
  </BlogLayout>
</template>

<script>
import BlogLayout from './BlogLayout';
import BlogTags from '@theme/components/BlogTags';

export default {
  name: 'BlogTagsLayout',
  components: {
    BlogLayout,
    BlogTags
  }
};
</script>

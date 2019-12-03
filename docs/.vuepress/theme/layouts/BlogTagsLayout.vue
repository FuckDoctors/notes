<template>
  <BlogLayout>
    <BlogTags :tags="$frontmatterKey.list"/>
  </BlogLayout>
</template>

<script>
import BlogLayout from './BlogLayout';

export default {
  name: 'BlogTagsLayout',
  components: {
    BlogLayout
  }
};
</script>

<template>
  <BlogLayout>
    <div class="blog-tag-container">
      <div
        v-for="page in $pagination.pages"
        :key="page.path"
        class="blog-tag-page"
      >
        <router-link class="blog-tag-link" :to="page.path">
          {{ page.title }}
        </router-link>
      </div>
    </div>
  </BlogLayout>
</template>

<script>
import BlogLayout from './BlogLayout';

export default {
  name: 'BlogTagLayout',
  components: {
    BlogLayout,
  },
};
</script>

<template>
  <div class="blog-tag">
    <router-link class="blog-tag-link" :to="tag.path">
      {{ tag.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'BlogTag',
  props: ['tag']
};
</script>

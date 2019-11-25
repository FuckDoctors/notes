<template>
  <ParentLayout>
    <!-- <template #page-top>
            <Breadcrumb />
        </template> -->
    <Breadcrumb slot="page-top" />
  </ParentLayout>
</template>

<script>
// import ParentLayout from '@parent-theme/layouts/Layout.vue';
import ParentLayout from '@theme/layouts/Layout.vue';
import Breadcrumb from '@theme/components/Breadcrumb.vue';

export default {
  name: 'NoteLayout',
  components: {
    ParentLayout,
    Breadcrumb
  }
};
</script>

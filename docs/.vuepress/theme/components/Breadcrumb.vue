<template>
  <!-- 单个breadcrumb感觉挺怪，所以2个以上时再出 -->
  <div
    class="breadcrumb-container"
    v-if="breadcrumbLinks && breadcrumbLinks.length > 1"
  >
    <span
      class="breadcrumb-item"
      v-for="(breadcrumb, index) in breadcrumbLinks"
      :key="index"
    >
      <a
        v-if="breadcrumb.link && breadcrumb.link.length > 0"
        :href="$withBase(breadcrumb.link)"
        target="_self"
        >{{ breadcrumb.title }}</a
      >
      <span v-else>{{ breadcrumb.title }}</span>
      <!-- prettier对下面这句的格式化有问题，所以使prettier忽略 -->
      <!-- prettier-ignore -->
      <span class="separator" v-if="index != breadcrumbLinks.length - 1">/</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    links: Array,
  },
  computed: {
    breadcrumbLinks() {
      if (this.links) {
        return this.links;
      }

      const links = [];
      const paths = this.$page.regularPath.split('/');
      const levels = paths.length - 1;
      for (let index = levels; index > 1; index--) {
        links.push(paths.slice(0, index).join('/') + '/');
      }

      const breadcrumbs = [];

      links.reverse().forEach((link) => {
        breadcrumbs.push({
          // title: this.getSidebarItems(link)[0].title,
          title: this.getPageTitle(link),
          link: link,
        });
      });

      // 当前page
      if (!/.+\.html$/.test(this.$page.regularPath)) {
        // 不已html开头的话，把最后一个breadcrumb去掉，因为上面多加了一层链接
        breadcrumbs.pop();
      }
      breadcrumbs.push({
        title: this.$page.title,
      });

      // console.log(breadcrumbs);
      return breadcrumbs;
    },
  },
  methods: {
    getPageTitle(regularPath) {
      const { pages } = this.$site;
      const page = pages.filter((p) => p.regularPath === regularPath)[0];
      return page.title;
    },
  },
};
</script>

<style>
.breadcrumb-container {
  display: block;
  padding: 4.5rem 2.5rem 0;
  line-height: 1.7;
  font-weight: normal;
}
.breadcrumb-container .breadcrumb-item {
  display: inline-block;
  color: #999;
}
/* https://www.iviewui.com/components/breadcrumb */
.breadcrumb-container .breadcrumb-item a {
  font-weight: normal;
  color: #515a6e;
  transition: color 0.2s ease-in-out;

  background: 0 0;
  text-decoration: none;
  outline: 0;
  cursor: pointer;
}
.breadcrumb-container .breadcrumb-item a:hover {
  color: #57a3f3;
}
.breadcrumb-container .breadcrumb-item .separator {
  margin: 0 8px;
  color: #dcdee2;
}
/* 加入Breadcrumb后，与theme-default-content相差很远，因此调整一下margin-top，拉进距离 */
/* 另外，style中加scoped后貌似无效果？ */
.breadcrumb-container + .theme-default-content {
  margin-top: -2.5rem !important;
}
</style>

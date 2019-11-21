<template>
    <div class="breadcrumb-container">
        <span class="breadcrumb-item" v-for="(breadcrumb, index) in breadcrumbLinks">
            <a :href="breadcrumb.link" target="_self">{{breadcrumb.title}}</a>
            <span class="separator" v-if="index != breadcrumbLinks.length - 1">/</span>
        </span>
    </div>
</template>

<script>
// import { resolveSidebarItems } from '@theme/util';
import { resolveSidebarItems } from '@parent-theme/util';

export default {
    name: 'Breadcrumb',
    props: {
        links: Array
    },
    computed: {
        breadcrumbLinks() {
            if (this.links) {
                return this.links;
            }

            var links = [];
            const paths = this.$page.regularPath.split('/');
            const levels = paths.length - 1;
            for (let index = levels; index > 1; index--) {
                links.push(paths.slice(0, index).join('/') + '/');
            }
            // links = links.reverse();

            var breadcrumbs = [];
            // for (const link of links) {
            //     breadcrumbs.push({
            //         title: this.getSidebarItems(link)[0].title,
            //         link: link
            //     });
            // }
            links.reverse().forEach(link => {
                breadcrumbs.push({
                    title: this.getSidebarItems(link)[0].title,
                    link: link
                });
            });
            // console.log(breadcrumbs);
            return breadcrumbs;
        }
    },
    methods: {
        getSidebarItems(regularPath) {
            regularPath = regularPath || this.$page.regularPath;
            return resolveSidebarItems(
                this.$page,
                regularPath,
                this.$site,
                this.$localePath)
        }
    }
}
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
    transition: color .2s ease-in-out;

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

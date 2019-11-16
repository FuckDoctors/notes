<template>
    <div class="breadcrumb-container">
        xxx / yyy
    </div>
</template>

<script>
export default {
    name: 'Breadcrumb'
}
</script>

<style>
.breadcrumb-container {
    display: block;
    padding: 4.5rem 2.5rem 0;
    line-height: 1.7;
}
/* 加入Breadcrumb后，与theme-default-content相差很远，因此调整一下margin-top，拉进距离 */
/* 另外，style中加scoped后貌似无效果？ */
.breadcrumb-container + .theme-default-content {
    margin-top: -2.5rem !important;
}
</style>

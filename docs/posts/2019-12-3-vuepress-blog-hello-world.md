---
date: 2019-12-3
tags:
  - vuepress
  - vuepress-blog
author: zhaobc
location: Jinan
title: Hello VuePress Blog
---

## Hello VuePress Blog

Hello World!

<div class="ant-d">
  <CodeBox id="test" title="Test" code="console.log('Hello CodeBox!');" lang="js">
    <template slot="description">
      <span>描述</span>
    </template>
    <template slot="preview">
      <span>预览</span>
    </template>
  </CodeBox>
</div>

<ant-d>
  <CodeBox id="test2" title="Test" highlightedCode="console.log('Hello CodeBox!');" lang="js">
    <template slot="preview">
      <span>预览</span>
    </template>
  </CodeBox>
</ant-d>

<!-- prettier-ignore-start -->
::: slot blog-right
<blog-account
  nickname="Zhao Bin"
  avatar="/account/avatar/avatar2.jpg"
  bio="个人简介"
  title="程序员"
  group="搬砖公司"
  address="山东 济南"
  :tags="['Java', 'Spring', 'Vue']"
  :teams="[
    {
      name: '团队 1',
      avatar: '/account/avatar/avatar2.jpg',
      link: 'https://zhaobc.site',
    }, {
      name: '团队 2',
      link: 'https://zhaobc.site',
    }, {
      name: '团队 3',
    }
  ]"
></blog-account>
:::
<!-- prettier-ignore-end -->

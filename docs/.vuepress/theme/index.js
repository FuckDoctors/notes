// const BASE = require('../config.site').BASE;

module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    [
      '@vuepress/blog',
      {
        directories: [
          {
            // Unique ID of current classification
            id: 'post',
            // Target directory
            dirname: 'posts',
            // 开始使用时，搞了好久，命名感觉配的没问题，死活出不来，debug vuepress 的 node/handleOptions 之后，
            // 发现配置什么的都对，posts下面的东西也没问题，不使用permalink，而是使用/posts/xxx.html可以正常访问，
            // 然后自动跳转到permalink，发现跳转后的permalink自动拼接了base，所以要去掉。
            // 之前调查需要拼接base是多此一举。
            // Path of the `entry page` (or `list page`)
            // 此处不用加base
            path: '/blog/',
            frontmatter: { title: 'Blog' },
            itemPermalink: '/blog/:year/:month/:day/:slug',
            layout: 'BlogLayout',
            itemLayout: 'PostLayout'
          },
          {
            // Unique ID of current classification
            id: 'en_post',
            // Target directory
            dirname: 'en/posts',
            path: '/en/blog/',
            frontmatter: { title: 'Blog' },
            // 多语言支持，此处itemPermalink不能再加语言前缀，不然会出两次，比如：/en/en/blog/xxx
            itemPermalink: '/blog/:year/:month/:day/:slug',
            layout: 'BlogLayout',
            itemLayout: 'PostLayout'
          }
        ],
        frontmatters: [
          {
            // Unique ID of current classification
            id: 'tag',
            // Decide that the frontmatter keys will be grouped under this classification
            keys: ['tag', 'tags'],
            // Path of the `entry page` (or `list page`)
            path: '/tag/',
            frontmatter: { title: 'Tag' },
            layout: 'BlogTagsLayout',
            // Layout of the `scope page`
            scopeLayout: 'BlogTagLayout'
          }
        ]
      }
    ]
  ]
};

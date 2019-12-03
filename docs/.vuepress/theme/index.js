const BASE = require('../config.site').BASE;

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
            // 开始使用时，搞了好久，命名感觉配的没问题，死活出不来，最后发现此处的path不能跟之前的navbar里的link重复？？
            // 需要看看这里：
            // https://github.com/vuepressjs/vuepress-plugin-blog/blob/fa62f58048b6b79b8f0404006101de26cd795291/src/node/handleOptions.ts#L97
            // Path of the `entry page` (or `list page`)
            path: `${BASE}/blogs/`,
            frontmatter: { title: 'Blog' },
            itemPermalink: `${BASE}/blogs/:year/:month/:day/:slug`,
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
            path: `${BASE}/tag/`,
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

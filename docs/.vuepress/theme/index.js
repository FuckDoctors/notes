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
            // Path of the `entry page` (or `list page`)
            path: `${BASE}/blogs/`,
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
            path: `${BASE}/tags/`,
            layout: 'BlogTags'
          }
        ]
      }
    ]
  ]
};

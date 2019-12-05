const sideBarUtil = require('./sidebar/sideBarUtil');
const sideBarMap = require('./sidebar/sidebarMap');

const BASE = require('./config.site').BASE;
const HOST_NAME = require('./config.site').HOST_NAME;

module.exports = {
  base: `${BASE}/`,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '我的笔记',
      description: '记录学习的东西'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'My Notes',
      description: 'Learning Notes'
    }
  },

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/icons/safari-pinned-tab.svg',
        color: '#3eaf7c'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileImage',
        content: '/icons/msapplication-icon-144x144.png'
      }
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],

  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/register-components',
    // [
    //   '@vuepress/last-updated',
    //   {
    //     transformer: (timestamp, lang) => {
    //       console.log(`timestamp: ${timestamp}, lang: ${lang}`);
    //     }
    //   }
    // ],
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    [
      'sitemap',
      {
        hostname: HOST_NAME,
        dateFormatter: time => {
          // console.log(`time: ${time}`);
          return new Date(time).toISOString();
        }
      }
    ],
    [
      'demo-code',
      {
        demoCodeMark: 'demo'
      }
    ],
    'vuepress-plugin-smooth-scroll'
  ],

  theme: '@theme',
  // theme: require.resolve('./theme'),
  themeConfig: {
    repo: 'FuckDoctors/notes',
    docsBranch: 'master',
    docsDir: 'docs',
    editLinks: true,
    // lastUpdated: '上次更新', // string | boolean
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '编辑此页',
        lastUpdated: '上次更新',
        nav: require('./nav/zh'),
        // sidebar: require('./sidebar/zh')
        sidebar: sideBarUtil.inferSideBars(sideBarMap.zh)
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        nav: require('./nav/en'),
        // sidebar: require('./sidebar/en')
        sidebar: sideBarUtil.inferSideBars(sideBarMap.en)
      }
    }
  },

  markdown: {
    lineNumbers: true
  },

  postcss: require('../../postcss.config')
};

/**
 * 代码来着：https://github.com/PanJiaChen/awesome-bookmarks/blob/master/docs/.vuepress/utils.js
 */

const path = require('path');
const fs = require('fs');

function inferSideBars(sideBarMap) {
  const sidebar = {};
  sideBarMap.forEach(({ title, dirname }) => {
    const dirPath = path.resolve(__dirname, '../../' + dirname);
    const parent = `/${dirname}/`;
    const children = fs
      .readdirSync(dirPath)
      .filter(
        (item) =>
          item.endsWith('.md') && fs.statSync(path.join(dirPath, item)).isFile()
      )
      .sort((prev, next) => (next.includes('README.md') ? 1 : 0))
      .map((item) => item.replace(/(README)?(.md)$/, ''));

    sidebar[parent] = [
      {
        title,
        children,
        collapsable: false,
      },
    ];
  });

  // return sidebar;

  // sort，倒序，子目录在上，父目录在下
  let keys = [];
  for (const key in sidebar) {
    if (sidebar.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  keys = keys.sort((a, b) => {
    const levelOrder = b.split('/').length - a.split('/').length;
    if (levelOrder == 0) {
      return a.localeCompare(b);
    } else {
      return levelOrder;
    }
  });

  const newSideBar = {};
  for (const key of keys) {
    newSideBar[key] = sidebar[key];
  }
  return newSideBar;
}

// export default {
//   inferSideBars
// };

module.exports.inferSideBars = inferSideBars;

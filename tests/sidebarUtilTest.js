// import sidebarUtil from '../docs/.vuepress/sidebar/sideBarUtil';
// import sidebarMap from '../docs/.vuepress/sidebar/sidebarMap';

// console.log(sidebarUtil.inferSideBars(sidebarMap));

const sideBarUtil = require('../docs/.vuepress/sidebar/sideBarUtil');
const sidebar = require('../docs/.vuepress/sidebar/sidebarMap');

const zh = sideBarUtil.inferSideBars(sidebar.zh);
console.log(zh);
// console.log(zh['/notes/'][0].children);

console.log(JSON.stringify(zh));

const en = sideBarUtil.inferSideBars(sidebar.en);
console.log(JSON.stringify(en));

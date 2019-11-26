// vuepress/packages/@vuepress/theme-default/util/index.js

import { resolveMatchingConfig, resolveItem } from '@parent-theme/util';

/**
 * @param { Page } page
 * @param { string } regularPath
 * @param { SiteData } site
 * @param { string } localePath
 * @returns { SidebarGroup }
 */
export function resolveSidebarItems(page, regularPath, site, localePath) {
  const { pages, themeConfig } = site;

  const localeConfig =
    localePath && themeConfig.locales
      ? themeConfig.locales[localePath] || themeConfig
      : themeConfig;

  const sidebarConfig = localeConfig.sidebar || themeConfig.sidebar;
  if (!sidebarConfig) {
    return [];
  } else {
    // 获取sidebarConfig
    const { base, config } = resolveMatchingConfig(regularPath, sidebarConfig);
    // return config
    // ? config.map(item => resolveItem(item, pages, base))
    // : [];
    return config || [];
  }
}

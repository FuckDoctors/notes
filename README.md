[![CircleCI](https://circleci.com/gh/FuckDoctors/notes.svg?style=svg)](https://circleci.com/gh/FuckDoctors/notes)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# 开发环境

## 环境配置

- OS
  - Win7
  - macOS
- Nodejs
  - Yarn
- Visual Studio Code

## 使用的 VSC 插件

- Vue 插件
  - Vetur
- 代码格式化插件
  - Prettier - Code Formatter
  - Markdown All in One
- Markdown 工具
  - Markdown All in One
  - Markdown Preview Enhanced
- lint 工具
  - markdownlint
  - textlint
  - ESLint
  - stylelint
- 其他插件
  - Code Spell Checker
  - Path Intellisense
  - PostCSS Language Support
  - 略

## 使用的 nodejs 工具

- remark
  - 检查 markdown 文件
- textlint
  - 检查 markdown 文件
- stylelint
  - 检查 css 文件
- prettier
  - 格式化文件
- eslint
  - 检查&修复 js,ts,vue 文件
- lint-staged
  - 对 git staged 的文件（修改了的文件）做一些检查和修复
- husky
  - 在 pre-commit 时执行`lint-staged`
- Commitizen
  - 替代 git commit
- commitlint
  - 校验 git commit message

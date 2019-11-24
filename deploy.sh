#!/usr/bin/env sh

# https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages

set -e

# yarn docs:build

git config --global user.email "zhbchwin@163.com"
git config --global user.name "FuckDoctors"

cd docs/.vuepress/dist

git init
git add -A
git commit -m "Deploying docs at $(date "+%Y-%m-%d %H:%M:%S")"

git push -f git@github.com:FuckDoctors/learning-notes.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist

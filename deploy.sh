#!/usr/bin/env sh

# https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages

set -e

# yarn docs:build

git config --global user.email "zhbchwin@163.com"
git config --global user.name "FuckDoctors"

cd docs/.vuepress/dist

# https://discuss.circleci.com/t/cant-ignore-the-gh-pages-branch/2002/2
# https://circleci.com/docs/2.0/skip-build/
cat>circle.yml<<EOF
general:
  branches:
    ignore:
      - gh-pages
EOF

git init
git add -A
git commit -m "Deploying docs [ci skip] at $(TZ='Asia/Shanghai' date "+%Y-%m-%d %H:%M:%S %z")"

git push -f git@github.com:FuckDoctors/notes.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist

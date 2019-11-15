#!/bin/bash

# 官方推荐目录
# .
# ├── docs
# │   ├── .vuepress (可选的)
# │   │   ├── components (可选的)
# │   │   ├── theme (可选的)
# │   │   │   └── Layout.vue
# │   │   ├── public (可选的)
# │   │   ├── styles (可选的)
# │   │   │   ├── index.styl
# │   │   │   └── palette.styl
# │   │   ├── templates (可选的, 谨慎配置)
# │   │   │   ├── dev.html
# │   │   │   └── ssr.html
# │   │   ├── config.js (可选的)
# │   │   └── enhanceApp.js (可选的)
# │   │ 
# │   ├── README.md
# │   ├── guide
# │   │   └── README.md
# │   └── config.md
# │ 
# └── package.json

mkdir docs
cd docs

echo '# Hello VuePress!' > README.md
echo '' > config.md

mkdir guide
cd guide
echo '# Guide' > README.md

cd ..
mkdir .vuepress
cd .vuepress
mkdir components
mkdir theme
mkdir public
mkdir styles
mkdir templates

touch config.js

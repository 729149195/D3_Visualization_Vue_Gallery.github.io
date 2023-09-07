#!/usr/bin/env sh

# 构建
npm run build

# 进入构建文件夹
# cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

# git init
git add .
git commit -m 'deploy'

# 如果你要部署在 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:729149195/D3_Visualization_Vue_Gallery.github.io.git master
# git push
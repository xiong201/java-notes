#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

msg='来自github action的自动部署'
githubUrl=https://xiong201:${GITHUB_TOKEN}@github.com/xiong201/java-notes.git
git config --global user.name "xiong201"
git config --global user.email "1963942081@qq.com"

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist

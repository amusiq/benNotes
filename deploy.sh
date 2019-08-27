# 自动部署脚本  

# 构建
yarn build
# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的 master 分支
git push -f git@github.com:amusiq/benNotes.github.io.git master:gh-pages
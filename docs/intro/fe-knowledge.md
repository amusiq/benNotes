# 前端开发入行指南

> 从啥都不会到系统性~~精通~~略懂

## 前言

只是用来记录一下自己的知识体系。

## 学习计划

::: tip
这一章包含我个人总结的结构性资料，以供参考，作为前端开发的正式入门
:::

### 路线图

[2019 年成為 Web 開發人員的路線圖](https://github.com/goodjack/developer-roadmap-chinese)  
[Front-end Developer Handbook 2019](https://frontendmasters.com/books/front-end-handbook/2019/)

## 开发环境体系

::: tip
这一章是开发环境的准备工作，需要对工具的使用加以练习
:::

### Node

[Node.js Crash Course](https://www.youtube.com/watch?v=fBNz5xF-Kx4)  
[npm-package.json | npm Documentation](https://docs.npmjs.com/files/package.json)

简单开发只需安装某一个版本的 `node`  
多项目开发环境可以利用 `nvm` 进行切换

提高 npm 装包的速度，可以安装 `nrm` 接着 `nrm use taobao`，然后正常使用 npm 安装命令。

- node
  - 现代化前端开发基本环境，在命令行中运行 JS 代码
  - Node 偶数版是长期支持版，进度参考官网
  - `brew install node`、`brew install node@10`（可指定版本）
- nvm
  - Node Version Manager，Node 版本（环境）切换工具
  - `brew install nvm`
- npm
  - nope pacckage manager，包管理器，node 装好自带的工具
  - `npm i -g npm` 是升级 npm 自己
- nrm
  - Npm registry manager，npm 仓库切换器
  - `npm i -g nrm`
- yarn
  - 可代替 npm 的 manager，运行更快
  - `brew install yarn`

#### 基本用法

```bash
# 查看版本
node -v
npm -v
yarn -v

# nvm
nvm ls
nvm use 10

# nrm
nrm ls
nrm use taobao

npm i -g @vue/cli # 全局安装
npm init # 新建一个项目
npm i lodash # 在项目中安装一个包
npm un lodash # 在项目中卸载一个包

yarn global add @vue/cli # 全局安装
npm init # 新建一个项目
yarn add lodash # 在项目中安装一个包
yarn remove lodash # 在项目中卸载一个包
```

### GIT

[Introduction to Git Use](https://developpaper.com/introduction-to-git-use/)  
[Git and GitHub for Poets - Daniel Shiffman](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV)  
[Git 教程 - 廖雪峰](https://www.liaoxuefeng.com/wiki/896043488029600)  
[Git 工作流程 - 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-workflow.html)  
[git flow 入门教程](https://www.jianshu.com/p/b446c43577f9)
[A successful Git branching model](https://nvie.com/posts/a-successful-git-branching-model/)  
[Git Merge - Atlassian Tutorials](https://www.atlassian.com/git/tutorials/using-branches/git-merge)  
[What is the difference between `git merge` and `git merge --no-ff`?](https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff)

git 是一个版本管理工具，比较适合前端项目。  
svn 是另一种版本管理工具。

::: tip
因为自己的电脑是 macbook,所以包管理工具使用的是 brew。
:::

- 相关工具
  - CLI
    - git
      - `brew install git`
    - tig
      - 命令行版的 'source-tree'
      - git 自带的 `git log --oneline --decorate --all --graph` 也能达到类似效果
      - `brew install tig`
  - GUI
    - source-tree
      - 好用的图形化 git 管理器
      - `brew cask install sourcetree`
    - githubDeskop
      - git 官方出品 GUI 管理器，对 github 本身比较友好
      - `brew cask install github`
- 概念/规范/工具
  - git flow 工作流模型
  - `--no-ff` (no fast forward merge) 参数，merge 的时候总是建立新分支，保持各分支含义清晰。
  - 语义化版本（[Semantic Versioning](https://semver.org/lang/zh-CN/)）
    - [conventional-changelog/standard-version](https://github.com/conventional-changelog/standard-version)
    - `npm i -g standard-version`
  - 约定式提交（[Conventional Commits](https://www.conventionalcommits.org/zh/v1.0.0-beta.4/)）
    - [commitizen/cz-cli](https://github.com/commitizen/cz-cli)
    - `npm i -g commitizen`
  - changelog（[conventional-changelog](https://github.com/conventional-changelog/conventional-changelog)）
  - submodules/lerna，管理多仓库项目的方式
  - badge（[shields.io](https://shields.io/)）

#### 基本用法

```bash
# tldr git

# tig --all

git init

git status
git log

git add <. | files-names >
git commit -m <messages>

git branch <new-branch>
git checkout <existed-branch>
git checkout -b <new-branch> <based-branch>

git merge [--no-ff] <from-branch>

git reset [--hard] <existed-branch>

git fetch --all
git pull <origin> <master>
git push <origin> <master>
```

### GitHub 社区

GitHub 是一个免费的 git 远端仓库，  
有很多著名的项目和工具都是托管在 GitHub 上的。

类似的远端仓库还有 gitlab、bitbucket、coding 等…

但 GitHub 也是一个社区，除 git 基本功能外还提供很多服务。

### 浏览器

Chrome，对于前端来说调试代码非常方便的浏览器  
`brew cask install google-chrome`

有丰富的插件市场，包括很多前端框架的调试插件。

- 了解调试技巧
  - [在 Chrome DevTools 中调试 JavaScript 入门](https://developers.google.com/web/tools/chrome-devtools/javascript/?hl=zh-cn)
- 至少要装这些插件
  - 找个喜欢的划词翻译（沙拉查词-聚合词典划词翻译）
- 设置
  - 确认搜索引擎设置为 google

### 编辑器

[Visual Studio Code Intro & Setup](https://www.youtube.com/watch?v=fnPhJHN0jTE)

VSCode，微软的开源代码编辑器  
`brew cask install visual-studio-code`

（其他主流的 GUI 编辑器还有 WebStorm、Sublime Text 等）

- 了解和熟悉这些功能
  - 插件市场
  - 内建 git 管理功能
  - console
  - snippets
  - settings
  - 代码格式化
  - 快捷键系统
    - `cmd + p`，`cmd + shift + p`
    - `cmd + f`，`cmd + shift + f`
    - `cmd + d`，`cmd + shift + L`
  - diff 功能

### 系统设置

- 解决有时候 VSCode 持续高占用的问题  
  `alias kk="kill $(ps aux | grep -e Code\ Helper | awk '{if($3>60)print\$2}')"`

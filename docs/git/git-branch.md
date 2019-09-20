# Git

> Ben 喜欢用的分布式版本控制系统。

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

（版本管理不只可以用于项目代码，也可以用来管理 '.psd'、游戏存档…等）

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

## Git 分支命名规范

- 其实不管在什么项目开发的时候（当然不仅仅是用于项目代码，也可以管理.psd、游戏存档...等），都应该使用版本控制，不仅能减少许多不必要的麻烦（例如与另一个小伙伴），还能让你在进行某一项开发的时候临时接到一个新需求而不会感到手忙脚乱。其实在开始使用 Git 分支管理的时候，我在思考怎么命名分支才能够清楚每个分支的作用。上网找了许多资料，目前一下的分支命名规范是我觉得比较适合大多数项目开发模式的。

```bash
分支:		   命名:		  说明:

主分支		   master		  主要用来发布正式版本，就是提供给用户使用的版本
开发分支		   dev 		      永远是功能最全的分支
功能分支		   feature-*	  新功能分支，某个功能点正在开发阶段
发布版本		   release-*	  发布定期要上线的功能
修复分支		   bug-*		  修复线上代码的 bug

```

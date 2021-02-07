---
title: hoembrew 使用教程
date: 2019-10-23
cover: https://w.wallhaven.cc/full/dp/wallhaven-dp52yj.jpg
tags:
    - hoembrew
categories:
    - mac    
---

### hoembrew 官网

https://brew.sh

### 替换homebrew 源

一般使用国内的源下载速度会更快，这边我们用的是清华大学的源

[点我查看详情](https://mirrors.tuna.tsinghua.edu.cn/help/homebrew/)

### 开始替换

```
cd "$(brew --repo)"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core.git

brew update
```

### 如果需要还原

```
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core

brew update
```


### 如果替换源之后brew update没反应

```
cd /usr/local/Homebrew 
git pull origin master //更新homebrew
brew update
already up-to-date
brew upgrade
```

### 常用的一些命令

命令 | 解释
---|---
brew install [package] | 安装包
brew update	|更新服务器包目录|
brew uninstall |	卸载包|
brew upgrade |	升级包|
brew list -version |	列出所有安装的包
brew prune |	清理无效项

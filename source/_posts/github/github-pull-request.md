---
title: 如何优雅地在Github上贡献代码
date: 2020-12-21 16:21:55
cover: https://w.wallhaven.cc/full/x8/wallhaven-x81z9d.jpg
tags:
    - github
categories:
    - 前端    
---

# 如何优雅地在Github上贡献代码

Github 相信已经成为家喻户晓的代码托管工具, 但访问了多位周围编程爱好者后发现, 对其的使用还仅限于 下载项目源码 和 备份项目源码 的程度, 今天我就来介绍一下一个比较重要的使用场景 贡献代码

以众安前端组件库[Zarm](https://github.com/ZhongAnTech/zarm) 为例:

## Fork 项目

首先需要fork这个项目, 进入项目页面, 点击右上角的Fork按钮

你的 github 帐号中会出现 zarm 这个项目

在本地电脑(Linux)上使用以下命令: 得到一个 zarm 文件夹

> git clone https://github.com/BestDingSheng/zarm.git

获取原项目代码

进入 zarm 文件夹, 添加 zarm 的远程地址

> git remote add upstream https://github.com/ZhongAnTech/zarm.git

获取 zarm 最新源码

> git pull upstream master

现在我们在 fork 来的 master 分支上, 这个 master 留作跟踪 upstream 的远程代码...

## 创建分支

好了, 现在可以开始贡献我们的代码了
按照国际惯例, 我们一般不在 master 上提交新代码, 而需要为新增的功能或者fixbug建立新分支, 再合并到 master 上, 使用以下代码创建分支

> git checkout -b branch1

现在我们可以在分支上更改代码了

假设我们已经添加了一些代码, 提交到代码库

> git commit -a -m "new commit"

## 合并修改

一个常见的问题是远程的 upstream (zarm) 有了新的更新, 从而会导致我们提交的 Pull Request 时会导致冲突, 因此我们可以在提交前先把远程其他开发者的commit和我们的commit合并.

使用以下代码切换到 master 分支:

> git checkout master

使用以下代码拉出远程的最新代码:

> git pull upstream master

切换回 branch1:

> git checkout branch1

如果忘记自己之前建的分支名可以用 `git branch` 查看

把 master 的 commit 合并到 branch1:

> git rebase master

把更新代码提交到自己的 branch1 中:

> git push origin branch1

## Pull Request

提交 Pull Request
你可以在你的 github 代码仓库页面切换到 branches 页面点击 branch1 分支后点击 New pull request 按钮, 添加相关注释后提交.
OR
切换到 branch1 分支的代码仓库点击 Compare & pull request 按钮, 添加相关注释后提交.
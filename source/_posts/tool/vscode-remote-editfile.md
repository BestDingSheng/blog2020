---
title: 使用 vscode 编辑服务器上的文件
date: 2021-03-15 13:55:03
cover: https://w.wallhaven.cc/full/57/wallhaven-57wgl8.jpg
tags:
    - vscode
categories:
    - 前端    
---

## 安装 

### 本地

Vscode 安装  Remote VSCode 插件

### 服务器

```
sudo wget -O /usr/local/bin/rmate https://raw.github.com/aurora/rmate/master/rmate
sudo chmod a+x /usr/local/bin/rmate
```

## 使用

### 本地

在本机的 VSCode 中按 F1 ,然后输入 Remote: Start server ,回车后启动服务

打开自带终端，在命令行中输入 ssh -R 52698:127.0.0.1:52698 root@106.52.254.135 -p 22

然后在终端中找到你要修改的文件，输入 rmate 文件名


### 参考资料

- [使用 VSCode 编辑远程服务器文件](https://blog.csdn.net/riba2534/article/details/89678622)
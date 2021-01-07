---
title: Mac 如何安装 python3
date: 2021-01-03 20:39:51
cover: https://w.wallhaven.cc/full/o3/wallhaven-o3d1g9.jpg
tags:
    - mac
categories:
    - python    
---

## 前言

最近看 github 上[抢茅台的项目](https://github.com/ChinaVolvocars/jd_maotai_seckill)比较火，找了个star 比较多的项目看了下，发现是用 python 写的，我 mac 电脑上的 python 的版本是 2.7 ，需要升级到 3.8 以上版本

## 安装

- 安装地址：https://www.python.org/downloads/
- 点击安装，全部使用默认操作即可，python3.8 默认安装地址：/Library/Frameworks/Python.framework/Versions/3.8

## 修改环境变量

方法如下：

```bash
open  ~/.bash_profile
```

1 修改方式（可以直接复制）

```bash
# Setting PATH for Python 3.8
# The original version is saved in .bash_profile.pysave
PATH="/Library/Frameworks/Python.framework/Versions/3.8/bin:${PATH}"
export PATH
export PATH="/usr/local/opt/python@3.8/bin:$PATH"
alias python="/Library/Frameworks/Python.framework/Versions/3.8/bin/python3.8"
alias pip="/Library/Frameworks/Python.framework/Versions/3.8/bin/pip3.8"
```

2 source ~/.bash_profile
3 然后打开终端，输入 python --version 

### 使用

如果要使用 python3 运行脚本 或者 安装东西的话

```bash
python3 main.py
pip3 install
```

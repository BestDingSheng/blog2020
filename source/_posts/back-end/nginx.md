---
title: nginx 简单使用
date: 2021-02-25 22:23:19
cover: https://w.wallhaven.cc/full/o3/wallhaven-o3d1g9.jpg
tags:
    - express
categories:
    - 后端    
---

## 安装

### centos 7

#### 命令安装

```bash
$ sudo yum -y install nginx   # 安装 nginx
$ sudo yum remove nginx  # 卸载 nginx
```

使用 yum 进行 Nginx 安装时，Nginx 配置文件在 /etc/nginx 目录下。

#### 配置nginx服务

```bash
$ sudo systemctl enable nginx # 设置开机启动 
$ sudo service nginx start # 启动 nginx 服务
$ sudo service nginx stop # 停止 nginx 服务
$ sudo service nginx restart # 重启 nginx 服务
$ sudo service nginx reload # 重新加载配置，一般是在修改过 nginx 配置文件时使用。
```


## SSL


- nginx 配置 ssl [ssl](https://www.cnblogs.com/djjlovedjj/p/9910920.html)
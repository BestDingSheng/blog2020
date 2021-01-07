---
title: GitHub+jsDelivr+PicGo搭建免费图床
date: 2020-12-21 18:22:18
cover: https://w.wallhaven.cc/full/6o/wallhaven-6oq5lq.jpg
tags:
    - github
    - 图床
categories:
    - 前端    
---

## 前言 

使用GitHub仓库创建一个图床，存在的问题是国内访问github的速度不是很快，可以利用jsDelivr CDN加速访问（jsDelivr 是一个免费开源的 CDN 解决方案）国内该平台是首个「打通中国大陆与海外的免费CDN服务」，网页开发者无须担心中国防火墙问题而影响使用。

## 创建 github 仓库

​ 创建一个github仓库，专门存放上传的图片。

![](https://cdn.jsdelivr.net/gh/BestDingSheng/ImgHosting/Deson-PIC/20201222112944.png)

## 生成 Access token

按照下列步骤依次生成token,生成的token只显示一次,页面关闭后就看不了了,需要先将它复制下来。

setting -> Developer settting -> personal access tokens

![](https://cdn.jsdelivr.net/gh/BestDingSheng/ImgHosting/Deson-PIC/20201222113152.png)

## 配置 PicGo 使用 jsDelivr 的 CDN

下载PicGo软件，安装。下载路径：https://github.com/Molunerfinn/picgo/releases

打开PicGo进行配置 将刚才在Github上创建的仓库名和分支名填入设置中，生成的Token复制到配置中。

![](https://cdn.jsdelivr.net/gh/BestDingSheng/ImgHosting/Deson-PIC/20201222113258.png)

指定存储文件夹的路径，PicGo上传文件的时候，将自动在github仓库中创建此文件夹。

如果设置了自定义域名，PicGo生成的访问链接，将是【自定义域名+文件名】的拼接方式。因为我们需要使用jsDelivr加速访问，所以将自定义域名设置为【https://cdn.jsdelivr.net/gh/用户名/图床仓库名 】。

如我的 https://cdn.jsdelivr.net/gh/BestDingSheng/ImgHosting

当然PicGo还有许多配置，不懂可以看看PicGo提供的文档，https://picgo.github.io/PicGo-Doc/zh/guide/


<!-- ## 参考资料

[GitHub+jsDelivr+PicGo搭建免费图床](https://segmentfault.com/a/1190000020240864) -->
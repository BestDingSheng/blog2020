---
title: ssh 免密登录
date: 2021-03-17 22:11:18
cover: https://w.wallhaven.cc/full/dp/wallhaven-dp52yj.jpg
tags:
    - ssh
categories:
    - 服务器    
---


## 免密登录

### 1.客户端生成公私钥


本地客户端生成公私钥：（一路回车默认即可）

```bash
ssh-keygen
```

上面这个命令会在用户目录.ssh文件夹下创建公私钥

```bash
cd ~/.ssh

# 下创建两个密钥：
# id_rsa （私钥）
# id_rsa.pub (公钥)
```

### 2.上传公钥到服务器

这里测试用的服务器地址为：192.168.235.22 用户为：root

```bash
ssh-copy-id -i ~/.ssh/id_rsa.pub root@192.168.235.22
```

上面这条命令是写到服务器上的ssh目录下去了

```bash
cd ~/.ssh
vim authorized_keys
```
可以看到客户端写入到服务器的 id_rsa.pub （公钥）内容。


### 3.测试免密登录

客户端通过ssh连接远程服务器，就可以免密登录了。

```bash
ssh root@192.168.235.22
```

## 设置别名


### 服务器别名设置

使用 cd ~/.ssh/ 进入ssh目录 可以使用 touch config 命令创建 config 文件。

```
Host ding
HostName 106.52.254.135
Port 22
User root
IdentitiesOnly yes
```

### 本机设置 host

vim /etc/hosts

添加下面配置

106.52.254.135 ding

### 别名登录

```
ssh root@ding
```

## 参考资料

- [找不到host](https://stackoverflow.com/questions/20252294/ssh-could-not-resolve-hostname-hostname-nodename-nor-servname-provided-or-n)
- [免密登录](https://blog.csdn.net/jeikerxiao/article/details/84105529)
- [ssh别名](https://blog.csdn.net/xlgen157387/article/details/50282483)
- [前端服务器运维指南](https://shanyue.tech/op/iptables.html)
---
title: nvm 快速入门
date: 2021-02-02 10:14:25
cover: https://w.wallhaven.cc/full/o3/wallhaven-o3d1g9.jpg
tags:
    - nvm
categories:
    - 前端    
---


## 前言 

nvm 是Node.js 的版本管理器(version manager)，可在同一台主机上安装多个版本的Node.js 环境，因为不同专案可能会使用不同的Node.js 版本，那就需要透过一个版本管理器来切换不同的Node.js 版本。

## 安装NVM

可用cURL或wget指令使用安装脚本安装或更新nvm：

```bash
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

或

```bash
$ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.34.0/install.sh | bash
```

`此安装脚本会将nvm repo clone到~/.nvm，并且将source line新增至你的profile设定( ~/.bash_profile、~/.zshrc、~/.profile或~/.bashrc)：`

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

```

如果在Linux执行安装脚本后，执行下面指令会显示以下讯息或没有任何讯息时，建议重开一个新的终端机(terminal)再重新执行一次nvm指令：

```bash
$ command -v nvm
nvm: command not found
```

如果还是无法使用nvm，可执行下面指令立即应用ZSH 的设定：

```bash
$ source .zshrc
```


注意：

- 使用nvm时，不需要sudo即可使用npm -g全域安装模组，所以与其执行sudo npm i -g，不如执行npm i -g
- 若你有~/.npmrc，请确保里面不包含任何prefix的设定(因为与nvm不相容)
- 你可以(但不应该)保留以前在“系统”安装的Node.js，但nvm只对你的使用者帐户(用于安装nvm的使用者帐户)可用。可能会导致版本不match，因为其他使用者会使用/usr/local/lib/node_modules/*，而使用者帐户会使用~/.nvm/versions/node/vX.X.X/lib/node_modules/*


## --version：确认NVM 是否安装成功

```bash
$ nvm --version
0.34.0
```


## install：利用NVM 安装Node.js
安装NVM 后，其实还没安装Node 环境：

```bash
$ node  
zsh: command not found: node
```


如果执行下面指令，会提醒你需要执行install指令才能安装Node.js：


```bash
$ nvm use node
N/A: version "node -> N/A" is not yet installed.

You need to run "nvm install node" to install it before using it.

```


安装最新版的Node.js：

```bash
$ nvm install node
Downloading and installing node v12.8.1...
Downloading https://nodejs.org/dist/v12.8.1/node-v12.8.1-linux-x64.tar.xz...
#################################################################################################### 100.0%
Computing checksum with sha256sum
Checksums matched!
Now using node v12.8.1 (npm v6.10.2)
Creating default alias: default -> node (-> v12.8.1)
```

如果要指定安装版本，可以直接指定版本号：

```bash
$ nvm install 8.9.1
```

安装的第一个版本的Node.js会成员nvm的预设版本，新的shell就会以预设版本的Node.js来使用(例如：nvm alias default)。

查看目前安装Node.js 的版本：

```bash
$ node -v
v12.8.1
```



## ls-remote：察看可用的安装版本
可以看目前有哪些可用版本可安装，在版本号前面的->箭头符号代表目前nvm正在使用的Node.js版本：

```bash
$ nvm ls-remote
...
       v10.16.1   (LTS: Dubnium)
       v10.16.2   (LTS: Dubnium)
       v10.16.3   (Latest LTS: Dubnium)
...
        v12.7.0
        v12.8.0
->      v12.8.1

```



不过刚刚的ls-remote指令会把所有可用的版本都列出来，但通常会选择安装LTS (Long-term support，长期支援)版，所以只要加上-lts参数就可以指列出可用的LTS版：

```bash

$ nvm ls-remote --lts
...
       v10.16.1   (LTS: Dubnium)
       v10.16.2   (LTS: Dubnium)
       v10.16.3   (Latest LTS: Dubnium)
```

如果版本号的文字有特殊颜色(不是白色字)，则代表该版本的Node.js有透过nvm安装过，例如：我的电脑就安装了v10.16.3和v12.8.1：

![](https://titangene.github.io/images/nvm/nvm-ls-remote.png)



## ls：查看目前安装了哪些版本
ls 指令可以查看目前安装了哪些版本：

```bash
$ nvm ls
       v10.16.3
->      v12.8.1
default -> node (-> v12.8.1)
node -> stable (-> v12.8.1) (default)
stable -> 12.8 (-> v12.8.1) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/dubnium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.1 (-> N/A)
lts/dubnium -> v10.16.3
```



## use：切换Node.js 版本


如果要使用nvm切换正在使用的Node.js版本，可用use指令：

```bash
$ nvm use v10.6.3
Now using node v10.16.3 (npm v6.9.0)
```

如果切换的目标版本还没安装，nvm 会提醒你要安装：

```bash
$ nvm use lts/carbon 
N/A: version "lts/carbon -> N/A" is not yet installed.

You need to run "nvm install lts/carbon" to install it before using it.

```

透过nvm安装Node.js时，nvm会将不同的Node.js版本储存在~/.nvm/versions/node/vX.X.X，然后再修改$PATH，将指定版本的Node.js路径加入：

```bash

$ nvm current
v10.16.3
$ echo $PATH             
/home/titan/.nvm/versions/node/v10.16.3/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

$ use v12.13.1
$ nvm current
v12.13.1
$ echo $PATH             
/home/titan/.nvm/versions/node/v12.13.1/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

```


在nvm 的各个Node.js 版本安装的全域套件都会在各自版本的目录内安装，所以在切换至新安装的Node.js 版本后需要重新安装，也因为如此，不同版本间的套件就不会有冲突问题。

## current：查看目前使用版本
如果忘记自己切换到哪个版本，可以用current指令：

```bash
$ nvm current
v10.6.3
```


## run：直接执行Node.js
如果要直接执行Node.js，可以使用下面指令：

```bash
$ nvm run node
Running node v12.8.1 (npm v6.10.2)
Welcome to Node.js v12.8.1.
Type ".help" for more information.
>
```



## exec：指定要执行的Node.js 版本

```bash
$ nvm exec 12.8.1 node
Running node v12.8.1 (npm v6.10.2)
Welcome to Node.js v12.8.1.
Type ".help" for more information.
>

```



## which：察看Node.js 的安装路径
执行下面指令可以查看特定版本的Node.js 的安装路径：


```bash
$ nvm which 12.8.1
/home/titan/.nvm/versions/node/v12.8.1/bin/node
```



## alias

如下图有些版本的文字是红色或是显示N/A，就代表该版本未在电脑安装：


![](https://titangene.github.io/images/nvm/nvm-ls.png)

预设alias 可以取代版本号：

- node：安装最新版的Node.js
- iojs：安装最新版的io.js
- stable：此alias已弃用，仅适用于v0.12以及更旧版，目前改为nodealias
- unstable：此alias 为v0.11，最后一个“unstable” (不稳定) Node release，在v1.0 之后的版本都是稳定版(in SemVer, versions communicate breakage, not stability)

可在下面这些指令使用以上预设别名：

- nvm install
- nvm use
- nvm run
- nvm exec
- nvm which
- … 等


## 查看别名

```bash
$ nvm alias                                                                    * ?
default -> v10.16.3
node -> stable (-> v12.8.1) (default)
stable -> 12.8 (-> v12.8.1) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/erbium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.2 (-> N/A)
lts/dubnium -> v10.17.0 (-> N/A)
lts/erbium -> v12.13.0 (-> N/A)

```



## 设定别名
```bash
$ nvm alias titan-test v10.15.3                                                  * ?
titan-test -> v10.15.3
```


接着用nvm alias指令就会看到刚刚新增的别名所对应的Node.js版本：

```bash
$ nvm alias                                                                    * ?
titan-test -> v10.15.3
default -> v10.16.3
node -> stable (-> v12.8.1) (default)
stable -> 12.8 (-> v12.8.1) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/erbium (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.17.1 (-> N/A)
lts/carbon -> v8.16.2 (-> N/A)
lts/dubnium -> v10.17.0 (-> N/A)
lts/erbium -> v12.13.0 (-> N/A)

```
## 资料来源 

[nvm](https://github.com/nvm-sh/nvm#install--update-script)
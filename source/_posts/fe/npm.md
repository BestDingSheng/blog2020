---
title: npm 常用命令
date: 2021-02-18 10:09:23
cover: https://w.wallhaven.cc/full/o3/wallhaven-o3d1g9.jpg
tags:
    - npm
categories:
    - 前端    
---

## npm 简介 

npm有两层含义。一层含义是Node.js的开放式模块登记和管理系统，网址为 http://npmjs.org。
另一层含义是Node.js默认的模块管理器，是一个命令行下的软件，用来安装和管理node模块。

npm不需要单独安装。在安装node的时候，会连带一起安装npm。但是，node附带的npm可能不是最新版本，最好用下面的命令，更新到最新版本。

npm采用”semver语义版本“管理软件包。所谓语义版本，就是指版本号为X.Y.Z （主版本号.次版本号.修订号）

```bash
# 将npm更新到最新版本
$ npm install npm@latest -g
$ npm install npm@0.1.1 -g
# 查看npm的版本和配置
$ npm -v
# npm命令列表
$ npm help
# 各个命令的简单用法
$ npm -l
# 配置信息
$ npm config list -l
```

## npm info

```bash
# 查看每个模块的具体信息
$ npm info underscore
$ npm info underscore description
$ npm info underscore homepage
$ npm info underscore version
```

## npm search

```bash
# npm仓库搜索某个模块
$ npm search <搜索词>
## npm list
# 列出当前目录安装的所有模块
$ npm list
# 列出全局安装的所有模块
$ npm -global list
# npm list命令也可以列出单个模块。
$ npm list underscore
```

## npm install

**模块可以“全局安装”，也可以“本地安装”**

- “全局安装”指的是将一个模块直接下载到Node的安装目录中，各个项目都可以调用；
- “本地安装”指的是将一个模块下载到当前目录的node_modules子目录，然后只有在当前目录和它的子目录之中，才能调用这个模块；

```bash
# “本地安装”某个模块
$ npm install <package name>
# npm也支持直接输入github地址
$ npm install git://github.com/package/path.git
$ npm install git://github.com/package/path.git#0.1.0
# 使用global参数，可以“全局安装”某个模块
$ sudo npm install -global [package name]
```

## 保存依赖关系

install命令可以指定所安装的模块属于哪一种性质的依赖关系，即出现在packages.json文件的哪一项中，可以通过npm init自动生成package.json>

* `--save`：模块名将被添加到dependencies，可以简化为参数-S。
* `--save-dev`: 模块名将被添加到devDependencies，可以简化为参数-D。


npm install默认会安装dependencies字段和devDependencies字段中的所有模块，如果使用production参数，可以只安装dependencies字段的模块。

```bash
$ npm install --production
# 或者
$ NODE_ENV=production npm install
```


## npm update，npm uninstall

```bash
# 升级本地安装的模块
npm update -global [package name]
# 删除本地安装的模块
sudo npm uninstall [package name] -global
```

## npm script

自定义脚本。npm scripts 不是简简单单地执行 shell 语句而已，在执行之前它会将 node_modules/.bin/ 加入到环境变量 PATH 中，所以在 npm scripts 中可以直接使用那些存在于 node_modules/.bin/ 中的可执行文件。

```bash
"scripts":{
    "test": "mocha"
}
```

上述运行 `npm run test` 等同于：`./node_modules/.bin/mocha`


## 传入参数

希望给 mocha 传入一些选项，如：

```bash
mocha --reporter spec
```

通过脚本需要如下执行：

```bash
npm test -- --reporter spec
```

或者将选项直接写在 package.json 中：


```bash
"scripts":{
    "test": "mocha --reporter spec"
}

```

## 环境变量

在执行 npm script 的时候还可以访问到一些特殊的环境变量

通过 process.env.npm_package_xxx 可以获得到 package.json 中的内容。

```json
{
    "name": "blog",
    "version": "1.0.0",
    "description": "个人博客初稿（定版后内容会发布到https://blog.csdn.net/ligang2585116）",
    "repository": {
    "type": "git",
    "url": "git+https://github.com/381510688/Blog.git"
    }
}
```

通过process.env.npm_package_name 可以获取到 package.json 中 name 的值 blog；通过 process.env.npm_package_repository_type 可以拿到值 git

通过process.env.npm_config_xxx 来获取 npm config 中的值。比如，process.env.npm_config_user_email 可以拿到 user.email 的值。

```bash
npm run build --report
```

可以通过 process.env.npm_config_report 来获取是否存在该变量，这一是webpack3调用webpack-bundle-analyzer 机制。更多npm-config信息 [click](https://docs.npmjs.com/cli/v7/using-npm/config/)


还有一个比较特殊的环境变量 process.env.npm_lifecycle_event 在执行不同的 npm script 的时候这个值是不同的，比如执行 npm run build 的时候，这个值为 build，通过判断这个变量，将一个脚本使用在不同的 npm script 中。


## 默认脚本

npm在执行某些命令时，会执行一些默认脚本（前提是这些脚本已经设置了）。

- prepublish：发布一个模块前执行。
- publish, postpublish：发布一个模块后执行。
- preinstall：安装一个模块前执行。
- install, postinstall：安装一个模块后执行。
- preuninstall, uninstall：卸载一个模块前执行。
- postuninstall：卸载一个模块后执行。
- preversion, version：更改模块版本前执行。
- postversion：更改模块版本后执行。
- pretest, test, posttest：运行npm test命令时执行。
- prestop, stop, poststop：运行npm stop命令时执行。
- prestart, start, poststart：运行npm start命令时执行。

prerestart, restart, postrestart：运行npm restart命令时执行。如果没有设置restart脚本，则依次执行stop和start脚本。

pm run为每条命令提供了pre和post两个钩子（hook）。以npm run lint为例，执行这条命令之前，npm会先查看有没有定义prelint和postlint两个钩子，如果有的话，就会先执行npm run prelint，然后执行npm run lint，最后执行npm run postlint。

如果执行过程出错，就不会执行排在后面的脚本，即如果prelint脚本执行出错，就不会接着执行lint和postlint脚本。

另外，不能在pre脚本之前再加pre，即preprelint脚本不起作用。

## npm publish

**设定个人信息**

```bash
$ npm set init.author.name "ligang"
$ npm set init.author.email "ligang_WEB@163.com"
$ npm set init.author.url "https://github.com/381510688/my-git"
```

**向npm系统申请用户名**

```bash
$ npm adduser
```

## 登录

```bash
$ npm login
```

**<非第一次>要发布新版本的时候，更新软件的版本**

```bash
$ npm version <update_type> -m "<message>"
npm version patch增加一位补丁号（比如 1.1.1 -> 1.1.2）
npm version minor增加一位小版本号（比如 1.1.1 -> 1.2.0）
npm version major增加一位大版本号（比如 1.1.1 -> 2.0.0）。
```

## 发布

```bash
$ npm publish
```

## npmrc

- 项目配置文件 (/path/to/my/project/.npmrc)
- 用户配置文件 (~/.npmrc)
- 系统配置文件 ($PREFIX/etc/npmrc)
- 内置配置文件 (/path/to/npm/npmrc)


[参考来源](https://blog.csdn.net/ligang2585116/article/details/47703291)
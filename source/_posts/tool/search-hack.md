---
title: github 以及 g 的一些搜索技巧
date: 2021-02-07 11:15:11
cover: https://w.wallhaven.cc/full/57/wallhaven-57wgl8.jpg
tags:
    - 日常工具
categories:
    - 前端    
---


## 前言

> 我们在日常生活中搜索引擎 g baidu 以及 github 都是必不可少的, 如何能更高效使用他们呢 请看下文

## github

- in:name example 名字中有“example”
- in:readme example readme中有“example”
- in:description example 描述中有“example”
- stars:>1000 star>1000
- forks:>1000 fork>1000
- pushed:>2019-09-01 2019年9月1日后有更新的
- language:java 用Java编写的项目
- [more](https://help.github.com/en/github/searching-for-information-on-github/searching-for-repositories#search-by-repository-name-description-or-contents-of-the-readme-file)

## g

- site 指定搜索的某个网站。例：redux site:github.com
- filetype，指定搜索的文件类型。例：前端 filetype:pdf
- 双引号，代表完全匹配，使关键词不分开，顺序都不能变。
- intitle，在结果的标题中包含关键词，一次只能搜索一个关键词。
- 减号 排除缩小范围 前端 -github
- inurl，返回的结果的url中包含关键词。例如：seo inurl:byr，它将返回网址中包含byr，而内容中包含搜索词的结果。一次只能搜索一个关键词。
- [more](https://my.oschina.net/u/4394201/blog/3389202)

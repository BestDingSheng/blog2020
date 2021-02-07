---
title: 命名规范
date: 2021-01-11 10:49:49
cover: https://w.wallhaven.cc/full/rd/wallhaven-rd3pjw.jpg
tags:
    - 规范
categories:
    - 前端    
---


# 命名规范

驼峰式命名法介绍

- Pascal Case 大驼峰式命名法   
	首字母大写。eg：StudentInfo、UserInfo、ProductInfo
- Camel Case 小驼峰式命名法   
	首字母小写。eg：studentInfo、userInfo、productInfo

## 文件资源命名
- 文件名不得含有空格
- 文件名建议只使用小写字母，不使用大写字母。( 为了醒目，某些说明文件的文件名，可以使用大写字母，比如README、LICENSE。)
- 文件名包含多个单词时，单词之间建议使用半角的连词线 ( - ) 分隔。
- 引入资源使用相对路径，不要指定资源所带的具体协议 ( http:, https: ) ，除非这两者协议都不可用。

推荐 
 
```html
<script src="//cdn.com/foundation.min.js"></script>
```

不推荐 

```html
<script src="http://cdn.com/foundation.min.js"></script>
```

## 变量命名  
命名方式：小驼峰式命名方法。  
命名规范：类型 + 对象描述的方式。

推荐  

```javascript
var tableTitle = "LoginTable";
```

不推荐  

```javascript
var getTitle = "LoginTable";
```

## 常量命名  
命名方法：全部大写  
命名规范：使用大写字母和下划线来组合命名，下划线用以分割单词。

推荐

```javascript
var MAX_COUNT = 10;
var URL = 'http://www.baidu.com';
```

## 函数命名  
命名方式：小驼峰方式 ( 构造函数使用大驼峰命名法 )  
命名规则：前缀为动词

动词 | 含义 		 		 		 	| 返回值 
----|------------------------------|-------
can | 判断是否可执行某个动作（权限）  |函数返回一个布尔值。<br>true：可执行；false：不可执行
has	| 判断是否含有某个值| 函数返回一个布尔值。<br>true：含有此值；false：不含有此值
is	| 判断是否为某个值	| 函数返回一个布尔值。<br>true：为某个值；false：不为某个值
get	| 	获取某个值	| 函数返回一个非布尔值
set | 设置某个值| 无返回值、返回是否设置成功或者返回链式对象


推荐

```javascript
// 是否可阅读
function canRead() {
	return true;
}

// 获取姓名
function getName() {
	return this.name
}
```

## 类的成员

公共属性和方法：同变量命名方式  
私有属性和方法：前缀为下划线(_)后面跟公共属性和方法一样的命名方式

推荐

```javascript
function Student(name) {
    var _name = name; // 私有成员

    // 公共方法
    this.getName = function() {
        return _name;
    }

    // 公共方式
    this.setName = function(value) {
        _name = value;
    }
}
var st = new Student('tom');
st.setName('jerry');
console.log(st.getName()); // => jerry：输出_name私有变量的值
```

## React组件命名
命名方式：大驼峰式命名法

推荐

```javascript
Button
SwipeAction
```
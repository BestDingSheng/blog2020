---
title: 如何遍历异步任务
date: 2021-03-17 15:06:44
cover: https://w.wallhaven.cc/full/o3/wallhaven-o3d1g9.jpg
tags:
    - javascript
categories:
    - 前端    
---


## 不要等待结果


```javascript
function delay() {
    return new Promise(resolve=> setTimeout(resolve, 3000));
}
async function delayedLog(item) {
    await delay();
    console.log(item);
}
async function processArray(array) {
    array.forEach(async (item) => {
        await delayedLog(item)
    })
    console.log('Done');
}
processArray([1,2,3]);
// Done!
// 1
// 2
// 3

```

## 串行遍历


```javascript
function delay() {
    return new Promise(resolve=> setTimeout(resolve, 3000));
}
async function delayedLog(item) {
    await delay();
    console.log(item);
}
async function processArray(array) {
    for (const item of array) {
        await delayedLog(item)
    }
    console.log('Done');
}
processArray([1,2,3]);
// 1
// 2
// 3
// Done!
```

##  并行遍历

```javascript
function delay() {
    return new Promise(resolve=> setTimeout(resolve, 3000));
}
async function delayedLog(item) {
    await delay();
    console.log(item);
}
async function processArray(array) {
    const promisees = array.map(delayedLog)
    await Promise.all(promisees)
    console.log('Done');
}
processArray([1,2,3]);
```

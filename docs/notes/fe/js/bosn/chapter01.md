---
layout: NoteLayout
sidebar: auto
prev: ./
next: ./chapter02
meta:
  - name: description
    content: JavaScript深入浅出 数据类型
  - name: keywords
    content: JavaScript深入浅出 数据类型 隐式转换 typeof instanceOf prototype
tags:
  - js
---

# 第1章 数据类型

## 1-1 JavaScript深入浅出课程介绍

略

## 1-2 JavaScript六种数据类型

原始类型（基本类型）：

- number
- string
- boolean
- null
- undefined

除此之外，JavaScript还有一种对象类型（复合类型）`object`。
object包含以下类型：

- Function
- Array
- Date
- ...

## 1-3 JavaScript 隐式转换

关于`+`和`-`：
`+`隐式转为字符串，`-`隐式转换为数字。

``` js
"37" - 7 // 30
"37" + 7 // 377
```

因此可以巧用`+`和`-`转换数据类型，比如使用`- 0`（减0），转换为数字，使用`+ ''`（加空字符串）转换为字符串。

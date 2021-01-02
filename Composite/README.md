# 组合模式

## 1. 概念
组合模式（Composite Pattern）又叫 整体-部分模式，它允许你将对象组合成树状结构来表现 整体-部分 层次结构 让使用者可以以一致的方式处理组合对象以及部分对象

## 2. 你曾见过的组合模式

文件树结构如下
```
Folder 1
├── Folder 2
│   ├── File 1.txt
│   ├── File 2.txt
│   └── File 3.txt
└── Folder 3
    ├── File 4.txt
    ├── File 5.txt
    └── File 6.txt
```

文件夹是树形结构的容器节点，容器节点可以继续包含其他容器节点， 像树枝上还可以有其他树枝一样；也可以包含文件 不再增加新的层级， 就像树的叶子一样处于末端， 因为被称为叶节点。  

本文中，叶节点又称为叶对象，容器节点因为可以包含容器节点和非容器节点，又称为组合对象。

类似这样的结构还有公司的组织层级。  

在类似的场景中， 有以下特点：
1.  结构呈整体-部分的树形关系，整体部分一般称为组合对象，组合对象下还可以有组合对象和叶对象
2.  组合对象和叶对象有一致的接口和数据结构，以保证操作一致
3.  请求从树的最顶端往下传递，如果当前处理请求的对象是叶对象，叶对象自身会对请求作出相应的处理；如果当前处理的是组合对象，则遍历其下的子节点（叶对象），将请求继续传递给这些子节点；



## 3. 实例的代码实现

我们可以用JavaScript来将之前的文件夹例子实现以下

代码 `composite1.ts`


## 4.实战中的组合模式

类似于组合模式的结构其实我们经常碰到，比如浏览器的 DOM 树，从 `<html/>` 根节点到 `<head/>`、`<body/>`、`<style/>` 等节点，而 `<body/>` 节点又可以有 `<div/>`、`<span/>`、`<p/>`、`<a/>` 等等节点，这些节点下面还可以有节点，而且这些节点的操作方式有的也比较类似。

代码 `composite2.ts`

## 5. 组合模式的优缺点

组合模式的优点：
1. 由于组合对象和叶对象具有同样的接口，因此调用的是组合对象还是叶对象对使用者来说没有区别，使得使用者面向接口编程；
2. 如果想在组合模式的树中增加一个节点比较容易，在目标组合对象中添加即可，不会影响到其他对象，对扩展友好，符合开闭原则，利于维护；


组合模式的缺点：
1. 增加了系统复杂度，如果树中对象不多，则不一定需要使用；
2. 如果通过组合模式创建了太多的对象，那么这些对象可能会让系统负担不起；
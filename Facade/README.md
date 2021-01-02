# 外观模式

## 1. 概念
外观模式（Facade Pattern）又叫门面模式， 定义一个将子系统的一组接口集成在一起的高层接口，以提供一个一致的外观。 外观模式让外界减少与子系统内多个模块的直接交互 从而减少耦合，让外界可以更轻松的使用子系统。  


本质是 `封装交互, 简化调用`

在类似场景中，这些例子有以下特点：

1.  一个统一的外观为复杂的子系统提供一个简单的高层功能接口；
2.  原本访问者直接调用子系统内部模块导致的复杂引用关系，现在可以通过只访问这个统一的外观来避免；

<img src="https://cdn.nlark.com/yuque/0/2019/jpeg/140909/1573966863532-675d2f4b-c9ed-4ab6-acda-3a47fd90bec1.jpeg">


## 2. 实战中的外观模式
### 2.1 函数参数重载
有一种情况，比如某个函数有多个参数，其中一个参数可以传递也可以不传递，你当然可以直接弄两个接口，但是使用函数参数重载的方式，可以让使用者获得更大的自由度，让两个使用上基本类似的方法获得统一的外观。

```js
function domBindEvent(nodes, type, selector, fn) {
    if (fn === undefined) {
        fn = selector
        selector = null
    }
    // ... 剩下相关逻辑
}
domBindEvent(nodes, 'click', '#div1', fn)
domBindEvent(nodes, 'click', fn)
```

### 2.2 抹平浏览器的兼容性问题
外观模式经常被用于 JavaScript 的库中，封装一些接口用于兼容多浏览器，让我们可以间接调用我们封装的外观，从而屏蔽了浏览器差异，便于使用。
比如经常用的兼容不同浏览器的事件绑定方法：

```js
function addEvent(element, type, fn) {
    if (element.addEventListener) {      // 支持 DOM2 级事件处理方法的浏览器
        element.addEventListener(type, fn, false)
    } else if (element.attachEvent) {    // 不支持 DOM2 级但支持 attachEvent
        element.attachEvent('on' + type, fn)
    } else {
        element['on' + type] = fn        // 都不支持的浏览器
    }
}
var myInput = document.getElementById('myinput')
addEvent(myInput, 'click', function() {
    console.log('绑定 click 事件')
})
```



## 3. 源码中的外观模式

### 3.1 Vue 源码中的函数参数重载

### 3.2  Axios 源码中的外观模式
Axios 可以使用在不同环境中，那么在不同环境中发送 HTTP 请求的时候会使用不同环境中的特有模块，Axios 这里是使用外观模式来解决这个问题的：

```js
function getDefaultAdapter() {
  // ...
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // Nodejs 中使用 HTTP adapter
    adapter = require('./adapters/http');
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // 浏览器使用 XHR adapter
    adapter = require('./adapters/xhr');
  }
  
  // ...
}
```

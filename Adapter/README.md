# 适配器模式

## 1. 概念
适配器模式（Adapter Pattern） 又称为 包装器模式 将一个类（对象）的接口（方法， 属性）转化为用户需要的另一个接口，解决类（对象）之间接口不兼容的问题。


主要功能是进行转换匹配， 目的是复用已有的功能 而不是实现新的接口。 也就是说， 访问者需要的功能应该是已经实现好了的，不需要再去实现功能，适配器模式主要是负责把不兼容的接口转换成访问者期望的格式而已


适配器模式的原理大概如下图：

访问者需要目标对象的某个功能，但是这个对象的接口不是自己期望的，那么通过适配器模式对现有对象的接口进行包装，来获得自己需要的接口格式。

<img src="https://cdn.nlark.com/yuque/0/2019/jpeg/140909/1573966754468-51584bad-9713-44fd-beaa-cfe2d05f11c8.jpeg?x-oss-process=image%2Fresize%2Cw_746">


## 2. 适配器模式在实战中的应用

### 2.1 jQuery.ajax 适配 Axios

有的使用 jQuery 的老项目使用 $.ajax 来发送请求，现在的新项目一般使用 Axios，那么现在有个老项目的代码中全是 $.ajax，如果你挨个修改，那么 bug 可能就跟地鼠一样到处冒出来让你焦头烂额，这时可以采用适配器模式来将老的使用形式适配到新的技术栈上：

```js
/* 适配器 */
function ajax2AxiosAdapter(ajaxOptions) {
    return axios({
        url: ajaxOptions.url,
        method: ajaxOptions.type,
        responseType: ajaxOptions.dataType,
        data: ajaxOptions.data
    })
      .then(ajaxOptions.success)
      .catch(ajaxOptions.error)
}
/* 经过适配器包装 */
$.ajax = function(options) {
    return ajax2AxiosAdapter(options)
}
$.ajax({
    url: '/demo-url',
    type: 'POST',
    dataType: 'json',
    data: {
        name: '张三',
        id: '2345'
    },
    success: function(data) {
        console.log('访问成功！')
    },
    error: function(err) {
        console.err('访问失败～')
    }
})
```


### 2.2 业务数据适配

### 2.3 Vue 计算属性

## 3 源码中的适配器模式

Axios 是比较热门的网络请求库，在浏览器中使用的时候，Axios 的用来发送请求的 adapter 本质上是封装浏览器提供的 API XMLHttpRequest，我们可以看看源码中是如何封装这个 API 的


## 4.  优缺点

适配器模式的优点：
1. 已有的功能如果只是接口不兼容，使用适配器适配已有功能，可以使原有逻辑得到更好的复用，有助于避免大规模改写现有代码；
2. 可扩展性良好，在实现适配器功能的时候，可以调用自己开发的功能，从而方便地扩展系统的功能；
3. 灵活性好，因为适配器并没有对原有对象的功能有所影响，如果不想使用适配器了，那么直接删掉即可，不会对使用原有对象的代码有影响；


适配器模式的缺点：会让系统变得零乱，明明调用 A，却被适配到了 B，如果系统中这样的情况很多，那么对可阅读性不太友好。如果没必要使用适配器模式的话，可以考虑重构，如果使用的话，可以考虑尽量把文档完善。
# 工厂模式

## 1. 工厂模式的概念
工厂模式 （Factory Pattern），根据不同的输入返回不同类的实例，一般用来创建`同一类对象`。工厂方式的主要思想是将对象的创建（使用者调用new）与对象（类的定义）的实现分离.


<img src="https://cdn.nlark.com/yuque/0/2020/png/140909/1587000379376-192a31f3-4e50-44a4-a60f-aa5ec1e5693a.png?x-oss-process=image%2Fresize%2Cw_746">

<b>工厂模式的使用场景</b>
1. 对象的创建比较复杂，而访问者无需知道创建的具体流程；
2. 处理大量具有相同属性的小对象；


## 2.  实例的代码实现
例如 `document.createElement` 根据输入的 标签元素 不同 创建不用的 dom元素  



## 3. 源码重的工厂模式

### 3.1 Vue/React 源码中的工厂模式

创建虚拟DOM的`createElement`


### 3.2 vue-router 源码中的工厂模式


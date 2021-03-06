## 单例模式

### 概念
1. Singleton: 特定类 这是我们需要访问的类 访问的要拿到的是他们的实例
2. instance： 单例 这是特定类的实例 特定类一个会提供 getInstace 方法 来获取该单例
3. getInstance ：获取单例的方法，或者直接由 new 操作符获取


这里有几个实现点要关注一下：
1. 访问时始终返回的是同一个实例；
2. 自行实例化，无论是一开始加载的时候就创建好，还是在第一次被访问时；
3. 一般还会提供一个 getInstance 静态方法用来获取它的实例；



### 惰性单例

1.  懒汉式单例是在使用时才实例化
2.  饿汉式是当程序启动时或单例模式类一加载的时候就被创建。


```
// 饿汉式
const HungrySingleton = (function() {
    const _instance = new FuncClass()
    
    return function() {
        return _instance
    }
})()
// 懒汉式
const LazySingleton = (function() {
    let _instance = null
    
    return function() {
        return _instance || (_instance = new FuncClass())
    }
})()
```



### 优缺点

<p>优点</p>
1.  单例模式在创建后在内存中只存在一个实例，节约了内存开支和实例化时的性能开支，特别是需要重复使用一个创建开销比较大的类时，比起实例不断地销毁和重新实例化，单例能节约更多资源，比如数据库连接；
2.  单例模式可以解决对资源的多重占用，比如写文件操作时，因为只有一个实例，可以避免对一个文件进行同时操作；
3.  只使用一个实例，也可以减小垃圾回收机制 GC（Garbage Collecation） 的压力，表现在浏览器中就是系统卡顿减少，操作更流畅，CPU 资源占用更少；


<p>缺点</p>

1.  单例模式对扩展不友好，一般不容易扩展，因为单例模式一般自行实例化，没有接口；
2.  与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化；

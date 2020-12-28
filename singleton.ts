// 单例模式的代码实现
// 形成一个闭包 保存单一的实例

const single = (function() {
  let _instance = null
  const Single = function() {
    if (_instance) return _instance
    _instance = this
  }

  Single.getInstance = function() {
    if (_instance) return _instance
    return _instance = new Single()
  }

  return Single
})()

const v1 = new single()
const v2 = new single()
const v3 = single.getInstance()

console.log(v1 === v2)  // true
console.log(v1 === v3)  // true
console.log(single)

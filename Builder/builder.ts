/** 建造者 汽车部件厂家 提供具体零部件的生产 */
class CarBuilder{
  color: string
  weight: number
  tyreType: string
  tyreIntro: string
  engineType: string
  engineIntro: string

  constructor(color: 'white', weight: 0) {
    this.color = color
    this.weight = weight
  }

  // 生产部件 轮胎
  buildTyre(type: string) {
    switch(type) {
      case 'small':
        this.tyreType = '小号轮胎'
        this.tyreIntro = '正在使用小号轮胎'
        break

      case 'normal':
        this.tyreType = '中号轮胎'
        this.tyreIntro = '正在使用中号轮胎'
        break
      case 'big':
        this.tyreType = '大号轮胎'
        this.tyreIntro = '正在使用大号轮胎'
        break
    }
  }

  // 生产部件 发送机
  buildEngine(type: string) {
    switch (type) {
      case 'small':
        this.engineType = '小马力发动机'
        this.engineIntro = '正在使用小马力发动机'
        break
      case 'normal':
        this.engineType = '中马力发动机'
        this.engineIntro = '正在使用中马力发动机'
        break
      case 'big':
        this.engineType = '大马力发动机'
        this.engineIntro = '正在使用大马力发动机'
        break
    }
  }
}

/** 奔驰厂家 负责最终汽车产品的装配 */
function benChiDirector(tyre, engine, param) {
  var _car = new CarBuilder(param.color, param.weight)
  _car.buildEngine(engine)
  _car.buildTyre(tyre)
  return _car
}

// 获得产品实例
var benchi1 = benChiDirector('small', 'big', { color: 'red', weight: '1600kg' })
console.log(benchi1)
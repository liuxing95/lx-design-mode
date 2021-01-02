let examCarNum = 0
/**驾考车对象 */
class ExamCar {
  carId: number
  carType: string
  usingState: boolean

  constructor(carType) {
    examCarNum++;
    this.carId = examCarNum
    this.carType = carType ? '手动档' : '自动档'
    this.usingState = false    // 是否正在使用
  }

  /** 在本车上考试 */
  examine(candidateId) {
    return new Promise((resolve) => {
      this.usingState = true
      console.log(`考生- ${ candidateId } 开始在${ this.carType }驾考车- ${ this.carId } 上考试`)
      setTimeout(() => {
        this.usingState = false
        console.log(`%c考生- ${ candidateId } 在${ this.carType }驾考车- ${ this.carId } 上考试完毕`, 'color:#f40')
        resolve(true)                       // 0~2秒后考试完毕
      }, Math.random() * 2000)
    })
  }
}

/** 手动档汽车对象池 */
const ManualExamCarPool = {
  _pool: [],                  // 驾车对象池
  _candidateQueue: [],        // 考生队列

  /** 注册考生ID 列表 */
  registCandidates(candidateList) {
    candidateList.forEach(candidateId => this.registCandidate(candidateId))
  },

  /* 注册手动档考生 */
  registCandidate(candidateId) {
    const examCar = this.getManualExamCar()    // 找一个未被占用的手动档驾考车
    if (examCar) {
        examCar.examine(candidateId)           // 开始考试，考完了让队列中的下一个考生开始考试
          .then(() => {
              const nextCandidateId = this._candidateQueue.length && this._candidateQueue.shift()
              nextCandidateId && this.registCandidate(nextCandidateId)
          })
    } else this._candidateQueue.push(candidateId)
  },

  /* 注册手动档车 */
  initManualExamCar(manualExamCarNum) {
      for (let i = 1; i <= manualExamCarNum; i++) {
          this._pool.push(new ExamCar(true))
      }
  },

  /* 获取状态为未被占用的手动档车 */
  getManualExamCar() {
      return this._pool.find(car => !car.usingState)
  }
}

ManualExamCarPool.initManualExamCar(3)          // 一共有3个驾考车
ManualExamCarPool.registCandidates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // 10个考生来考试
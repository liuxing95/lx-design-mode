var candidateNum = 10; // 考生数量
var examCarNum = 0; // 驾考车数量

/** 驾考车构造函数 */
function ExamCar(carType) {
  examCarNum++;
  this.cardId = examCarNum
  this.carType = carType ? '手动档' : '自动档'
}

ExamCar.prototype.examine = function(candidateId) {
  console.log('考生- ' + candidateId + ' 在' + this.carType + '驾考车- ' + this.carId + ' 上考试')
}

var manualExamCar = new ExamCar(true)
var autoExamCar = new ExamCar(false)
for (var candidateId = 1; candidateId <= candidateNum; candidateId++) {
    var examCar = candidateId % 2 ? manualExamCar : autoExamCar
    examCar.examine(candidateId)
}
console.log('驾考车总数 - ' + examCarNum)
// 输出: 驾考车总数 - 2
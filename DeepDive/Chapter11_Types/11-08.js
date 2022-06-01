// 값에 의한 전달.

var score = 80
var copy = score

console.log(score, copy)
console.log(score === copy) // true

console.log()

// score와 copy의 값은 같지만 전혀 다른 메모리에 저장되어 있기에
// score의 값을 변경해도 copy에 아무런 영향을 주지 못한다.
score = 100
console.log(score, copy)
console.log(score === copy) // false

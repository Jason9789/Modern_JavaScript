// 얕은 복사 : 한 단계까지만 복사하는 것
// 깊은 복사 : 객체에 중첩되어 있는 객체까지 모두 복사하는 것

const o = { x: { y: 1 } }

// 얕은 복사
const c1 = { ...o } // 스프레드 문법
console.log(c1 === o) // false
console.log(c1.x === o.x) // true

// lodash의 cloneDeep을 사용한 깊은 복사
const _ = require('lodash')

// 깊은 복사
const c2 = _.cloneDeep(o)
console.log(c2 === o) // false
console.log(c2.x === o.x) // false

// 일반 깊은 복사?
const v = 1
const c3 = v
console.log(c3 === v) // true

const o2 = { x: 1 }

const c4 = o2
console.log(c4 === o2) // true

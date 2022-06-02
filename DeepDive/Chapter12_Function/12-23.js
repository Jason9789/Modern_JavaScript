function add(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new TypeError('인수는 모두 숫자 값이어야 합니다.')
  }

  return x + y
}

// console.log(add(2))
// console.log(add('a', 'b'))

// ---------------------------------------
function add2(a, b, c) {
  a = a || 0
  b = b || 0
  c = c || 0

  return a + b + c
}
console.log(add2(1, 2, 3)) // 6
console.log(add2(1, 2)) // 3
console.log(add2(1)) // 1
console.log(add2()) // 0

// ---------------------------------------
function add3(a = 0, b = 0, c = 0) {
  return a + b + c
}

console.log(add3(1, 2, 3)) // 6
console.log(add3(1, 2)) // 3
console.log(add3(1)) // 1
console.log(add3()) // 0

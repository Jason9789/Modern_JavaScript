function sum() {
  let res = 0

  for (let i = 0; i < arguments.length; i++) {
    res += arguments[i]
  }

  return res
}

console.log(sum()) // 0
console.log(sum(1, 2)) // 3
console.log(sum(1, 2, 3)) // 6

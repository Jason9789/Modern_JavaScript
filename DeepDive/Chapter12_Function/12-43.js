function countDown(n) {
  for (var i = n; i >= 0; i--) {
    console.log(i)
  }
}

countDown(10)

function countDown2(n) {
  if (n < 0) return

  console.log(n)
  return countDown2(n - 1)
}

countDown2(10)

function factorial(n) {
  if (n <= 1) return 1

  return n * factorial(n - 1)
}

console.log(factorial(5))

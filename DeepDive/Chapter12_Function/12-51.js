// 콜백 함수

// 외부에서 전달받은 f를 n만큼 반복 호출한다.

function repeat(n, f) {
  for (var i = 0; i < n; i++) {
    f(i) // i를 전달하면서 f 호출
  }
}

var logAll = function (i) {
  console.log(i) // 0 1 2 3 4
}

// 반복 호출할 함수를 인수로 전달.
repeat(5, logAll)

var logOdds = function (i) {
  if (i % 2 != 0) {
    console.log(i) // 1 3
  }
}

repeat(5, logOdds)

var x = 1

function foo() {
  var x = 10
  bar()
}

function bar() {
  console.log(x)
}

// JS는 렉시컬 스코프를 따른다.
// 밑의 두 함수는 전역 위치에서 호출하였기에 전역 변수 x의 영향을 받는다.
foo()
bar()

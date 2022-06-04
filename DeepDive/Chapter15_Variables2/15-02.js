// var 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정한다.
// 따라서 함수 외부에서 var 키워드로 선언한 변수는 코드 블록 내에서 선언해도 모두 전역 변수가 된다.

var x = 1

if (true) {
  var x = 10
}

console.log(x)

var i = 10

for (var i = 0; i < 5; i++) {
  console.log(i)
}

console.log(i) // 의도치 않게 변수 i의 값이 변경되었다.

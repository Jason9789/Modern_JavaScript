// 함수 생성 시점과 함수 호이스팅

// 함수 참조
console.dir(add) // [Function: add]
console.dir(sub) // undefind

// 함수 호출
console.log(add(2, 5)) // 7
console.log(sub(2, 5)) // TypeError: sub is not a function

// 함수 선언문
// 함수 선언문으로 정의한 함수는 선언문 이전에 호출할 수 있다.
// 런타임 이전에 자바스크립트 엔진에 의해서 먼저 실행된다.
// 이처럼 코드의 선두로 끌어 올려진 것처럼 동작하는 js 고유의 특징을 '함수 호이스팅'이라고 한다.
function add(x, y) {
  return x + y
}

// 함수 표현식
// 그러나 표현식으로 정의한 함수는 이전에 호출할 수 없다.
// 이는 이 둘의 생성 시점이 다르기 때문이다.
var sub = function (x, y) {
  return x - y
}

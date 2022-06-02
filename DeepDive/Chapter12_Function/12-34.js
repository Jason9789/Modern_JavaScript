// 익명 즉시 실행 함수
;(function () {
  var a = 3
  var b = 5
  return a * b
})()

// 즉시 실행 함수는 반드시 그룹 연산자 ( ... )로 감싸야 한다.
// 그렇지 않으면 다음과 같이 에러가 발생한다.

function () {   // SyntaxERror: Function statements require a function name
    // ...
}();
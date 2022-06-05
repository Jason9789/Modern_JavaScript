// constructor : 생성자 함수로서 호출할 수 있는 함수
// non-constructor : 객체를 생성자 함수로서 호출할 수 없는 함수.

// 일반 함수 정의 : 함수 선언문, 함수 표현식
function foo() {}
const bar = function () {}

// 프로퍼티 x의 값으로 할당된 것은 일반 함수로 정의된 함수이다.
// 이는 메서드로 인정하지 않는다.
const bax = {
  x: function () {},
}

// 일반 함수로 정의됟ㄴ 함수만 constructor다
new foo() // -> foo{}
new bar() // -> bar{}
new baz.x() // -> x {}

// 화살표 함수 정의
const arrow = () => {}

new arrow() // TypeError: arrow is not a constructor

// 메서드 정의: ES6의 메서드 축약 표현만 메서드로 인정.
const obj = {
  x() {},
}

new obj.x() // TypeError: obj.x is not a constructor

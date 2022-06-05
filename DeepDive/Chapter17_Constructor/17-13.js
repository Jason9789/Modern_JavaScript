// 함수는 객체이다.
function foo() {}

foo.prop = 10
foo.a = 100

foo.method = function () {
  console.log(this.prop)
  console.log(this.a)
}

foo.method()

// 일반적인 함수로서 호출: [[Call]]이 호출된다.
foo()

// 생성자 함수로서 호출: [[Construct]]가 호출된다.
new foo()

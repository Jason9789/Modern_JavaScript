function foo() {
  console.log('foo')
}
foo()(
  // 함수 리터럴을 피연산자로 사용하면 함수 선언문이 아니라 함수 리터럴 표현식으로 해석된다.
  function bar() {
    console.log('bar')
  }
)
bar() // 결국 ReferenceError: bar is not defined 가 호출된다.

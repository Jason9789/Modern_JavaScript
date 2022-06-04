// var 키워드로 변수를 중복 선언하면 아무런 에러가 발생하지 않았지만,
// let 키워드로 이름이 같은 변수를 중복 선언하면 문법 에러가 발생한다.

// var 키워드로 선언한 변수는 오직 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프를 따른다.
// let 키워드는 모든 코드 블록을 지역 스코프로 인정하는 블록 레벨 스코프를 따른다.

let foo = 1

{
  let foo = 2
  let bar = 3
}

console.log(foo) // 1
console.log(bar) // ReferenceError: bar is not defined

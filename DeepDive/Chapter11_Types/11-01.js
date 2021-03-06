// const 키워드를 사용해 선언한 변수는 재할당이 금지된다.
// 상수는 재할당이 금지된 변수일 뿐이다.
const o = {}

// const 키워드를 사용해 선언한 변수에 할당한 원시 값(상수)은 변경할 수 있다.
// 하지만 const 키워드를 사용해 선언한 변수에 할당한 객체는 변경할 수 있다.
o.a = 1
console.log(o)

o.score = 70
console.log(o)

o.score = 90
console.log(o)

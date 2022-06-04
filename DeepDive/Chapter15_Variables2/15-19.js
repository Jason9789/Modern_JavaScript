// const 키워드로 선언된 변수에 원시 값을 할당한 경우 값을 변경할 수 없다.
// 하지만 const 키워드로 선언된 변수에 객체를 할당한 경우 값을 변경할 수 있다.

const person = {
  name: 'Lee',
}

person.name = 'Kim'

console.log(person)

// 객체는 원시 값과는 다르게 여러 개의 식별자가 하나의 객체를 공유할 수 있다.

var person = {
  name: 'Jeon',
}

console.log(person)

// 프로퍼티 값 갱신
person.name = 'Kim'
// 프로퍼티 동적 생성
person.address = 'Seoul'

console.log(person)

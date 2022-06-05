// new 여ㄴ산자와 함ㅔ Object 생성자 함수를 호출하면 빈 객체를 생성하여 반환한다.
// 빈 객체를 생성한 이후 프로퍼티 또는 메서드를 추가하여 객체를 완성할 수 있다.

const person = new Object()

person.name = 'Jeon'
person.sayHello = function () {
  console.log('Hi! My name is ' + person.name)
}

console.log(person) // { name: 'Jeon', sayHello: [Function (anonymous)] }
person.sayHello() // Hi! My name is Jeon

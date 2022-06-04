// 프로퍼티 정의란 새로운 프로퍼티를 추가하면서 프로퍼티 어트리뷰트를 명시적으로 정의하거나,
// 기존 프로퍼티의 프로퍼티 어트리뷰트를 재정의하는 것을 말한다.

const { set } = require('lodash')

// 예를 들어 프로퍼티 값을 갱신 가능하도록 할 것인지,
// 프로퍼티를 열거 가능하도록 할 것인지,
// 프로퍼티를 재정의 가능하도록 할 것인지 정의할 수 있다.

const person = {}

// 데이터 프로퍼티 정의
Object.defineProperty(person, 'firstName', {
  value: 'Ungmo',
  writable: true,
  enumerable: true,
  configurable: true,
})

Object.defineProperty(person, 'lastName', {
  value: 'Lee',
})

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log('firstName', descriptor)

// 디스크립터 객체의 프로퍼티를 누락시키면 undefined, false가 기본값이다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log('lastName', descriptor)

// [[Enumerable]]의 값이 false인 경우
// 해당 프로퍼티는 for...in 문이나 Object.keys 등으로 열거할 수 없다.
// lastName 프로퍼티는 [[Enumerable]]의 값이 false 이기에 열거되지 않는다.
console.log(Object.keys(person)) // [ 'firstName' ]

// [[Writable]]의 값이 false인 경우 해당 프로퍼티의 [[Value]]의 값을 변경할 수 없다.
person.lastName = 'Kim'

// [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 삭제할 수 없다.
// 이때 프로퍼티를 삭제하면 에러는 발생하지 않고 무시된다.
delete person.lastName

// 또한 [[Configurable]]의 값이 false인 경우 해당 프로퍼티를 재정의할 수 없다.
descriptor = Object.getOwnPropertyDescriptor(person, 'lastName')
console.log('lastName', descriptor)

Object.defineProperty(person, 'fullName', {
  get() {
    return `${this.firstName} ${this.lastName}`
  },

  set(name) {
    ;[this.firstName, this.lastName] = name.split(' ')
  },

  enumerable: true,
  configurable: true,
})

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName')
console.log('fullName', descriptor)

person.fullName = 'Heegun Lee'
console.log(person)

// Object.defineProperties 메서드를 사용하면 여러 개의 프로퍼티를 한 번에 정의할 수 있다.

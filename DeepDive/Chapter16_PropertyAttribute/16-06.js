// 접근자 프로퍼티는 자체적으로 값을 갖지 않고
// 다른 데이터 프로퍼티의 값을 읽거나 저장할 때 사용하는 접근자 함수로 구성된 프로퍼티다.

// get, set, enumerable, configurable이 있다.

const person = {
  // 데이터 프로퍼티
  firstName: 'Ungmo',
  lastName: 'Lee',

  // fullName은 접근자 함수로 구성된 접근자 프로퍼티다.
  get fullName() {
    return `${this.firstName} ${this.lastName}`
  },

  // setter 함수
  set fullName(name) {
    ;[this.firstName, this.lastName] = name.split(' ')
  },
}

// 데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(person.firstName + ' ' + person.lastName) // Ungmo Lee

// 접근자 프로퍼티를 통한 프로퍼티 값의 저장
person.fullName = 'Heegun Lee'
console.log(person) // { firstName: 'Heegun', lastName: 'Lee', fullName: [Getter/Setter] }

console.log(person.fullName) // Heegun Lee

// firstName은 데이터 프로퍼티다.
// 데이터 프로퍼티는 [[Value]], [[Writable]], [[Enumerable]], [[Configurable]]
let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName')
console.log(descriptor)
/**
 * Heegun Lee
    {
    value: 'Heegun',
    writable: true,
    enumerable: true,
    configurable: true
    }
 */

// fullName은 접근자 프로퍼티다.
// 접근자 프로퍼티는 [[Get]], [[Set]], [[Enumerable]], [[Configurable]]
descriptor = Object.getOwnPropertyDescriptor(person, 'fullName')
console.log(descriptor)

/**
 * {
    get: [Function: get fullName],
    set: [Function: set fullName],
    enumerable: true,
    configurable: true
    } 
*/

//// 일반 객체의 __proto__는 접근자 프로퍼티다.
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__')

//// 함수 객체의 prototype은 데이터 프로퍼티다.
Object.getOwnPropertyDescriptor(function () {}, 'prototype')

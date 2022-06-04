// 객체 확장 금지
const person = { name: 'Lee' }

// person은 아직까진 확장 가능하다.
console.log(Object.isExtensible(person)) // true

// person 객체의 확장을 금지하여 프로퍼티 추가를 금지한다.
Object.preventExtensions(person)
console.log(Object.isExtensible(person)) // false

// 프로퍼티 추가가 금지된다.
person.age = 20 // 무시된다. 하지만 strict mode에서는 에러를 발생
console.log(person)

// 프로퍼티 추가는 금지되지만 삭제는 가능하다.
delete person.name
console.log(person)

// 프로퍼티 정의에 의한 프로퍼티 추가도 금지된다.
// TypeError: Cannot define property age, object is not extensible
Object.defineProperty(person, 'age', {
  value: 20,
})

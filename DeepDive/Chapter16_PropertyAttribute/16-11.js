// 객체 밀봉
const person = { name: 'Lee' }

// person 객체는 밀봉(seal)된 상태가 아니다.
console.log(Object.isSealed(person)) // false

Object.seal(person)
console.log(Object.isSealed(person)) // true

// seal 된 객체는 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person))
/**
 * 
    {
        name: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: false
    }
 */
// 프로퍼티 추가가 금지된다.
person.age = 20 // 지금은 무시되지만, strict mode에서는 에러를 뿜는다.
console.log(person)

// 프로퍼티 삭제가 금지된다.
delete person.name // 지금은 무시되지만, strict mode에서는 에러를 뿜는다.
console.log(person)

// 프로퍼티 값 갱신은 가능하다.
person.name = 'Kim'
console.log(person)

// 프로퍼티 어트리뷰트 재정의가 금지된다.
// TypeError: Cannot redefine property: name
Object.defineProperty(person, 'name', {
  configurable: true,
})

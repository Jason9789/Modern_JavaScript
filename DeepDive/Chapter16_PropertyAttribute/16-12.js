// 객체 동결
const person = { name: 'Lee' }

// person 객체는 동결(freeze)된 객체가 아니다
console.log(Object.isFrozen(person)) // false

Object.freeze(person)
console.log(Object.isFrozen(person)) // true

// freeze 된 객체는 writable과 configurable이 false다.
console.log(Object.getOwnPropertyDescriptors(person))
/**
 * {
        name: {
            value: 'Lee',
            writable: false,
            enumerable: true,
            configurable: false
        }
    }
 */

// 프로퍼티 추가가 금지된다.
person.age = 20 // 지금은 무시되지만, strict mode에서는 에러를 뿜는다.
console.log(person)

// 프로퍼티 삭제가 금지된다.
delete person.name // 지금은 무시되지만, strict mode에서는 에러를 뿜는다.
console.log(person)

// 프로퍼티 값 갱신도 금지된다.
person.name = 'Kim'
console.log(person)

// 프로퍼티 어트리뷰트 재정의가 금지된다.
// TypeError: Cannot redefine property: name
Object.defineProperty(person, 'name', {
  configurable: true,
})

// 지금까지 살펴본 변경 방지 메서드들은 얕은 변경 방지(shallow only)로 직속 프로퍼티만 변경이 방지되고, 중첩 객체까지는 영향을 주지 못한다.
// 따라서 Object.freeze 메서드로 객체를 동결하여도 중첩 객체까지 동결할 수 없다.
// 객체의 중첩 객체까지 동결하여 변경이 불가능한 읽기 전용의 불변 객체를 구현하려면
// 객체를 값으로 갖는 모든 프로퍼티에 대해 재귀적으로 Object.freeze 메서드를 호출해야 한다.
// 이에 대한 코드는 책 232, 233쪽을 확인하자.

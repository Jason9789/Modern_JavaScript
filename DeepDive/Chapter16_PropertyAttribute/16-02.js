// 프로퍼티에는 데이터 프로퍼티와 접근자 프로퍼티가 있는데,
// 데이터 프로퍼티는 value, writable, enumerable, configurable과 같은 프로퍼티 어트리뷰트를 갖는다.

const person = {
  name: 'Lee',
}

// 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체를 반환한다.
console.log(Object.getOwnPropertyDescriptor(person, 'name'))
// { value: 'Lee', writable: true, enumerable: true, configurable: true }

// 프로퍼티 동적 생성
person.age = 20

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환
console.log(Object.getOwnPropertyDescriptors(person))

/*
    {
    name: {
        value: 'Lee',
        writable: true,
        enumerable: true,
        configurable: true
    },
    age: { value: 20, writable: true, enumerable: true, configurable: true }
    }
*/

// 객체와 원시 타입의 근본적인 차이 중 하나는
// 객체는 참조에 의해 (by reference) 저장되고 복사된다.
// 반면 원시값(문자열, 숫자, 불린 값 등)은 '값 그대로 저장 할당되고 복사된다.

let message = 'Hello!'
let phrase = message

console.log(message)
console.log(phrase)

// 원시 값은 값 그대로 저장하기 때문에 원래의 값이 바뀌어도
// 복사된 값의 결과는 바뀌지 않는다.
message = 'Hi'

console.log(message)
console.log(phrase)

let user = { name: 'John' }
let admin = user

console.log(user.name)
console.log(admin.name)

admin.name = 'Pete'

console.log(user.name)
console.log(admin.name)

// ========================
// 참조에 의한 비교

let a = {}
// let b = a
let b = {}

console.log(a == b)
console.log(a === b)

// ========================
// 객체 복사, 병합과 Object.assign
// 기존에 있던 객체와 똑같으면서 독립적인 객체를 만드는 방법
let user2 = {
  name: 'John',
  age: 30,
}

// 새로운 빈 객체
let clone = {}

// 빈 객체에 user 프로퍼티 전부를 복사해 넣는다.
for (let key in user) {
  clone[key] = user2[key]
}

clone.name = 'Pete'

console.log(user2.name)
console.log(clone.name)

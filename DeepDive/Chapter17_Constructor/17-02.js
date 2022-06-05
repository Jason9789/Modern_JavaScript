// 생성자 함수 constructor란 new 연산자와 함께 호출하여 객체(인스턴스)를 생성하는 함수를 말한다.
// 생성자 함수에 의해 생성된 객체를 인스턴스 instance라 한다.

// 자바스크립트는 Object 생성자 함수 이외에도
// String, Number, Boolean, Function, ARray, Date, RegExp., Promise
// 등의 빌트인 생성자 함수를 제공한다.

// String
const strObj = new String('Jeon')
console.log(typeof strObj) // object
console.log(strObj)

// Number
const numObj = new Number(123)
console.log(typeof numObj) // object
console.log(numObj)

// Boolean
const boolObj = new Boolean(true)
console.log(typeof boolObj) // object
console.log(boolObj)

// Function
const func = new Function('x', 'return x * x')
console.log(typeof func) // function
console.log(func)

// Array
const arr = new Array(1, 2, 3)
console.log(typeof arr) // object
console.log(arr)

// RegExp
const regExp = new RegExp(/ab+c/i)
console.log(typeof regExp) // object
console.log(regExp)

// Date
const date = new Date()
console.log(typeof date) // object
console.log(date)

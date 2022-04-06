// 숫자형

let n = 123;

console.log(1 / 0); // 무한대
console.log('숫자가 아님' / 2); // NaN, 문자열을 숫자로 나누면 오류

// 문자형
let str = 'Hello';
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;

console.log('the result is ${1+2}');
console.log(`the result is ${1 + 2}`);

// 불린형
let nameFieldChecked = true;
let ageFieldChecked = false;

let isGreater = 4 > 1;
console.log(isGreater);

// Null 값
// JS에서 Null은 '존재하지 않는 값(noting), 비어 있는 값(empty), 알 수 없는 값(unknown)을 나타냄.
// 밑의 코드는 age를 알 수 없거나 그 값이 비어있음을 보여준다.
let age = null;

// undefined 값
// undefined는 '값이 할당되지 않은 상태'를 나타낼 때 사용한다.
let undefinedAge;
console.log(undefinedAge);

// 객체(object)와 심볼
// 객체형을 제외한 다른 자료형은 문자열이든 숫자든 한 가지만 표현할 수 있다. -> 원시(primitive) 자료형
// 반면 객체(object)는 데이터 컬렉션이나 복잡한 개채(entity)를 표현할 수 있다.
// 심볼(symbol) 형은 객체의 고유 식별자 (unique identifier)를 만들 때 사용된다.

// typeof 연산자
// 인수의 자료형을 반환한다.

typeof 0;

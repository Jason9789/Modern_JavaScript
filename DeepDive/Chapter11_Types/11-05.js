var str = 'string'
console.log(str)

// 문자열은 유사 배열이기에 배열과 유사하게 인덱스를 사용해 각 문자에 접근할 수 있다.
// 하지만 문자열은 원시 값이므로 부분 변경이 불가능하며, 이때 에러는 발생하지 않는다.
// 변수 전체에 새로운 문자열을 재할당하는 것은 가능하다.
//  -> 이는 기존 문자열을 변경하는 것이 아니라 새로운 문자열을 새롭게 할당하는 것이기 때문.
str[0] = 'S'
console.log(str)

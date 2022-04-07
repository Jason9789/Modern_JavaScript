let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year < 2015) {
  alert('숫자를 좀 더 올려보세요.');
} else if (year > 2015) {
  alert('숫자를 좀 더 내려보세요.');
} else {
  alert('정답입니다!');
}

// 조건부 연산자 '?'
let accessAllowed;
let age = prompt('나이를 입력해 주세요.', '');

if (age > 10) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

accessAllowed = age > 18 ? true : false;

alert(accessAllowed);

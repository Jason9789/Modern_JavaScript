function sayHi() {
  alert('Hello');
}

let say = function () {
  alert('hello');
};

let func = sayHi;

// func();
// sayHi();

// ==================================
// CallBack Function

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert('동의하셨습니다.');
}

function showCancel() {
  alert('취소 버튼을 누르셨습니다.');
}

// 사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨.
ask('동의하십니까?', showOk, showCancel);

// 함수 선언문
function sum(a, b) {
  return a + b;
}

// 함수 표현식
let sum = function (a, b) {
  return a + b;
};

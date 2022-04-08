function showMessage1() {
  let message = 'Hello~';

  alert(message);
}

// 함수 내부에서 함수 외부의 변수인 외부 변수(outer variable)에 접근할 수 있다.
// 또한 수정도 가능하다. 단, 외부 변수는 지역 변수가 없는 경우에만 사용할 수 있다.
let userName = 'Jason';

function showMessage2() {
  userName = 'Bob';

  let message = `Hello, ${userName}`;
  alert(message);
}

// alert(userName); // 함수 호출 전이기 때문에 Jason이 호출 된다.
// showMessage2(); // Hello, Bob
// alert(userName); // 함수 호출 후이기 때문에 Bob이 호출 된다.

// =====================================================
// 매개변수

// 매개변수를 전달할 때 인수를 모두 넣지 않아도 호출이 가능하다.
// 밑의 코드처럼 기본 값 설정이 가능하다.
function showMessage3(from, text = 'no text given') {
  alert(`${from} : ${text}`);
}

// showMessage3('Ann', 'Hello!');
// showMessage3('Ann', "what's up?");
// showMessage3('Ann');

// =====================================================
// 반환 값

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert(result);

function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('Did you get parental consent?');
  }
}

let age = prompt('Let me know your age', 18);

if (checkAge(age)) {
  alert('allow');
} else {
  alert('ban');
}

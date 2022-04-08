/*
let sum = function(a, b) {
  return a + b;
}
*/
let sum = (a, b) => a + b
alert(sum(1, 2))

let double = (n) => n * 2
alert(double(2))

let sayHi = () => alert('안녕하세요!')
sayHi()

let age = prompt('나이를 알려주세요.', 18)
let welcome = age < 18 ? () => alert('안녕') : () => alert('안녕하세요')
welcome()

let sum2 = (a, b) => {
  let result = a + b
  return result
}
alert(sum2(4, 4))

// 과제
let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no()
}

ask(
  '동의하십니까?',
  () => {
    alert('동의하셨습니다.')
  },
  () => {
    alert('취소 버튼을 누르셨습니다.')
  }
)

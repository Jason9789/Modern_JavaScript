// 객체는 다양한 데이터를 담을 수 있다.
// 키로 구분된 데이터 집합이나 복잡한 개체(entity)를 저장할 수 있다.

// 객체는 중괄호 {...} 를 이용하여 만들며,
// 중괄호 안에는 ' key : value ' 쌍으로 구성된 프로퍼티(property)를 넣을 수 있다.

let user = {
  name: 'John',
  age: 30,
  'likes birds': true,
}

alert(`USER NAME : ${user.name}, AGE : ${user.age}`)

// 프로퍼티 값엔 모든 자료형이 올 수 있으며, 추가 가능하다.
user.isAdmin = true

alert(user.isAdmin)

// delete 키워드를 통해 프로퍼티를 삭제할 수 있다.
delete user.age
alert(`USER NAME : ${user.name}, AGE : ${user.age}`)

// 상수 객체는 수정될 수 있다.
user.name = 'Pete'
alert(`USER NAME : ${user.name}`)

// ==============================================
// 대괄호 표기법
let user2 = {}

// set
user2['likes birds'] = true

// get
alert(user['likes birds'])

// delete
delete user['likes birds']

// key : value에 접근하기.
let user3 = {
  name: 'John',
  age: 30,
}

let key = prompt('사용자의 어떤 정보를 얻고 싶으신가요?', 'name')

// 변수로 접근
alert(user3[key])

// ==============================================
// 계산된 프로퍼티 computed property
let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple')

let bag = {
  [fruit]: 5,
}

alert(bag.apple)

// ==============================================
// in
let user4 = { name: 'Jason', age: 26, isAdmin: true }
alert('age' in user4)
alert('blabla' in user)

for (let key in user4) {
  alert(key)
  alert(user[key])
}

과제 1
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
}

var sum = 0
for (let key in salaries) {
  sum += salaries[key]
}

alert(sum)

// 과제 2
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
}

multiplyNumeric(menu)

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof (obj[key] == 'number')) {
      obj[key] *= 2
    }
  }
}

alert(`${menu.width}, ${menu.height}`)

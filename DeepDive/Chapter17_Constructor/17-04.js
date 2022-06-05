// 생성자 함수
function Circle(radius) {
  // 암묵족으로 인스턴스가 생성되고 this에 바인딩된다.
  console.log(this) // Circle {}

  this.radius = radius
  this.getDiameter = function () {
    return 2 * this.radius
  }
}

// 인스턴스 생성
// 이때, 만약 new 연산자를 사용하지 않으면 생성자 함수가 아니라 일반 함수로 동작한다.
const circle1 = new Circle(5)
const circle2 = new Circle(10)

console.log(circle1.getDiameter())
console.log(circle2.getDiameter())

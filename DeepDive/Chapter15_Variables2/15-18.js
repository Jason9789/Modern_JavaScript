// const 키워드로 선언된 변수는 재할당이 금지된다.
const TAX_RATE = 0.1

// 세전 가격
let preTaxPrice = 100

// 세후 가격
let afterTaxPrice = preTaxPrice + preTaxPrice * TAX_RATE
console.log(afterTaxPrice)

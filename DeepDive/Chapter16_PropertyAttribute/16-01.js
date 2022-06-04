const o = {}

// 내부 슬롯은 자바스크립트 엔진의 내부 로직이므로 직접 접근할 수 없다.
o.[[Prototype]] // SyntaxError: Unexpected token '['

o.__proto__ // -> Object.prototype



var person = {
  name: 'Lee',
}

// 얕은 복사
var copy = person

console.log(copy === person)

copy.name = 'Kim'

person.address = 'Seoul'

console.log(`person : ${JSON.stringify(person)}`)
console.log(`copy : ${JSON.stringify(copy)}`)

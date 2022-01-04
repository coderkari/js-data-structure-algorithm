// console.log(/[a-z0-9]/.test('1333'))
// console.log('a'.charCodeAt(0))

let char = 'karimul islam'

let isAlfanumeric = (str) => {
  let char = str.charCodeAt(0)
  if (
    !(char >= 97 && char <= 122) &&
    !(char >= 65 && char <= 90) &&
    !(char >= 48 && char <= 57)
  ) {
    return false
  }
  return true
}

let obj = {}
for (const key of char) {
  if (isAlfanumeric(key)) {
    // obj[key] = ++obj[key] || 1
    // obj[key] = obj[key] + 1 || 1
    // obj[key] = (obj[key] || 0) + 1
    obj[key] ? (obj[key] += 1) : (obj[key] = 1)
  } //more fast then Regex /[a-z0-9].test('key')/

  // if (/[a-z0-9]/.test(key)) {
  //   obj[key] = (obj[key] || 0) + 1
  // }
}
console.log(obj)

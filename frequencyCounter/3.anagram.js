const anagram = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  let frequencyObj = {}
  for (const key of arr1) {
    frequencyObj[key] = ++frequencyObj[key] || 1
  }
  for (const key of arr2) {
    let letter = key
    if (!frequencyObj[key]) {
      return false
    } else {
      frequencyObj[key] -= 1
    }
  }
  return true
}
console.log(anagram('kar', 'kra'))

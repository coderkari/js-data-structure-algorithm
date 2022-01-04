let arr1 = [1, 2, 1]
let arr2 = [1, 4, 1]

// const same = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return false

//   for (let i = 0; i < arr1.length; i++) {
//     let find2 = arr2.indexOf(arr1[i] ** 2)
//     if (find2 == -1) {
//       return false
//     }
//     arr2.splice(find2, 1)
//   }
//   return true
// }

// console.log(same(arr1, arr2))

const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false

  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (const key of arr1) {
    frequencyCounter1[key] = ++frequencyCounter1[key] || 1
  }
  for (const key of arr2) {
    frequencyCounter2[key] = ++frequencyCounter2[key] || 1
  }
  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  console.log(frequencyCounter1)
  console.log(frequencyCounter2)
  return true
}
console.log(same2(arr1, arr2))

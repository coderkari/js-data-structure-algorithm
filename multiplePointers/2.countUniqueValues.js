// function countUniqueValues(arr) {
//   let obj = {}
//   let count = 0
//   for (const key of arr) {
//     obj[key] = ++obj[key] || 1
//   }
//   for (const key in obj) {
//     count++
//   }
//   console.log(count)
// }
// countUniqueValues([1,2,3,4,111,33,3,3,3])

function uniqueValue2(arr) {
  let i = 0
  let arr2 = []
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr2[0] = arr[0]
      arr[i] = arr[j]
      arr2.push(arr[i])
    }
  }
  console.log(i + 1)
}

uniqueValue2([1, 1, 2, 3, 3, 4, 5, 5, 6, 6, 10])

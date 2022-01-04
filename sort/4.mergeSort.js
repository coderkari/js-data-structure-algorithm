function mergeArray(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  // console.log(results)
  return results
}
// mergeArray([2, 5, 10], [3, 9])
/* 
[2,3,5] [7, 9]
*/

// RECURSION

function merge(arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = merge(arr.slice(0, mid))
  let right = merge(arr.slice(mid))
  console.log(mergeArray(left, right))
  return mergeArray(left, right)
}
merge([2, 3, 7, 0, -1, 2])

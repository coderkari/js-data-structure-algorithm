// function maxSum(arr, num) {
//   let temp = 0
//   let maxTemp = -Infinity
//   if (num > arr.length) return null
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     for (let j = i; j < num + i; j++) {
//       temp += arr[j]
//     }
//     if (temp > maxTemp) {
//       maxTemp = temp
//       temp = 0
//     } else {
//       temp = 0
//     }
//   }
//   console.log(maxTemp)
// }
// maxSum([25, 2, 2, 3, 19, 80, 30], 6)
// 5, 7

/**********************************/

function maxSum2(arr, num) {
  let tempSum = 0
  let maxSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum
  console.log(tempSum)
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    console.log('tempsum =' + tempSum, arr[i - num], arr[i])
    maxSum = Math.max(tempSum, maxSum)
    // console.log('maxSum =' + maxSum)
  }
  console.log(maxSum)
}
maxSum2([1, 2, 3, 4, 5], 3)

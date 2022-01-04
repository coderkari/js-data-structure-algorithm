/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var sortArray = function (nums) {
//   return nums.sort((a, b) => a - b)
// }
// console.log(sortArray([5, 1, 1, 2, 0, 0]))


function getPositionIndex(num, i) {
  return Math.floor((Math.abs(num) / Math.pow(10, i)) % 10)
}
const getMaxNumberDigit = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
const maxDigitsNum = (arr) => {
  let maxDigit = 0
  for (let i = 0; i < arr.length; i++) {
    maxDigit = Math.max(maxDigit, getMaxNumberDigit(arr[i]))
  }
  return maxDigit
}

const sortArray = (nums) => {
  let maxDigitNumbers = maxDigitsNum(nums)
  for (let k = 0; k < maxDigitNumbers; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < nums.length; j++) {
      let digit = getPositionIndex(nums[j], k)
      digitBuckets[digit].push(nums[j])
    }
    arr = [].concat(...digitBuckets)
  }
  return arr
}
console.log(sortArray([5, 1, 1, 2, 0, 0]))

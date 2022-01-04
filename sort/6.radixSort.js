// position number index
// max number
// count max digit from an array
// array 10 sub array
// concat sub array
// NOT ALLOW LESS THAN 1 VALUE
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

const radixSort = (arr) => {
  let maxDigitNumbers = maxDigitsNum(arr)
  for (let k = 0; k < maxDigitNumbers; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => [])
    for (let j = 0; j < arr.length; j++) {
      let digit = getPositionIndex(arr[j], k)
      digitBuckets[digit].push(arr[j])
    }
    arr = [].concat(...digitBuckets)
  }
  console.log(arr)
  return arr
}

radixSort([1, 66, 2, 51, 5])

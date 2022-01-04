function addOddValue(arr) {
  let oddValue = []
  function helper(inputArr) {
    if (inputArr.length === 0) return
    if (inputArr[0] % 2 !== 0) {
      oddValue.push(inputArr[0])
    }
    return helper(inputArr.slice(1))
  }
  helper(arr)
  return oddValue
}

console.log(addOddValue([1, 2, 3, 4]))

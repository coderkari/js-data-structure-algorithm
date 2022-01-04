/* ************************** */
//PURE RECURSION
/* ************************** */
function collectOddValues(arr) {
  let oddArr = []
  if (arr.length === 0) return oddArr
  if (arr[0] % 2 !== 0) {
    oddArr.push(arr[0])
  }
  oddArr = oddArr.concat(collectOddValues(arr.slice(1)))
  return oddArr
}
console.log(collectOddValues([1, 2, 3]))

/*  should  BE SHORTED ARRAY */

function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1
  let middle = Math.floor((start + end) / 2)
  while (start <= end && arr[middle] !== val) {
    if (val < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  console.log(start, middle, end)
  if (start > end) return -1
  return middle
}

console.log(binarySearch([1, 2, 3, 4, 5], 2))

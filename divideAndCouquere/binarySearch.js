function binarySearch(arr, val) {
  let min = 0
  let max = arr.length - 1
  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentMiddle = arr[middle]
    if (val > arr[middle]) {
      min = middle + 1
    } else if (val < arr[middle]) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}
console.log(binarySearch([1, 2, 3, 4, 5], 6))

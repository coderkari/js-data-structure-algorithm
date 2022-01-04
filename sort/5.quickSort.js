function pivot(arr, start = 0, end = arr.length - 1) {
  let swapIndx = start
  let pivot = arr[start]
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIndx++
      ;[arr[swapIndx], arr[i]] = [arr[i], arr[swapIndx]]
    }
  }
  ;[arr[start], arr[swapIndx]] = [arr[swapIndx], arr[start]]
  return swapIndx
}
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1) //left
    quickSort(arr, pivotIndex + 1, right) //right
  }
  return arr
}
console.log(quickSort([3, 6, 2, 5]))

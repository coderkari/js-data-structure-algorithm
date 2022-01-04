// function bubbleSort(arr) {
//   for (let i = arr.length; i >= 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1])
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   console.log(arr)
//   return arr
// }
// bubbleSort([14, 12, 10,9])

// const bubbleSort1 = (arr) => {
//   for (let i = arr.length; i > 0; i--) {
//     for (j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1])
//       if (arr[j] > arr[j + 1]) {
//         ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
//       }
//     }
//   }
//   console.log(arr)
// }
// bubbleSort1([5, 3, 1])

/* dynamic array */
// const arr = Array.from({ length: 20 }, () =>
//   Math.floor(Math.random() * 10 ** 10)
// )

/* bubble sort with no swap */
const bubbleSort2 = (arr) => {
  const swap = (arr, idx1, idx2) => {
    ;[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
  }
  let noSwap
  for (let i = arr.length; i > 0; i--) {
    noSwap = true
    for (j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
        noSwap = false
      }
    }
    if (noSwap) break
  }
  return arr
}
console.log(bubbleSort2([1, 3, 5]))

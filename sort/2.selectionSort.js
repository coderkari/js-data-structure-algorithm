function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      //   let temp = arr[i]
      //   arr[i] = arr[lowest]
      //   arr[lowest] = temp
      ;[arr[i], arr[lowest]] = [arr[lowest], arr[i]]
    }
  }
  console.log(arr)
  return arr
}

selectionSort([0, 1, 2, 5, 4, 1, -5])


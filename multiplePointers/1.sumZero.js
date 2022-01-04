let count = 0
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log([arr[i], arr[j]])
      if (arr[i] + arr[j] === 0) {
        console.log('find', [arr[i], arr[j]])
        count++
      }
    }
  }
  console.log(count)
  return undefined
}

sumZero([-2, 0, 1, 3])

function sumZero2(arr) {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}
console.log(sumZero2([-3, -1, 1, 2, 3]))


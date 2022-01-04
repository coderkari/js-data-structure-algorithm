let total = 0

const sum = (input) => {
  for (let i = 0; i <= input; i++) {
    total += i
  }
  return total
}

let t1 = performance.now()
console.log(sum(10))
let t2 = performance.now()

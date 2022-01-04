function sum(num) {
  if (num <= 3) return console.log('all done')
  console.log(num)
  num--
  sum(num)
}
sum(5)

const sum2 = (num) => {
  if (num === 1) return 1
  let a = num + sum2(num - 1)
  console.log(a)
  return a
}
sum2(4)

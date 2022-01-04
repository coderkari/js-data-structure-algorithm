function hash(key, arrLen) {
  let total = 0
  for (let i = 0; i < key.length; i++) {
    let value = key[i].charCodeAt(0) - 96
    total = (total + value) % arrLen
    console.log(total)
  }
  console.log({ total })
  return total
}
// hash('karimul', 2)

// improve hash table

function hash(key, arrLen) {
  let total = 0
  let weird_Prime = 29
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = key[i].charCodeAt(0) - 96
    total = (total + weird_Prime * value) % arrLen
  }
  return total
}

// hash('karimulz', 50)

// HAST TABLE
class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0
    let weird_prime = 53
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let value = key[i].charCodeAt(0) - 96
      total = (total * weird_prime + value) % this.keyMap.length
    }
    return total
  }
  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
}

let ht = new HashTable()
console.log(ht.set('red','deepred'))
console.log(ht.set('blue','navyblue'))
console.log(ht.set('white','goodWhite'))
console.log(ht.set('black','whiteblack'))
console.log(ht);

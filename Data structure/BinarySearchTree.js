class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    let node = new Node(value)
    if (!this.root) {
      this.root = node
      return this
    }
    let current = this.root
    while (true) {
      if (value === current.value) return undefined
      if (value < current.value) {
        if (current.left === null) {
          current.left = node
          return this
        }
        current = current.left
      } else {
        //if value is greater than current.value
        if (current.right === null) {
          current.right = node
          return this
        }
        current = current.right
      }
    }
  }
  find(value) {
    if (this.root === null) return false
    let current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
  contain(value) {
    if (this.root === null) return false
    let current = this.root,
      found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  
}

let binarySearchTree = new BinarySearchTree()
;[25, 2, 5, 66, 23, 60].map((n) => binarySearchTree.insert(n))
// console.log(binarySearchTree.find(25))
// console.log(binarySearchTree.contain(25))
console.log(binarySearchTree)

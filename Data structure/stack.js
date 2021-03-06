class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (this.size === 0) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      newNode.next = temp
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    let popFirst = this.first
    if (this.size === 1) {
      this.first = null
      this.last = null
    } else {
      this.first = this.first.next
    }
    this.size--
    return popFirst.val
  }
}

let stack = new Stack()
stack.push('karimul')
stack.push('labib')
stack.push('liza')
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
// console.log(stack.pop())
console.log(stack)

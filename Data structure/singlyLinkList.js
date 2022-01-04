class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

// let newNode = new Node('hi')
// newNode.next = new Node('there')
// newNode.next.next = new Node('ok')
// newNode.next.next.next = new Node('best')
// newNode.next.next.next.next = new Node('terminal')
// console.log(newNode)

class SinglyLinkList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.length++
    return this
  }
  travers() {
    let current = this.head
    while (current) {
      console.log(current.value)
      current = current.next
    }
  }
  pop() {
    if (!this.head) return undefined
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      current = current.next
    }
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
  shift() {
    if (!this.head) return undefined
    let currentHead = this.head
    this.head = currentHead.next
    this.length--
    if (this.length === 0) {
      this.tail = null
    }
    return currentHead
  }
  unshift(value) {
    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = this.head
    } else {
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index > this.length || index < 0) return null
    let counter = 0
    let current = this.head
    while (counter !== index) {
      current = current.next
      counter++
    }
    return current
  }
  set(index, value) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.value = value
      return true
    }
    return false
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false
    if (index === 0) return !!this.unshift(value)
    if (index === this.length) return !!this.push(value)
    let newNode = new Node(value)
    let prev = this.get(index - 1)
    let temp = prev.next
    prev.next = newNode
    newNode.next = temp
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined
    if (index === 0) return this.shift(index)
    if (index === this.length) return this.pop(index)
    let prev = this.get(index - 1)
    let remove = prev.next
    prev.next = remove.next
    this.length--
    return remove
  }
  reverse() {
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let prev = null
    for (let i = 0; i < this.length; i++) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    return this
  }
}

let singlyLinkList = new SinglyLinkList()
singlyLinkList.push('karimul')
singlyLinkList.push('labib')
singlyLinkList.push('babu')
// singlyLinkList.shift()
// singlyLinkList.unshift('laboy')
// singlyLinkList.unshift('liza')
// singlyLinkList.unshift('labib')
// console.log(singlyLinkList)
// singlyLinkList.travers()
// console.log(singlyLinkList.get(0))
// console.log(singlyLinkList.set(1, 'labib'))
// singlyLinkList.travers()
// console.log(!!'5')
// console.log(singlyLinkList.insert(0, 'labony'))
// singlyLinkList.insert(1, 'labony')
// console.log(singlyLinkList)
// console.log(singlyLinkList.remove(3))
// console.log(singlyLinkList)
// singlyLinkList.travers()
console.log(singlyLinkList.reverse())

class Node {
  constructor(val) {
    this.val = val
    this.prev = null
    this.next = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.head) return undefined
    let popNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = popNode.prev
      this.tail.next = null
      popNode.prev = null
    }
    this.length--
    return popNode
  }
  shift() {
    if (this.length === 0) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.next
      oldHead.next.prev = null
      oldHead.next = null
    }
    this.length--
    return oldHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
}

let doublyLinkedList = new DoublyLinkedList()
// doublyLinkedList.push(100)
// doublyLinkedList.push(200)
// doublyLinkedList.push(300)
// doublyLinkedList.push(400)
// console.log(doublyLinkedList.pop())
// console.log(doublyLinkedList.shift())
// console.log(doublyLinkedList.shift())
// console.log(doublyLinkedList.shift())
doublyLinkedList.unshift('karimul')
doublyLinkedList.unshift('labib')
doublyLinkedList.push('liza')
console.log(doublyLinkedList)

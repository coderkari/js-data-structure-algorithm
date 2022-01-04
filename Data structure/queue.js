class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}
class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return undefined
    let tempFirst = this.first
    if (!this.first.next) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return tempFirst
  }
}

let queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
// queue.enqueue(300)
// queue.enqueue(400)
// queue.enqueue(500)
// console.log(queue.dequeue())
// console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue)

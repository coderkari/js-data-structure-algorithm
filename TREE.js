class Node {
  constructor(val) {
    this.val = val
    this.left = null
    this.right = null
  }
}
class simpleTree {
  constructor() {
    this.root = null
  }
  insert(val) {
    let newNode = new Node(val)
    if (!this.root) {
      return (this.root = newNode)
    }
    let node = this.root
    let queue = []
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      } else {
        return (node.left = newNode)
      }
      if (node.right) {
        queue.push(node.right)
      } else {
        return (node.right = newNode)
      }
    }
  }
  BFS() {
    if (!this.root) return undefined
    let root = this.root,
      data = [],
      queue = []
    queue.push(root)
    while (queue.length) {
      root = queue.shift()
      data.push(root.val)
      if (root.left) queue.push(root.left)
      if (root.right) queue.push(root.right)
    }
    return data
  }
  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node.val)
      node.left && traverse(node.left)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      node.left && traverse(node.left)
      node.right && traverse(node.right)
      data.push(node.val)
    }
    traverse(this.root)
    return data
  }
  DFSInorder() {
    let data = []
    function traverse(node) {
      node.left && traverse(node.left)
      data.push(node.val)
      node.right && traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}

let node1 = new simpleTree()
let node2 = new simpleTree()
let p = [1, 3, 2, 5]
let q = [2, 1, 3, null, 4, null, 7]
p.map((n) => node1.insert(n))
q.map((n) => node2.insert(n))

var mergeTrees = function (root1, root2) {
  
}

mergeTrees(node1.root, node2.root)

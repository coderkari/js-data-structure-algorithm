class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    )
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacencyVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacencyVertex)
    }
    delete this.adjacencyList[vertex]
  }
  depthFirstSearchRecursive(start) {
    let result = []
    let visited = {}
    let adjacencyList = this.adjacencyList
    ;(function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)
      adjacencyList[vertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          return dfs(neighbour)
        }
      })
    })(start)
    console.log(result)
    return result
  }
  depthFirstSearchIterative(startVertex) {
    let stack = [startVertex]
    let result = []
    let visited = {}
    visited[startVertex] = true
    let currentVertex
    while (stack.length) {
      currentVertex = stack.pop()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          stack.push(neighbour)
        }
      })
    }
    console.log(result)
    return result
  }
  breadthFirstSearch(startVertex) {
    let result = []
    let queue = [startVertex]
    let visited = {}
    visited[startVertex] = true
    let currentVertex
    while (queue.length) {
      currentVertex = queue.shift()
      result.push(currentVertex)
      this.adjacencyList[currentVertex].map((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true
          queue.push(neighbour)
        }
      })
    }
    console.log(result)
    return result
  }
}
let g = new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')
g.addVertex('e')
g.addVertex('f')

g.addEdge('a', 'b')
g.addEdge('a', 'c')
g.addEdge('c', 'e')
g.addEdge('b', 'd')
g.addEdge('c', 'e')
g.addEdge('d', 'e')
g.addEdge('d', 'f')
g.addEdge('c', 'e')
// g.removeVertex('mayanmar', 'india')
// g.removeVertex('pakistan', 'india')
// g.removeVertex('mayanmar', 'india')
// g.removeVertex('bangladesh', 'india')

// g.removeVertex('pakistan')
// g.removeVertex('bangladesh')
// console.log(g)

// g.depthFirstSearchRecursive('a')

// g.depthFirstSearchIterative('a')

g.breadthFirstSearch('a')

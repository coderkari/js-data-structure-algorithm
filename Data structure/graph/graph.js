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
}
let g = new Graph()
g.addVertex('bangladesh')
g.addVertex('india')
g.addVertex('pakistan')
g.addVertex('mayanmar')

g.addEdge('india', 'bangladesh')
g.addEdge('pakistan', 'india')
g.addEdge('mayanmar', 'india')
g.addEdge('mayanmar', 'bangladesh')

// g.removeVertex('mayanmar', 'india')
// g.removeVertex('pakistan', 'india')
// g.removeVertex('mayanmar', 'india')
// g.removeVertex('bangladesh', 'india')

g.removeVertex('pakistan')
g.removeVertex('bangladesh')
// console.log(g)


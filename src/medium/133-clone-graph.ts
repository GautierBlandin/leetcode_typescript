class _Node {
  val: number;

  neighbors: _Node[];

  constructor(val?: number, neighbors?: _Node[]) {
    this.val = (val === undefined ? 0 : val);
    this.neighbors = (neighbors === undefined ? [] : neighbors);
  }
}

function cloneGraph(node: _Node | null): _Node | null {
  if (!node) return null;

  const hashmap: Map<number, _Node> = new Map();

  function process(vertex: _Node) {
    const clonedNeighbors: _Node[] = [];
    hashmap.set(vertex.val, new _Node(vertex.val, clonedNeighbors));

    for (const neighbor of vertex.neighbors) {
      if (!hashmap.get(neighbor.val)) process(neighbor);
      clonedNeighbors.push(hashmap.get(neighbor.val)!);
    }
  }

  process(node);

  return hashmap.get(node.val) ?? null;
}

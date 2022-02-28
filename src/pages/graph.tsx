import React, { useEffect } from 'react';

const Graph = function () {
  this.vertices = [];
  this.adjList = new Map();
} as any;

Graph.prototype.addVertex = function (v: any) {
  this.vertices.push(v);
  this.adjList.set(v, []);
}

Graph.prototype.addEdge = function (v: any, w: any) {
  this.adjList.get(v)?.push(w);
  this.adjList.get(w)?.push(v);
}

Graph.prototype.toString = function () {
  var s = '';
  for (var i = 0; i < this.vertices.length; i++) {
    s += this.vertices[i] + '-->';
    var neighbors = this.adjList.get(this.vertices[i]);
    for (var j = 0; j < neighbors.length; j++) {
      s += neighbors[j] + ' ';
    }
    s += '\n';
  }
  return s;
}

const graph = new Graph();
;['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach((item) => graph.addVertex(item));
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

// 广度优先搜索
// 深度优先搜索
function getUsers (signal: AbortSignal) {
  fetch('/getUsers', {
    headers: {
      // 'Content-Type': 'application/json',
    },
    signal,
  })
  .then((response) => {
    
    return response.json();
  }).then((res) => {
    console.log('res', res)
  })
  .catch((e) => {
    console.log('error: ', e);
  })
}

const abortCtl = new AbortController();

const Graphcmp = () => {
  useEffect(() => {
    getUsers(abortCtl.signal)
  }, []);
  const onAbortFetch = () => {
    console.log('click abortCtl')
    abortCtl.abort();
  }
  return (
    <div>
      graph
      <div>
        <a onClick={onAbortFetch}>终止任务</a>
      </div>
    </div>
  )
}
export default Graphcmp;

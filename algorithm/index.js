import blossom from 'edmonds-blossom';

export const blossomMatching = (nodes, edges) => {
  var data = convertForAlgorithm(nodes, edges);
  console.log(JSON.stringify(data));

  var result = blossom(data);
  console.log(JSON.stringify(result));

  return convertForDisplay(result, nodes);
}

export const firstMatching = (nodes, edges) => {
  var pairs = [];
  var previous;
  nodes.forEach( node => {
    if (previous) {
      pairs.push([previous, node]);
      previous = null;
    } else {
      previous = node;
    }
  });
  return pairs;
}

export const convertForAlgorithm = (nodes, edges) => {
  var ret = [];
  var i = 0;
  for (var k1 in nodes) {
    var j = 0;
    for (var k2 in nodes) {
      if (i < j) {
        var e1 = edges[`${k1}:${k2}`];
        var e2 = edges[`${k2}:${k1}`];
        var weight = 0;
        weight += e1 ? e1.weight : 0;
        weight += e2 ? e2.weight : 0;

        ret.push([i, j, weight]);
      }
      j += 1;
    }
    i += 1;
  }
  return ret;
}

export const convertForDisplay = (result, nodes) => {
  var ret = [];

  var nodesArray = []
  for (var k in nodes) {
    nodesArray.push(nodes[k]);
  }

  var i = 0;
  result.forEach(j => {
    if (j > i) {
      ret.push([nodesArray[i], nodesArray[j]]);
    }
    i += 1;
  });
  return ret;
}

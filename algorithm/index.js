export const firstMatching = (nodes, edges) => {
  var pairs = [];
  var previous;
  nodes.forEach( node => {
    if (previous) {
      pairs.push([previous.name, node.name]);
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
  nodes.forEach(n1 => {
    var j = 0;
    nodes.forEach(n2 => {
      if (i >= j) {
        j += 1;
        return;
      };

      var e1 = edges[n1.key + ':' + n2.key];
      var e2 = edges[n2.key + ':' + n1.key];
      if (e1) {
        var weight = e1.weight + (e2 ? e2.weight : 0);
        ret.push([i, j, weight]);
      } else if (e2) {
        ret.push([i, j, e2.weight]);
      }
      j += 1;
    });
    i += 1;
  })
  return ret;
}

export const convertForDisplay = (result, nodes) => {
  var ret = [];
  var i = 0;
  result.forEach(j => {
    if (j > i) {
      ret.push([nodes[i].name, nodes[j].name])
    }
    i += 1;
  });
  return ret;
}

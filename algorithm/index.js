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

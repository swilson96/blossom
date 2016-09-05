const createEdge = weight => {
  return {weight: weight};
};

export const setEdge = (key, weight, fromStore) => {
  var newEdge = createEdge(weight);
  var type = 'SET_EDGE';

  return {
    type: type,
    key: key,
    edge: newEdge
  }
}

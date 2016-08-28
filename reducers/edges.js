const setEdge = (state, action) => {
  var found = false;
  var newEdges = {};
  for (var k in state) {
    if (!state.hasOwnProperty(k)) {
      return;
    }
    var edgeToSet = state[k];
    if (k == action.key) {
      edgeToSet = action.edge;
      found = true;
    }
    newEdges[k] = edgeToSet;
  }
  if (!found) {
    newEdges[action.key] = action.edge;
  }
  return newEdges;
};

const edges = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDGE':
      return setEdge(state, action);

    case 'SET_BLOSSOM':
      return action.blossom.edges || {};

    default:
      return state;
  }
};

export default edges;

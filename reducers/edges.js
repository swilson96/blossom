import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

const createEdge = action => {
  return {weight: action.weight};
}

const setEdge = (state, action) => {
  var found = false;
  var newEdges = {};
  for (var k in state) {
    if (!state.hasOwnProperty(k)) {
      return;
    }
    var edgeToSet = state[k];
    if (k == action.key) {
      edgeToSet.weight = action.weight;
      found = true;
    }
    newEdges[k] = edgeToSet;
  }
  if (!found) {
    newEdges[action.key] = createEdge(action);
  }
  return newEdges;
};

const edges = (state = {}, action) => {
  switch (action.type) {
    case 'SET_EDGE':
      if (action.fromStore) {
        return setEdge(state, action);
      } else {
        blossomStore.setEdge(action.key, createEdge(action));
        return state;
      }

    case 'SET_BLOSSOM':
      return action.blossom.edges || {};

    default:
      return state;
  }
};

export default edges;

const addNode = (state, action) => {
  if (action.key && state[action.key]) {
    // This can happen when we first save and start listening to firebase.
    return renameNode(state, action);
  }
  var newNodes = {};
  for (var k in state){
    newNodes[k] = state[k];
  }
  newNodes[action.key] = action.node;
  return newNodes;
};

const removeNode = (state, action) => {
  delete state[action.key];
  return state;
};

const renameNode = (state, action) => {
  var newNodes = {};
  for (var k in state) {
    if (action.key == k) {
      state[k] = action.node;
    }
    newNodes[k] = state[k];
  }
  return newNodes;
};

const nodes = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return addNode(state, action);
    case 'DELETE_NODE':
      return removeNode(state, action);
    case 'RENAME_NODE':
      return renameNode(state, action);
    case 'SET_BLOSSOM':
      return action.blossom.nodes || [];
    default:
      return state;
  }
};

export default nodes;

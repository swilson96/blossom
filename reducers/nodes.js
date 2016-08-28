const addNode = (state, action) => {
  if (action.node.key && state.filter(n => n.key == action.node.key).length > 0) {
    // This can happen when we first save and start listening to firebase.
    return renameNode(state, action);
  }

  return [
    ...state,
    action.node
  ];
};

const removeNode = (state, action) => {
  state.splice(action.index, 1);
  return state;
};

const renameNode = (state, action) => {
  return state.map(n => {
    if (n.key == action.node.key) {
      n.name = action.node.name;
    }
    return n;
  });
};

const nodes = (state = [], action) => {
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

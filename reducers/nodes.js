const node = (state, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return {
        key: action.key || Date.now(),
        name: action.name
      };
    default:
      return undefined;
  }
};

const addNode = (state, action) => {
  if (action.key && state.filter(n => n.key == action.key).length > 0) {
    // This can happen when we first save and start listening to firebase.
    return renameNode(state, action);
  }
  return [
    ...state,
    node(undefined, action)
  ];
};

const removeNode = (state, action) => {
  return state.filter(n => n.key != action.key);
};

const renameNode = (state, action) => {
  return state.map(n => {
    if (n.key == action.key) {
      n.name = action.name;
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

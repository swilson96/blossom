const selectedNode = (state = null, action) => {
  switch (action.type) {
    case 'SELECT_NODE':
      return action.node;
    case 'SET_BLOSSOM':
    case 'DESELECT_NODE':
      return null;
    default:
      return state;
  }
};

export default selectedNode;

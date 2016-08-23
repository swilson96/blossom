const node = (state, action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return {
        key: Date.now(),
        name: action.name,
        completed: false
      };
    default:
      return state;
  }
};

const addNode = (state, action) => {
  return [
    ...state,
    node(undefined, action)
  ];
};

const removeNode = (state, action) => {
  return state.filter(n => n.key == action.key);
};

const nodes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NODE':
      return addNode(state, action);
    case 'DELETE_NODE':
      return removeNode(state, action);
    default:
      return state;
  }
};

export default nodes;

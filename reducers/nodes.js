import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

const createNode = (action) => {
    return {
      key: action.key || Date.now(),
      name: action.name
    };
};

const addNode = (state, action) => {
  if (action.key && state.filter(n => n.key == action.key).length > 0) {
    // This can happen when we first save and start listening to firebase.
    return renameNode(state, action);
  }
  var node = createNode(action);
  if (!action.fromStore) {
    blossomStore.addNode(node);
    return state;
  }
  return [
    ...state,
    node
  ];
};

const removeNode = (state, action) => {
  var i = 0;
  var newState = state.filter(n => {
    if (!action.fromStore && n.key == action.key) {
        blossomStore.removeNode(i);
    }
    i += 1;
    return n.key != action.key;
  });
  return action.fromStore ? newState : state;
};

const renameNode = (state, action) => {
  var i = 0;
  var newState = state.map(n => {
    if (n.key == action.key) {
      n.name = action.name;
      if (!action.fromStore) {
        blossomStore.renameNode(i, createNode(action));
      }
    }
    i += 1;
    return n;
  });
  return action.fromStore ? newState : state;
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

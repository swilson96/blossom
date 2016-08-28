import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

const createNode = (key, name) => {
    return {
      key: key || Date.now(),
      name: name
    };
};

export const addNode = (key, name, fromStore) => {
  var node = createNode(key, name);
  var type = 'ADD_NODE';

  if (!fromStore) {
    blossomStore.addNode(node);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: type,
    node: node,
    fromStore: fromStore
  };
};

export const deleteNode = (index, fromStore) => {
  var type = 'ADD_NODE';

  if (!fromStore) {
    blossomStore.removeNode(index);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: 'DELETE_NODE',
    index: index,
    fromStore: fromStore
  };
};

export const renameNode = (index, key, name, fromStore) => {
  var node = createNode(key, name);
  var type = 'RENAME_NODE';

  if (!fromStore) {
    blossomStore.renameNode(index, node);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: type,
    index: index,
    node: node,
    fromStore: fromStore
  }
};

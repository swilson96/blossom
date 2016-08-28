import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

const createNode = (key, name) => {
    var node = { name: name };
    if (key) {
      node.key = key;
    }
    return node;
};

let nextId = 0;

export const addNode = name => {
  var node = createNode(undefined, name);
  if (!blossomStore.isConnected()) {
    return addNodeFromStore(nextId++, node);
  }
  blossomStore.addNode(node);
  return {
    type: 'NO_ACTION',
    node: node
  };
}

export const addNodeFromStore = (key, node) => {
  if (!node.key) {
    node.key = key;
  }
  return {
    type: 'ADD_NODE',
    node: node,
    key: key,
    fromStore: true
  };
};

export const deleteNode = (key, fromStore) => {
  var type = 'ADD_NODE';

  if (!fromStore && blossomStore.isConnected()) {
    blossomStore.removeNode(key);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: 'DELETE_NODE',
    key: key
  };
};

export const renameNode = (key, name, fromStore) => {
  var node = createNode(key, name);
  var type = 'RENAME_NODE';

  if (!fromStore && blossomStore.isConnected()) {
    blossomStore.renameNode(key, node);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: type,
    key: key,
    node: node
  }
};

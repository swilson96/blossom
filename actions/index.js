export const addNode = (key, text, fromStore) => {
  return {
    type: 'ADD_NODE',
    key: key,
    name: text,
    fromStore: fromStore
  };
};

export const deleteNode = (key, fromStore) => {
  return {
    type: 'DELETE_NODE',
    key: key,
    fromStore: fromStore
  };
};

export const renameNode = (key, name, fromStore) => {
   return {
     type: 'RENAME_NODE',
     key: key,
     name: name,
     fromStore: fromStore
   }
};

export const setKey = (key) => {
  return {
    type: 'SET_KEY',
    key: key
  };
};

export const setBlossom = (blossom) => {
  return {
    type: 'SET_BLOSSOM',
    blossom: blossom
  }
}

export const setResult = (result) => {
  return {
    type: 'SET_RESULT',
    result: result
  }
}

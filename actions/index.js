export const addNode = (text) => {
  return {
    type: 'ADD_NODE',
    name: text
  };
};

export const deleteNode = (key) => {
  return {
    type: 'DELETE_NODE',
    key: key
  };
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

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

const keyObject = (state, action) => {
  switch (action.type) {
    case 'SET_KEY':
      if (action.key) {
        return { key: action.key};
      }
    case 'CLEAR_KEY':
      return { key: null};
    default:
      return state;
  }
};

const key = (state = [], action) => {
  switch (action.type) {
    case 'SET_KEY':
    case 'CLEAR_KEY':
      return keyObject(state, action);
    default:
      return state;
  }
};

export default key;

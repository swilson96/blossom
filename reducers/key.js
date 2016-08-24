const keyObject = (state, action) => {
  switch (action.type) {
    case 'SET_KEY':
      if (action.key) {
        return action.key;
      }
    default:
      return state;
  }
};

const key = (state = '', action) => {
  switch (action.type) {
    case 'SET_KEY':
      return keyObject(state, action);
    default:
      return state;
  }
};

export default key;

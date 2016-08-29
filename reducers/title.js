const titleObject = (state, title) => {
    if (title) {
      return title;
    }
    return state;
};

const title = (state = 'I AM BLOSSOM', action) => {
  switch (action.type) {
    case 'SET_TITLE':
      return titleObject(state, action.title);
    case 'SET_BLOSSOM':
      return titleObject(state, action.blossom.title);
    default:
      return state;
  }
};

export default title;

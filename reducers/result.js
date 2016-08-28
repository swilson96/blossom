const result = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESULT':
      console.log(JSON.stringify(action.result));
      return action.result;
    default:
      return state;
  }
};

export default result;

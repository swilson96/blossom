const highlights = (state = [], action) => {
  switch (action.type) {
    case 'SET_RESULT':
      var cells = []
      action.result.forEach(pair => {
        cells.push(`${pair[0].key}:${pair[1].key}`);
        cells.push(`${pair[1].key}:${pair[0].key}`);
      });
      return cells;
    default:
      return state;
  }
};

export default highlights;

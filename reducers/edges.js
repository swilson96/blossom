const setEdge = (state, action) => {
  var matches = state.filter(e => e.key == action.key);
  if (matches.length > 0) {
    matches[0].weight = action.weight;
    return state;
  }

  // No match, so add the edge
  return [
    ...state,
    { key: action.key, weight: action.weight }
  ];
};

const edges = (state = [], action) => {
  switch (action.type) {
    case 'SET_EDGE':
      return setEdge(state, action);
    case 'SET_BLOSSOM':
      return action.blossom.edges;
    default:
      return state;
  }
};

export default edges;

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

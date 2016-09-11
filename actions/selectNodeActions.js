export const selectNode = (node) => {
  return {
    type: 'SELECT_NODE',
    node: node
  }
}

export const deselectNode = () => {
  return {
    type: 'DESELECT_NODE'
  }
}

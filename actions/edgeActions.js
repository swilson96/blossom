import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

const createEdge = weight => {
  return {weight: weight};
};

export const setEdge = (key, weight, fromStore) => {
  var newEdge = createEdge(weight);
  var type = 'SET_EDGE';

  if (!fromStore) {
    blossomStore.setEdge(key, newEdge, (k, e) => setEdge(k, weight, true));
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: type,
    key: key,
    edge: newEdge
  }
}

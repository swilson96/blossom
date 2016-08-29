import BlossomStore from '../app/blossomStore';

const blossomStore = new BlossomStore();

export const setTitle = (title, fromStore) => {
  var type = 'SET_TITLE';

  if (!fromStore && blossomStore.isConnected()) {
    blossomStore.setTitle(title);
    type = 'NO_ACTION'; // The store listeners will fire another action.
  }

  return {
    type: type,
    title: title
  };
};

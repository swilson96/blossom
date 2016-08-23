import { combineReducers } from 'redux';
import nodes from './nodes';
import key from './key';

const blossomApp = combineReducers({
  nodes, key
});

export default blossomApp;

import { combineReducers } from 'redux';
import nodes from './nodes';
import edges from './edges';
import key from './key';

const blossomApp = combineReducers({
  nodes, edges, key
});

export default blossomApp;

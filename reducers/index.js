import { combineReducers } from 'redux';
import nodes from './nodes';
import edges from './edges';
import key from './key';
import result from './result';

const blossomApp = combineReducers({
  nodes, edges, key, result
});

export default blossomApp;

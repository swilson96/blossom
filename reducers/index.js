import { combineReducers } from 'redux';
import nodes from './nodes';
import edges from './edges';
import title from './title';
import key from './key';
import result from './result';
import highlights from './highlights';

const blossomApp = combineReducers({
  nodes, edges, title, key, result, highlights
});

export default blossomApp;

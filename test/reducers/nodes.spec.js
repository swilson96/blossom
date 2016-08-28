import expect from 'expect'
import nodes from '../../reducers/nodes';

describe('Nodes reducer', () => {

    it('should add first node to empty state', () => {
      var state = {};
      var action = { type: 'ADD_NODE', key: '123', node: {name: 'test_node', key: 123}};

      var returnedState = nodes(state, action);

      expect(returnedState['123'].name).toEqual(action.node.name);
    });

    it('should add first node to undefined state', () => {
      var state = undefined;
      var action = { type: 'ADD_NODE', key:'k1', node: {name: 'test_node', key: 'k1'}};

      var returnedState = nodes(state, action);

      expect(returnedState['k1'].name).toEqual(action.node.name);
    });

    it('should respect key if set', () => {
      var state = [];
      var action = { type: 'ADD_NODE', key:'k2', node: {name: 'test_node', key:'k2'}};

      var returnedState = nodes(state, action);

      expect(returnedState['k2'].key).toExist();
      expect(returnedState['k2'].key).toEqual('k2');
    });

    it('should ignore set edge', () => {
      var state = [ {name:'node1', key:1} ];
      var action = { type: 'SET_EDGE' };

      var returnedState = nodes(state, action);

      expect(returnedState).toEqual(state);
    });

    it('should append node to existing list', () => {
      var state = { '1': {name:'node1', key:'1'}, '2': {name:'node2', key:'2'} };
      var action = { type: 'ADD_NODE', key: '3', node: {name: 'third_node'}};

      var returnedState = nodes(state, action);

      expect(returnedState['1'].name).toEqual('node1');
      expect(returnedState['2'].name).toEqual('node2');
      expect(returnedState['3'].name).toEqual('third_node');
    });

    it('should load new blossom', () => {
      var state = { '1': {name:'old', key:'1'} };
      var action = {
        type: 'SET_BLOSSOM',
        blossom: {
          nodes: { 'A': {name:'node1', key:'A'}, 'B': {name:'node2', key:'B'} },
          edges: {}
        }
      };

      var returnedState = nodes(state, action);

      expect(returnedState['A'].name).toEqual('node1');
      expect(returnedState['B'].name).toEqual('node2');
      expect(returnedState['1']).toNotExist();
    });

    it('should remove a node', () => {
      var state = { 'A': {name:'node1', key:'A'}, 'B': {name:'node2', key:'B'} };
      var action = { type: 'DELETE_NODE', key: 'A' };

      var returnedState = nodes(state, action);

      expect(returnedState['B'].name).toEqual('node2');
      expect(returnedState['A']).toNotExist();
    });
});

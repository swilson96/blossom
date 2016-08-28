import expect from 'expect'
import nodes from '../../reducers/nodes';

describe('Nodes reducer', () => {

    it('should add first node to empty state', () => {
      var state = [];
      var action = { type: 'ADD_NODE', name: 'test_node'};

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(1);
      expect(returnedState[0].name).toEqual(action.name);
    });

    it('should add first node to undefined state', () => {
      var state = undefined;
      var action = { type: 'ADD_NODE', name: 'test_node'};

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(1);
      expect(returnedState[0].name).toEqual(action.name);
    });

    it('should generate a key', () => {
      var state = [];
      var action = { type: 'ADD_NODE', name: 'test_node'};

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(1);
      expect(returnedState[0].key).toExist();
    });

    it('should ignore set edge', () => {
      var state = [ {name:'node1', key:1} ];
      var action = { type: 'SET_EDGE' };

      var returnedState = nodes(state, action);

      expect(returnedState).toEqual(state);
    });

    it('should append node to existing list', () => {
      var state = [ {name:'node1', key:1}, {name:'node2', key:2} ];
      var action = { type: 'ADD_NODE', name: 'third_node'};

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(3);
      expect(returnedState[0].name).toEqual('node1');
      expect(returnedState[1].name).toEqual('node2');
      expect(returnedState[2].name).toEqual('third_node');
    });

    it('should load new blossom', () => {
      var state = [ {name:'old', key:1} ];
      var action = {
        type: 'SET_BLOSSOM',
        blossom: {
          nodes: [ {name:'node1', key:1}, {name:'node2', key:2} ],
          edges: {}
        }
      };

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(2);
      expect(returnedState[0].name).toEqual('node1');
      expect(returnedState[1].name).toEqual('node2');
    });

    it('should remove a node', () => {
      var state = [ {name:'node1', key:1}, {name:'node2', key:2} ];
      var action = { type: 'DELETE_NODE', key: 1};

      var returnedState = nodes(state, action);

      expect(returnedState.length).toEqual(1);
      expect(returnedState[0].name).toEqual('node2');
    });
});

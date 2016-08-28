import expect from 'expect'
import edges from '../../reducers/edges';

describe('Edges reducer', () => {

    it('should add first edge to empty state', () => {
      var state = {};
      var action = { type: 'SET_EDGE', key: "1:2", weight: 5};

      var returnedState = edges(state, action);

      expect(returnedState["1:2"].weight).toEqual(action.weight);
    });

    it('should add first edge to undefined state', () => {
      var state = undefined;
      var action = { type: 'SET_EDGE', key: "1:2", weight: 5};

      var returnedState = edges(state, action);

      expect(returnedState["1:2"].weight).toEqual(action.weight);
    });

    it('should append first edge to existing state', () => {
      var state = {};
      state["2:1"] = { weight:7 };
      state["1:3"] = { weight:0 };

      var action = { type: 'SET_EDGE', key: "1:2", weight: 5};

      var returnedState = edges(state, action);

      expect(returnedState["1:2"].weight).toEqual(action.weight);
      expect(returnedState["2:1"].weight).toEqual(7);
      expect(returnedState["1:3"].weight).toEqual(0);
    });

    it('should load new blossom', () => {
      var state = {};
      state["1:2"] = { weight:7 };
      state["1:3"] = { weight:0 };

      var action = { type: 'SET_BLOSSOM', blossom: {
        edges: { "1:2": {weight: 2}, "2:3": {weight:9} },
        nodes: []
      }};

      var returnedState = edges(state, action);

      expect(returnedState["1:2"].weight).toEqual(2);
      expect(returnedState["2:3"].weight).toEqual(9);
      expect(returnedState["1:3"]).toNotExist();
    });

    it('should ignore add node action', () => {
      var state = {};
      state["1:2"] = { weight:7 };
      state["1:3"] = { weight:0 };

      var action = { type: 'ADD_NODE' };

      var returnedState = edges(state, action);

      expect(returnedState).toEqual(state);
    });
});

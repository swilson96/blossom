import expect from 'expect'
import { convertForAlgorithm } from '../../algorithm';

describe('Converting our state to algorithm input', () => {

    it('should add the right edges and weights', () => {
      var nodes = { 'a':{name:'a node', key:'a'}, 'b':{name:'b node', key:'b'} };
      var edges = {"a:b":{weight:2}};

      var result = convertForAlgorithm(nodes, edges);
      expect(result.length).toEqual(1);
      expect(result[0][0]).toEqual(0);
      expect(result[0][1]).toEqual(1);
      expect(result[0][2]).toEqual(2);
    });

    it('should add the edge values correctly', () => {
      var nodes = { 'a':{name:'a node', key:'a'}, 'b':{name:'b node', key:'b'} };
      var edges = {
        'a:b':{weight:2},
        'b:a':{weight:7}
      };

      var result = convertForAlgorithm(nodes, edges);

      expect(result.length).toEqual(1);
      expect(result[0][0]).toEqual(0);
      expect(result[0][1]).toEqual(1);
      expect(result[0][2]).toEqual(9);
    });

    it('should handle four nodes', () => {
      var nodes = {
        'a': {name:"a node", key:'a'},
        'b': {name:"b node", key:'b'},
        'c': {name:"c node", key:'c'},
        'd': {name:"d node", key:'d'}
      };

      var edges = {
        "a:b":{weight:6},
        "a:c":{weight:8},
        "a:d":{weight:8},

        //"b:a":{weight:0},
        "b:c":{weight:3},
        "b:d":{weight:8},

        "c:a":{weight:2},
        "c:b":{weight:2},
        "c:d":{weight:8},

        "d:a":{weight:8},
        "d:b":{weight:8},
        "d:c":{weight:8}
      };

      var result = convertForAlgorithm(nodes, edges);

      expect(result.length).toEqual(6);

      expect(result[0]).toInclude(0);
      expect(result[0]).toInclude(1);
      expect(result[0]).toInclude(6);

      expect(result[1]).toInclude(10);
      expect(result[2]).toInclude(16);
      expect(result[5]).toInclude(16);

      //expect(result[0]).toInclude([0, 1, 6]);
      //expect(result[1]).toInclude([0, 2, 10]);
      //expect(result[2]).toInclude([0, 3, 16]);
      //expect(result[3]).toInclude([1, 2, 5]);
      //expect(result[4]).toInclude([1, 3, 16]);
      //expect(result[5]).toInclude([2, 3, 16]);
    });
})

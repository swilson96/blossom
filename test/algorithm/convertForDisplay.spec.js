import expect from 'expect'
import { convertForAlgorithm } from '../../algorithm';

describe('Converting our state to algorithm input', () => {

    it('should add the right edges and weights', () => {
      var nodes = [{name:"a", key:1472373779321}, {name:"b", key:1472373780368}];
      var edges = {"1472373779321:1472373780368":{weight:2}};
      var result = convertForAlgorithm(nodes, edges);
      expect(result.length).toEqual(1);
      expect(result[0][0]).toEqual(0);
      expect(result[0][1]).toEqual(1);
      expect(result[0][2]).toEqual(2);
    });
})

import expect from 'expect'
import { convertForDisplay } from '../../algorithm';

describe('Converting our state to algorithm input', () => {

    var nodes = {
      'a': {name:"node1", key:'a'},
      'b': {name:"node2", key:'b'},
      'c': {name:"node3", key:'c'},
      'd': {name:"node4", key:'d'}
    };

    it('should return the right pairs', () => {
      var matching = [3,2,1,0];

      var result = convertForDisplay(matching, nodes);

      expect(result.length).toEqual(2);
      expect(result[0][0].name).toEqual("node1");
      expect(result[0][1].name).toEqual("node4");
      expect(result[1][0].name).toEqual("node2");
      expect(result[1][1].name).toEqual("node3");
    });

    it('should return the right pairs if some unused', () => {
      var matching = [2,-1, 0, -1];

      var result = convertForDisplay(matching, nodes);

      expect(result.length).toEqual(1);
      expect(result[0][0].name).toEqual("node1");
      expect(result[0][1].name).toEqual("node3");
    });
})

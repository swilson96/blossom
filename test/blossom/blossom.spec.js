import expect from 'expect'
import blossom from 'edmonds-blossom';

describe('Calling the blossom library', () => {

    it('should return the same result as in the readme', () => {
      var data = [
        [0, 1, 6],
        [0, 2, 10],
        [1, 2, 5]
      ];

      var result = blossom(data);

      expect(result.length).toEqual(3);
      expect(result[0]).toEqual(2);
      expect(result[1]).toEqual(-1);
      expect(result[2]).toEqual(0);
    });
})

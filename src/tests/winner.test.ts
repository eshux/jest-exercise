import { winner } from '../helpers/winner';

describe('winner function', () => {
    it('should multiply the prize money', () => {
      const result = winner(100);
      expect(result).toEqual('Respect, bro! You get 10000 dollars');
    });
});
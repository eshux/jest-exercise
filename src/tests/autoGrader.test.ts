import { autoGrader } from '../helpers/autoGrader';
import { winner } from '../helpers/winner';

jest.mock('../helpers/winner');

describe('autoGrader', () => {
    it('should return invalid grade if the grade is larger than 100', () => {
      const result = autoGrader(101);
      expect(result).toEqual('Invalid grade');
    });

    it('should return invalid grade if the grade is below 0', () => {
        const result = autoGrader(-1);
        expect(result).toEqual('Invalid grade');
    });

    it('should return A if the grade is below 100', () => {
        const result = autoGrader(94);
        expect(result).toEqual('A');
    });

    it('should return B if the grade is below 90', () => {
        const result = autoGrader(80);
        expect(result).toEqual('B');
    });

    it('should return C if the grade is below 80', () => {
        const result = autoGrader(73);
        expect(result).toEqual('C');
    });

    it('should return D if the grade is below 70', () => {
        const result = autoGrader(69);
        expect(result).toEqual('D');
    });

    it('should return F if the grade is below 60', () => {
        const result = autoGrader(1);
        expect(result).toEqual('F');
    });

    it('should call winner function if the grade is 100', () => {
        autoGrader(100);
        expect(winner).toBeCalled();
    });
      
});
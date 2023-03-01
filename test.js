const { stringLength, reverseString, Calculator, capitalizeString} = require('./stringLength');
const calculate = new Calculator();

describe('stringLength', () => {
    it('should return a character count for a given string', () => {
        expect(stringLength('hello')).toBe(5);
        expect(stringLength('hi')).toBe(2);
        expect(stringLength('Gilloh')).toBe(6);
    })
});

describe('reverseString', () => {
    it('reverseString', () => {
        expect(reverseString('hello')).toBe('olleh');
        expect(reverseString('hi')).toBe('ih');
        expect(reverseString('Gilloh')).toBe('holliG')
    })
});
describe('capitalizeString', () => {
    it('capitalize the first letter of a string', () => {
        expect(capitalizeString('hello')).toBe('Hello');
        expect(capitalizeString('hi')).toBe('Hi');
        expect(capitalizeString('Gilloh')).toBe('Gilloh');
    })
});
describe('Calculator', () => {
    it('add', () => {
        expect(calculate.add(2,3)).toBe(5);
        expect(calculate.add(3,3)).toBe(6);
        expect(calculate.add(4,3)).toBe(7);
    })
    it('subract', () => {
        expect(calculate.subtract(2,3)).toBe(-1);
        expect(calculate.subtract(3,3)).toBe(0);
        expect(calculate.subtract(4,3)).toBe(1);
    })
    it('multiply', () => {
        expect(calculate.multiply(2,3)).toBe(6);
        expect(calculate.multiply(3,3)).toBe(9);
        expect(calculate.multiply(4,3)).toBe(12);
    })
    it('multiply', () => {
        expect(calculate.divide(9,3)).toBe(3);
        expect(calculate.divide(3,3)).toBe(1);
        expect(calculate.divide(12,3)).toBe(4);
    })
})
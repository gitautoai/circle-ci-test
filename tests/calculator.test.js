import { add, subtract, multiply, divide, power, sqrt } from '../src/calculator';

describe('Calculator', () => {

  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add decimal numbers', () => {
      expect(add(0.1, 0.2)).toBeCloseTo(0.3);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });
  });

  describe('multiply', () => {
    test('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(multiply(-3, 4)).toBe(-12);
    });
  });

  describe('divide', () => {
    test('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('should handle decimal results', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });

  describe('power', () => {
    test('should calculate power of a number', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should handle power of zero', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should handle negative exponents', () => {
      expect(power(2, -2)).toBe(0.25);
    });
  });

  describe('sqrt', () => {
    test('should calculate square root', () => {
      expect(sqrt(9)).toBe(3);
    });

    test('should handle perfect squares', () => {
      expect(sqrt(16)).toBe(4);
    });

    test('should handle decimal results', () => {
      expect(sqrt(2)).toBeCloseTo(1.414, 3);
    });

    test('should throw error for negative numbers', () => {
      expect(() => sqrt(-4)).toThrow('Cannot calculate square root of negative number');
    });
  });
});
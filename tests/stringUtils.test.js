import { capitalize, reverse, isPalindrome, countVowels, truncate, camelCase } from '../src/stringUtils';

describe('StringUtils', () => {

  describe('capitalize', () => {
    test('should capitalize first letter', () => {
      expect(capitalize('hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should handle null/undefined', () => {
      expect(capitalize(null)).toBe('');
      expect(capitalize(undefined)).toBe('');
    });

    test('should handle already capitalized string', () => {
      expect(capitalize('Hello')).toBe('Hello');
    });
  });

  describe('reverse', () => {
    test('should reverse a string', () => {
      expect(reverse('hello')).toBe('olleh');
    });

    test('should handle empty string', () => {
      expect(reverse('')).toBe('');
    });

    test('should handle palindromes', () => {
      expect(reverse('racecar')).toBe('racecar');
    });
  });

  describe('isPalindrome', () => {
    test('should identify palindromes', () => {
      expect(isPalindrome('racecar')).toBe(true);
      expect(isPalindrome('A man a plan a canal Panama')).toBe(true);
    });

    test('should identify non-palindromes', () => {
      expect(isPalindrome('hello')).toBe(false);
    });

    test('should handle empty string', () => {
      expect(isPalindrome('')).toBe(true);
    });

    test('should ignore case and special characters', () => {
      expect(isPalindrome('A Santa at NASA')).toBe(true);
    });
  });

  describe('countVowels', () => {
    test('should count vowels correctly', () => {
      expect(countVowels('hello')).toBe(2);
      expect(countVowels('aeiou')).toBe(5);
    });

    test('should handle uppercase vowels', () => {
      expect(countVowels('HELLO')).toBe(2);
    });

    test('should handle no vowels', () => {
      expect(countVowels('xyz')).toBe(0);
    });

    test('should handle empty string', () => {
      expect(countVowels('')).toBe(0);
    });
  });

  describe('truncate', () => {
    test('should truncate long strings', () => {
      expect(truncate('Hello World', 8)).toBe('Hello...');
    });

    test('should not truncate short strings', () => {
      expect(truncate('Hello', 10)).toBe('Hello');
    });

    test('should use custom suffix', () => {
      expect(truncate('Hello World', 7, '..')).toBe('Hello..');
    });

    test('should handle edge cases', () => {
      expect(truncate('Hi', 2)).toBe('Hi');
      expect(truncate('Hello', 5)).toBe('Hello');
    });
  });

  describe('camelCase', () => {
    test('should convert to camelCase', () => {
      expect(camelCase('hello world')).toBe('helloWorld');
      expect(camelCase('the quick brown fox')).toBe('theQuickBrownFox');
    });

    test('should handle single word', () => {
      expect(camelCase('hello')).toBe('hello');
    });

    test('should handle multiple spaces', () => {
      expect(camelCase('hello   world')).toBe('helloWorld');
    });

    test('should handle mixed case', () => {
      expect(camelCase('Hello World')).toBe('helloWorld');
    });
  });
});
import { mergeArrays, devideBy, fibonacci } from '../../../homework-solutions/js/hw-7/task-1';

describe('[JS] - [HW 7] - Task 1', () => {
  describe('mergeArray', () => {
    test('should merge multiple arrays of numbers into a single array', () => {
      expect(mergeArrays([1, 2], [3, 4], [5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('should return an empty array if no arrays are provided', () => {
      expect(mergeArrays()).toEqual([]);
    });

    test('should return an empty array if all input arrays are empty', () => {
      expect(mergeArrays([], [], [])).toEqual([]);
    });

    test('should merge arrays containing different data types', () => {
      expect(mergeArrays([1, 'a'], [2, true], [3, null])).toEqual([1, 'a', 2, true, 3, null]);
    });

    test('should handle a single array correctly', () => {
      expect(mergeArrays([1, 2, 3])).toEqual([1, 2, 3]);
    });
  });

  describe('devide', () => {
    test('should convert a sentence to the specified format', () => {
      expect(devideBy('I am super engineer')).toBe('i_Am_Super_Engineer');
    });

    test('should handle a single word correctly, making it lowercase', () => {
      expect(devideBy('Engineer')).toBe('engineer');
    });

    test('should handle multiple words with mixed cases', () => {
      expect(devideBy('HeLLo WoRLD')).toBe('hello_World');
    });

    test('should return an empty string if input is an empty string', () => {
      expect(devideBy('')).toBe('');
    });

    test('[EXTRA] should handle extra spaces between words', () => {
      expect(devideBy('I    am    an     engineer')).toBe('i_Am_An_Engineer');
    });
  });

  describe('fibonacci', () => {
    test('should return 0 for fibonacci(0)', () => {
      expect(fibonacci(0)).toBe(0);
    });

    test('should return 1 for fibonacci(1)', () => {
      expect(fibonacci(1)).toBe(1);
    });

    test('should return correct Fibonacci number for a small positive n', () => {
      expect(fibonacci(5)).toBe(5);
      expect(fibonacci(8)).toBe(21);
      expect(fibonacci(10)).toBe(55);
    });

    test('should return correct Fibonacci number for a larger positive n', () => {
      expect(fibonacci(68)).toBe(72723460248141);
    });

    test('should handle edge cases like n = 2 and n = 3 correctly', () => {
      expect(fibonacci(2)).toBe(1);
      expect(fibonacci(3)).toBe(2);
    });
  });
});

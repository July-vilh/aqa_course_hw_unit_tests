import {
  qa,
  bindResult,
  callResult,
  applyResult,
  functionCallCounter,
  anotherQa,
} from '../../../homework-solutions/js/hw-10/task-1.mjs';

describe('[JS] - [HW 10] - Task 1', () => {
  describe('Context', () => {
    test('getInfo should return a string with the correct context', () => {
      const result = qa.getInfo('Hello');
      expect(result).toBe(`Hello, my name is ${qa.name}, I'm ${qa.age} and my salary is ${qa.salary}`);
    });
  });

  describe('Changing the context', () => {
    test('getInfo with bind should return correct string', () => {
      const result = bindResult;
      expect(result).toBe(
        `Hello, my name is ${anotherQa.name}, I'm ${anotherQa.age} and my salary is ${anotherQa.salary}`,
      );
    });

    test('getInfo with call should return correct string', () => {
      const result = callResult;
      expect(result).toBe(
        `Hi, my name is ${anotherQa.name}, I'm ${anotherQa.age} and my salary is ${anotherQa.salary}`,
      );
    });

    test('getInfo with apply should return correct string', () => {
      const result = applyResult;
      expect(result).toBe(
        `Hey, my name is ${anotherQa.name}, I'm ${anotherQa.age} and my salary is ${anotherQa.salary}`,
      );
    });
  });

  describe('Task 3: Closures', () => {
    test('createCounter should increase count correctly', () => {
      expect(functionCallCounter()).toBe(1);
      expect(functionCallCounter()).toBe(2);
      expect(functionCallCounter()).toBe(3);
      expect(functionCallCounter()).toBe(4);
      expect(functionCallCounter()).toBe(5);
    });
  });
});

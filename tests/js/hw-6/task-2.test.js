import { resultNull, resultUnique } from '../../../homework-solutions/js/hw-6/task-2';

describe('[JS] - [HW 6] - Task 2', () => {
  test('resultUnique should contain only unique pizzas', () => {
    expect(resultUnique).toEqual(['Margherita', 'Vegetarian']);
  });

  test('resultNull should be null', () => {
    expect(resultNull).toBeNull();
  });
});

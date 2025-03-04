/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/
'use strict';

function findMissingNumber(numbers) {
  let lengthExpected = numbers.length + 1;
  let expectedSum = (lengthExpected * (lengthExpected + 1)) / 2;
  let realSum = numbers.reduce((result, value) => result + value, 0);
  let emptyValue = expectedSum - realSum;
  return emptyValue;
}

let numbers = [5, 2, 7, 3, 8, 1, 6];
console.log(findMissingNumber(numbers));

export { findMissingNumber };

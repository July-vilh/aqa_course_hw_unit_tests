/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
'use strict';
function mergeArrays(...array) {
  return [].concat(...array);
}
mergeArrays([1, 2], [3, 4]);

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence.trim()) return '';
  let words = sentence.split(' ');
  const result = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i].trim();
    if (word === '') continue;

    if (result.length === 0) {
      result.push(word[0].toLowerCase() + word.slice(1).toLowerCase());
    } else {
      result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    }
  }

  return result.join('_');
}

console.log(devideBy('i_Am_Super_Engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let firstFibonacci = 0;
  let secondFibonacci = 1;

  for (let i = 2; i <= n; i++) {
    let result = firstFibonacci + secondFibonacci;
    firstFibonacci = secondFibonacci;
    secondFibonacci = result;
  }

  return secondFibonacci;
}

console.log(fibonacci(3));

export { mergeArrays, fibonacci, devideBy };

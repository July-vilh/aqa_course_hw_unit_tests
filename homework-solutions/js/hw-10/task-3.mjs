/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function uniqueRandomGenerator(n) {
  let arrCounter = [];
  for (let i = 1; i <= n; i++) {
    arrCounter.push(i);
  }

  return function () {
    if (arrCounter.length === 0) {
      return 'All numbers were received';
    }

    const randomIndex = getRandomArbitrary(0, arrCounter.length - 1);
    const removedElements = arrCounter.splice(randomIndex, 1);
    const number = removedElements[0];
    return number;
  };
}

const randomNumber = uniqueRandomGenerator(5);

export { uniqueRandomGenerator };

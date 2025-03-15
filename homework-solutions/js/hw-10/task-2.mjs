/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
function countOccurrences(arr) {
  let count = {};
  for (const number of arr) {
    if (number in count) {
      count[number] += 1;
    } else {
      count[number] = 1;
    }
  }
  return count;
}
console.log(countOccurrences(numbers));

export { countOccurrences };

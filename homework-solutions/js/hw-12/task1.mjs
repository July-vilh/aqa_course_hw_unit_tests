// TASK1
// Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию,
// которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

delayTwoSeconds(() => {
  console.log('Hello');
});

// TASK2
// Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1.
// Обработайте промис методом .then и выведите результат его резолва в консоль

const promise = new Promise((resolve, reject) => {
  resolve(1);
});
promise.then((result) => console.log(result));

// TASK3
// Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
// Обработайте промис методом .catch и выведите результат его реджекта в консоль

const promise2 = new Promise((resolve, reject) => {
  reject('Promise failed');
});
promise2.catch((reject) => console.log(reject));

// TASK4
// Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
function promiseNumber(number) {
  return new Promise((resolve) => {
    resolve(number);
  });
}
//promiseNumber(5).then((result) => console.log(result));

// TASK5
// Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
// обработайте его результаты и последовательно выведите в консоль результаты работы каждого промиса через .then
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([num1, num2, num3]) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  })
  .catch((err) => console.error(err));

// TASK6
// Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]),
// обработайте его результаты и последовательно выведите в консоль статус и результат каждого промиса через .then
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(([num1, num2, num3]) => {
    console.log(num1);
    console.log(num2);
    console.log(num3);
  })
  .catch((err) => console.error(err));

// TASK7
// Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
async function f1() {
  try {
    const [num1, num2, num3] = await Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    console.log(num1);
    console.log(num2);
    console.log(num3);
  } catch (err) {
    console.log(err);
  }
}
f1();

async function f1() {
  try {
    const [num1, num2, num3] = await Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]);
    console.log(num1);
    console.log(num2);
    console.log(num3);
  } catch (err) {
    console.log(err);
  }
}
f1();

/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/
'use strict';
function digitalRoot(number) {
  const digArray = number.toString().split('');
  let sumOfArray = 0;
  for (number of digArray) {
    sumOfArray += Number(number);
  }

  return sumOfArray > 9 ? digitalRoot(sumOfArray) : sumOfArray;
}
console.log(digitalRoot(19));

export { digitalRoot };

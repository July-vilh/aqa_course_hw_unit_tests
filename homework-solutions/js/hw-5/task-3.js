/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
'use strict';
const word = 'hello';
let vowelsAndConsonantsResult = '';
let vowelsQuan = 0;
let consonantsQuan = 0;

const vowelsList = 'aeiouAEIOU';
const consonantsList = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';

for (let i = 0; i < word.length; i++) {
  if (vowelsList.includes(word[i])) {
    vowelsQuan += 1;
  } else if (consonantsList.includes(word[i])) {
    consonantsQuan += 1;
  }
}

vowelsAndConsonantsResult = `${word} contains ${vowelsQuan} vowels and ${consonantsQuan} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };

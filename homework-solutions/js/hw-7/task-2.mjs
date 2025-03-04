/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/
'use strict';
function isPalindrom(word) {
  let reverseword = '';

  if (typeof word !== 'string') {
    return false;
  }
  for (let i = word.length - 1; i >= 0; i--) {
    reverseword += word[i];
  }
  return word.toLowerCase() === reverseword.toLowerCase();
}
console.log(isPalindrom('Level'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if (typeof sentence !== 'string' || !sentence.trim()) {
    return [];
  }

  let words = sentence.split(' ');
  let longestWord = 0;
  let result = [];

  for (const word of words) {
    let wordLength = word.length;
    if (wordLength > longestWord) {
      longestWord = wordLength;
      result = [word];
    } else if (wordLength === longestWord) {
      result.push(word);
    }
  }

  return result;
}

export { isPalindrom, findLongestWords };

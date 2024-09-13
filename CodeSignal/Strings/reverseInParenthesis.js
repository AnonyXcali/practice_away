/**
 * Q: https://app.codesignal.com/arcade/intro/level-3/9DgaPsE2a7M6M2Hu6
 * 
 * Write a function that reverses characters in (possibly nested) 
 * parentheses in the input string.
 * 
 * Input strings will always be well-formed with 
 * matching ()s.
 */

function solution(s) {
  function helper(str, start) {
      let result = '';
      let i = start;

      while (i < str.length) {
          if (str[i] === '(') {
              let [reversedInside, nextIndex] = helper(str, i + 1);
              result += reversedInside;
              i = nextIndex;
          } else if (str[i] === ')') {
              return [reverseString(result), i + 1];
          } else {
              result += str[i];
              i++;
          }
      }
      return [result, i];
  }

  function reverseString(str) {
      return str.split('').reverse().join('');
  }

  return helper(s, 0)[0];
}
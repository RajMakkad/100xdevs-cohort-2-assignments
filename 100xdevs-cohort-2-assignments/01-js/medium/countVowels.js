/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    const n = str.length
    str = str.toLowerCase()
    let ans = 0;
    vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i = 0; i < n; i++) {
        if (vowels.includes(str[i]))
            ans++;
    }
    return ans;
}

module.exports = countVowels;
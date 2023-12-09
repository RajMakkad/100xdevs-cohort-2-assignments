/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    let start = 0;
    let end = str.length - 1;
    str = str.toLowerCase();
    while (end > start) {
        if (!('z' >= str[start] && str[start] >= 'a'))
            start++;
        else if (!('z' >= str[end] && str[end] >= 'a'))
            end--;
        else if (str[start] == str[end]) {
            start++;
            end--;
        }
        else
            return false;
    }
    return true;
}

module.exports = isPalindrome;

"use strict";
// QUESTION 88:
function roundDecimal(num) {
    return Math.round(num);
}
let result = roundDecimal(45.7);
console.log(result);
// QUESTION 89:
function convertStringToNumber(str) {
    return parseInt(str);
}
let res = convertStringToNumber("5677");
console.log(res);
// QUESTION 90:
function isValueNaN(val) {
    return isNaN(val);
}
let answer1 = isValueNaN("hello World");
let answer2 = isValueNaN(2345);
console.log(answer1);
console.log(answer2);

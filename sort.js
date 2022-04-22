const numbers = [9, 8, 5, 6, 7, 2, 1, 3, 5, 4, 9];
const num = numbers.sort();
console.log(num);

const value = [59, 60, 90, 22, 45, 65, 30, 25, 36];
const valueNum = value.sort(function (a, b) {
    return a - b;
})
console.log(valueNum);
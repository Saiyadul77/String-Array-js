const numbers = [1, 0, 8, 9, 4, 6, 20, 34, 25, 89, 6, 66, 96, 30];
// const num = numbers.slice(5, 10);
// console.log(num);

const numSplice = numbers.splice(4, 2, 999);
console.log(numSplice);
console.log(numbers);
function addNumbers(num1, num2) {
    let result = 0;
    for (const number of arguments) {
        result = result + number;
    }
    // const result = num1 + num2;
    return result;
}
const numbers = addNumbers(10, 20, 50, 60, 70);
console.log(numbers);

function addName(first, second) {
    let name = '';
    for (const part of arguments) {
        name = name + part + ' ';
    }
    return name;
}
const fullName = addName('rahim', 'karim', 'jobbar');
console.log(fullName);
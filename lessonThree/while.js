const userNames = ["Joana", "Renata", "Weber", "Zeca"];

let counter = 0;
while(counter < userNames.length) {
    console.log(userNames[counter]);
    counter++;
}


const numbers = [1, 46, 83, 5463, 5, 989];
const numberOne = [];
const numberTwo = [];

counter = 0;
while(counter < numbers.length) {
    if (numbers[counter] % 2 === 0) {
        numberOne.push(numbers[counter]);
    } else {
        numberTwo.push(numbers[counter]);
    }
    counter++
}

console.log(numberOne);
console.log(numberTwo);


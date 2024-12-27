const numberOne = 100;
const numberTwo = 20;

if (numberOne > 1) {
    console.log("This number is greater than 1");
}

if (numberOne > 200) {
    console.log("This number is greater than 200");
} else {
    console.log("This number is smaller than 1");
}

if (numberOne > numberTwo) {
    console.log(`${numberOne} is greater than ${numberTwo}`);
} else {
    console.log(`${numberTwo} is greater than ${numberOne}`);
}

if (numberOne === numberTwo) {
    console.log(`${numberOne} and ${numberTwo} are equal numbers`);
}
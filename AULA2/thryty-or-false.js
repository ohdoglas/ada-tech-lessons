//false;
const number = 0; // zero is false
const nullNull = null;// null is false
const undef = undefined; //undefined is false
const empty = '';//empty string is false
const NaN = NaN; //NaN is false

//thruty
const anotherNumber = 1; //if the number is not 0 = true
const negativeNumber = -1; //negative numbers are true
const array = []; //empty arrays are true
const object = {}; //empty objects are true
const notEmpty = "Doug"; //not empty strings are true

// ! <- invert, if true, turns into false
// !! <- double invert, if true, turns into true (lmao)

if ([] && {} && 1 && "asd" && true) {
    console.log("Everything is true");
}

console.log(!!null, !!undefined, !!0, !!'', !!NaN  );

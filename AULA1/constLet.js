console.log(teste);
var teste = "teste"; //variavel antiga (nao mais usada)

//___________________________________________________________

const number = 20; //constante
let numberTwo = 20; //variavel
console.log(number);
console.log(numberTwo);

//___________________________________________________________

const firstName = "Douglas"; //constante string
console.log("Ola,", firstName,"!");
console.log(`Ola ${firstName}!`);

//___________________________________________________________

const itsRaining = false; //variavel boolean
itsRaining = true;

//___________________________________________________________

const anything = null; //null = nulo;
console.log(anything);

//___________________________________________________________

let noNumber;
const firstNumber = 10;
const secondNumber = 30;
const stringOne = "a";

//___________________________________________________________
//                  Math
const sumNull = null + secondNumber; //30
const sumNan = noNumber + secondNumber;//NaN = Not a number
const sumConcat = stringOne + secondNumber;//a30 = concat


const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const mult = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const pow = firstNumber ** secondNumber;
const powTwo = Math.pow(2, 3);
const divTwo = firstNumber % secondNumber;
const negativeNumber = -3;
const absoluteNumber = Math.abs(negativeNumber);

//___________________________________________________________
//                  Array
const students = ["Denis", "Erick", "Elisa", "Laura"];
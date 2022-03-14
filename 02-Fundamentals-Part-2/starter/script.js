'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio'; reserved word, as well as private



//FUNCTIONS

//Can hold complete lines of code

function logger() {
    console.log('My name is Jonas'); //function body
}

logger(); // calling, running or invoking
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // 5 and 0 are parameters, we need to capture the value and add a variable
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

*/

//FUNCTION DECLARATIONS VS EXPRESSIONS

//Function Declaration
function calcAge1(birthYear) {
    return 2037 - birthYear; //parameter is the paceholder BirthYear
}

//Function Expression - makes the code nicer
const age1 = calcAge1(1991); //Value is the one in the parameter
console.log(age1);

const calcAge2 = function (birthYear) {
    return 2037 - birthYear; //Function without a name is an expression
}

const age2 = calcAge2(1991);

console.log(age1, age2);

const age 1 log
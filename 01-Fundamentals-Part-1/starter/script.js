//VALUES AND VARIABLES

/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

//VALUES - piece of data, most fundamental unit in programming

console.log("Jonas");
console.log(23);

let firstName = "Jonas"; //Declaring a variable (in a pc memory)
console.log(firstName); // Now we can use this variable many times, change value only in one place

// RULES FOR NAMING VARIABLES

//Camelcase firstNamePerson, don't start with an uppercase
//first_name_person (ruby)
//Don't start with a number, only $ or _
//Don't use a reserved keyword in JS (new,name)

let myFirstJob = 'Programmer'; // not job1
let myCurrentJob = 'Teacher'

console.log(myFirstJob);

//DATA TYPE

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas'); // string always with quotes

javascriptIsFun = 'YES!'; //Dynamic type (without the let)
console.log(typeof javascriptIsFun);



//LET CONST VAR

let age = 30;
age = 31; // reassigning value, remuteted

const birthYear = 1991; // const can't change -  reassign
//best practice to not changing variables too much to avoid bugs or errors

var job = 'programmer'; //avoid VAR is old
job = 'teacher';

//Always declare variables



//OPERATORS

// Math Operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageSarah * 2, ageJonas / 10, 2 ** 3); // 2**3 means 2 to the power of 3 = 2*2*2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName); //concatenation string

// Assignment Operators
let x = 10 + 5; //15
x += 10; // x = x + 10 = 25 - reassigning
x *= 4; // 100
x++; //x + x + 1 = 101
x--; // 99
console.log(x);

// Comparison Operators
console.log(ageJonas > ageSarah); // >,<,>=,<=
console.log(ageSarah >= 18);
const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



//OPERATOR PRECEDENCE

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); //math operators are executed first, then comparison

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, then from right to left
console.log(x, y); // () grouping highest

const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);



//CODING CHALLENGE #1

// Test Data 1
let weightMark = 78; //teacher said const
let heightMark = 1.69;
let weightJohn = 92;
let heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);



//STRINGS AND TEMPLATE LITERALS

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`; //template literals
console.log(jonasNew);

console.log(`Just a regular strings...`); //Some developers use only ``

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);



//TAKE DECISIONS IF/ELSE STATEMENTS

const age = 15;

if (age >= 18) {
    console.log('Sara can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
} //if goes with a boolean value
//This is called a controlled structure

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



//CODING CHALLENGE #2

// Test Data 1
const weightMark = 78; //teacher said const
const heightMark = 1.69;
const weightJohn = 92;
const heightJohn = 1.95;

const bmiMark = weightMark / heightMark ** 2;
console.log(bmiMark);
const bmiJohn = weightJohn / heightJohn ** 2;
console.log(bmiJohn);

const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
    console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

*/

//TYPE CONVERSION AND COERCION

//Conversion when we manually convert it
//Coercion when JS does it BTS

const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //NaN invalid number

console.log(String(23)); //Need to start with capital S/N

//Type Coercion
console.log('I am ' + 23 + ' years old'); //The plus operator triggers to String
console.log('23' - '10' - 3); //The minus operator triggers to Numbers, multiply, dividing

let n = '1' + 1;
n = n - 1;
console.log(n);


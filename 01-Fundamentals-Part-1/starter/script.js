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



//TRUTHY AND FALSY VALUES

//5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas')); //only empty string is false
console.log(Boolean({})); //empty object is true

const money = 100;
if (money) { //JS will try to convert it to a boolean
    console.log("Don't spend it all ;)");
} else {
    console.log('You should get a job!');
}

let height;
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}



//EQUALITY OPERATORS == VS ===

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)'); //only when both sides are exactly the same - comparison operator - strict equality operator - no type coercion (it doesn't convert string to numbers) THIS IS BETTER
if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);

if (favourite === 4) {
    console.log('Cool! 4 is an amazing number!');
} else if (favourite === 7) {
    console.log('7 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 4 or 7');
}

if (favourite !== 4) console.log('Why not 4?'); //different to - strict version !==, loose != (don't use it)



//BOOLEAN LOGIC: AND, OR & NOT

//LOGICAL OPERATORS

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision); //&& AND OPERATOR
console.log(hasDriversLicense || hasGoodVision); //|| OR OPERATOR
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}



//CODING CHALLENGE #3

// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// console.log(averageScoreDolphins);
// console.log(averageScoreKoalas);

// if (averageScoreDolphins > averageScoreKoalas) {
//     console.log('Dolphins are the winners!');
// } else {
//     console.log('Koalas are the winners!');
// } // use else if because of the drawer

const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;

if (averageScoreKoalas > averageScoreDolphins && averageScoreKoalas >= 100) {
    console.log('Koalas are the winners');
} else if (averageScoreDolphins > averageScoreKoalas && averageScoreDolphins >= 100) {
    console.log('Dolphins are the winners!');
} else {
    console.log('Nobody won :(');
} // ===

console.log(averageScoreDolphins);
console.log(averageScoreKoalas);



//THE SWITCH STATEMENT

const day = 'thursday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}



//STATEMENTS AND EXPRESSIONS

3 + 4 //Expression bc produces a value (words)

if (23 > 10) { //This is a statement, big piece of code
    const str = '23 is bigger'; // str is an expression
}

console.log(`I'm ${2037 - 1991} years old`); //only expressions in template literals



//THE CONDITIONAL (TERNARY) OPERATOR

const age = 23;
// age >= 18 ? console.log('I like to drink wine') :
//     console.log('I like to drink water'); //Expression

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);



//CODING CHALLENGE #4

const bill = 430
const tip = bill <= 300 && bill >= 50 ? (bill * 0.15) : (bill * 0.2); // >= 50 && <+ 300

console.log(tip);

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

*/









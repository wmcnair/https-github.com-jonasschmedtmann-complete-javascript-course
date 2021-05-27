// let js = 'amazing';
// if (js = 'amazing') alert(40 + 8 + 23 - 10)
// console.log('Jonas');

// LECTURE: Values and Variables
let country = 'United States',
    continent = 'North America',
    population = 600000000;
console.log(country, continent, population);
console.log(typeof country);

// LECTURE: Data Types
let isIsland = country,
    language;
isIsland = true;
console.log(typeof isIsland, typeof population, typeof country, typeof language);

// LECTURE: let, const and var
language = 'English';

// LECTURE: Basic Operators
const now = 2037;
const ageJones = now - 1991;
const ageSarah = now - 2018;
console.log(`Jones is ${ageJones} and Sarah is ${ageSarah}`);
console.log('Multiply=' + ageJones * 2, 'Divide=' + ageJones / 10, 'Exponent=' + 2 ** 3);
// 2**3 means 2 to the power of 3=2*2*2

const firstName = 'Jonas', lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

console.log(now - 1991 > now - 2018);

let splitCountry = population / 2;
console.log(splitCountry += 1);

let pFinland = 6000000;
console.log(`Is Finland Bigger? ${pFinland < splitCountry}`);

let avgCountry = 33000000;
console.log(`Is country smaller than the average? ${splitCountry < avgCountry}`);

let description = 'Portugal is in Europe, and its 11 million people speak portuguese';
console.log(description);

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.*/

/* const markHeight = 1.69;
let markWeight = 78;
let markBMI = markWeight / markHeight ** 2;
const johnHeight = 1.95;
let johnWeight = 92;
let johnBMI = johnWeight / johnHeight ** 2
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI); */


// LECTURE: Strings and Template Literals
//firstName already defined
let job = 'teacher';
const birthYear = 1991;
let year = 2037;

//OLD...
const jonas = 'I\'m ' + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

//NEW...
const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

console.log(`NOTE: Use \`s for all strings...`);

//Creating Multiple line strings
console.log('String with \n\
multiple \n\
lines'); //OLD...
console.log(`String
multiple
lines`); //NEW...


// Takeing Decisions: If/Else Statements
const sarahAge = 15;
const isOldEnough = sarahAge >= 18; //Boolean

if (isOldEnough) {// (ex. control structure)
    console.log(`Sarah can start driving lessons 🚗`); //Add emoji (windows + .)
} else {
    const yearsLeft = 18 - sarahAge;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years ☹`);
}

const sarahbirthYear = 2012;
let century;
if (sarahbirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(`${century}th Century`);

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉*/

const markHeight = 1.69;
let markWeight = 78;
let markBMI = markWeight / markHeight ** 2;
const johnHeight = 1.95;
let johnWeight = 92;
let johnBMI = johnWeight / johnHeight ** 2

let markHigherBMI = markBMI > johnBMI;
if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`);
} else {
    console.log(`John has a higher BMI (${johnBMI}) than Mark.`)
}

/* Type Conversion and Coercion: (Two types: Manual(conversion) and Automatic(coercion))
------------------------------*/

// type conversion
const inputYear = '1991';
console.log(Number(inputYear) + 18); // Converting a String to a Number
console.log(String(23)); // Converting a Number to a String

// typ coercion
console.log('I am ' + 23 + ' years old'); //Auto converts Number to String (+)
console.log('23' - '10' - 3); //Auto converts Strings to Numbers (-, *, /, >)

let n = '1' + 1; //The 1 gets converted to a string = '11'
n = n - 1; //The '11' gets converted to a number = 10
console.log(n);

//Example: 2 + 3 + 4 +'5' = '95'
//Example: '10'-'4'-'3'- 2 +'5' = 15


/* Truthy and Falsy Values
------------------------------*/

// Falsy: Values that will become False when converted to a boolean (ex. 5 Types: 0, '', undefined, null, NaN)

// Truthy: Values that will become True when converted to a boolean  (ex. any number that is not 0 or any string that is not an empty string)

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

const money = 0;
if (money) {
    console.log(`You have ${money} dollar(s)`);
} else {
    console.log(`You are currently broke 😢`);
}

let height;
if (height) {
    console.log(`YAY! Height is a ${typeof height}`);
} else {
    console.log(`Height is ${typeof height}`);
}


/* Equality Operators: == vs. ===
------------------------------*/
const ageEqu = 18;
if (ageEqu === 18) console.log('You just became an adult 👍');

//Prompt a question to get a value
/* const favourite = prompt('what\'s your favourite number?');
console.log(`My favourite # is ${favourite}; type ${typeof favourite}`);

if (favourite == 23) { //'23' == 23
    console.log(`Cool! ${favourite} is an amazing number!`)
} */

/* const favourite2 = Number(prompt('what\'s your 2nd favourite number?'));// convert to a number

if (favourite2 === 23) { //23 === 23
    console.log(`Cool! ${favourite2} is an amazing number!`)
} else if (favourite2 === 7) {
    console.log(`${favourite2} is also a cool number`);
}

if (favourite2 !== 23) console.log('Why not 23?'); */


/* Boolean Logic: AND, OR & NOT(!) Operators
------------------------------*/

// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); //AND
console.log(hasDriversLicense || hasGoodVision); //OR
console.log(!hasDriversLicense); //NOT

/* const shouldDrive = hasDriversLicense && hasGoodVision;
if (shouldDrive) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
} */

const isTired = true; // C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

let dolphinsAVG = (96 + 108 + 89) / 3;
let koalasAVG = (88 + 91 + 110) / 3;
// console.log(dolphinsAVG, koalasAVG);
if (dolphinsAVG > koalasAVG && dolphinsAVG > 100) {
    console.log('The Dolphins Win!');
} else if (dolphinsAVG < koalasAVG && 100 < koalasAVG) {
    console.log('The Koalas Win!');
} else if (dolphinsAVG == koalasAVG && dolphinsAVG > 100 && koalasAVG > 100) {
    console.log('It is a DRAW...');
} else {
    console.log('No Winner ☹');
}

/* The Switch Statement
------------------------------*/
const day = 'monday';

switch (day) {
    case 'monday': //day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code example');
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

//Convert "Switch" to an "if/else" statment
if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code example');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

/* 
Statements and Expressions
------------------------------
1] Expressions is a piece code that produces a value. (ex. 3+4, 1991, true && false && !false) Also, and Operator.
2] A Statment is a bigger piece of code that does not produce a value. (ex. if/else, switch)
*/

/* The Conditional (Ternary) Operator
------------------------------*/
// NOTE: Allows you to write something like an IF/ELSE statement but in one line (Great for quick decisions)
const drinkingAge = 23;
drinkingAge >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

//even smaller
const canDrink = drinkingAge >= 18 ? 'wine 🍷' : 'water 💧';
console.log(canDrink);

//Conditional Operators can be used in template literals
console.log(`I like to drink ${drinkingAge >= 18 ? 'wine 🍷' : 'water 💧'}`);

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉
*/

const bill = 275;

const tip = bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

console.log(`The bill was $${bill}, the tip was $${tip}, and the total value $${bill + tip}`);

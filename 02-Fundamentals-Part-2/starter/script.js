'use strict';
// Restricts use from doing certain things
// Allows error to appear when normally they wouldn't

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive 👍');

// Strict Mode also reserves variables for future use (ex. interface, private) 
/*const interface = 'Audio';
const private = 534;*/


///////////////////////////////////////
// Functions

function logger() {
    console.log('My name is Wilton');
}
logger(); // calling, running, or invoking the function


function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
fruitProcessor(5, 0); //the arguments
console.log(fruitProcessor(5, 0));

// ALTERNATIVE: Store in a Variable
const appleJuice = fruitProcessor(5, 0); //the arguments
console.log(appleJuice);


const appleQrangeJuice = fruitProcessor(2, 4);
console.log(appleQrangeJuice);


///////////////////////////////////////
// Function Declarations vs. Expressions
//---------------------------------------

//Function Declarations: (NOTE: Can be called before it is defined)
const age1 = calcAge1(1991);

function calcAge1(birthYear) {
    return 2037 - birthYear;
}
console.log(age1);

//Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1985);
console.log(age2);


///////////////////////////////////////
// Arrow Functions
//---------------------------------------

// If single line
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1971);
console.log(age3);

// If Multiple lines and Arguments
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}
const yrRetireAge = yearsUntilRetirement(1991, 'Thomas');
console.log(yrRetireAge);


///////////////////////////////////////
// Functions Calling Other Functions
//---------------------------------------
function cutFruitPieces(fruit) {//fruit = apples & oranges
    return fruit * 4;
}

function fruitProcessor2(apples, oranges) {//apples, oranges = 2, 3
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange slices.`;
    return juice;
}
const fruitResults = fruitProcessor2(2, 3);
console.log(fruitResults);


///////////////////////////////////////
// Reviewing Functions
//---------------------------------------
const calcAge4 = function (birthYear) { //birthYear could be "Year" or something else. The Parameters are all independent to each function.
    return 2037 - birthYear;
}

const yearsUntilRetirement2 = (birthYear, firstName) => {
    const age = calcAge4(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement; //Data clears after the "return"
    } else {
        console.log(`${firstName} has already retired ${retirement} years ago`);
        return -1;
    }
}
const yrRetireAge2 = yearsUntilRetirement2(1971, 'Thomas');
console.log(yrRetireAge2);

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
*/

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let dolphinsScore = calcAverage(44, 23, 71);
let koalasScore = calcAverage(65, 54, 49);

const checkWinner = function (avgD, avgK) {
    if (avgD >= avgK * 2) {
        console.log(`Dolphins win (${avgD} vs. ${avgK})`);
    } else if (avgD <= avgD * 2) {
        console.log(`Koalas win (${avgK} vs. ${avgD})`);
    } else {
        console.log('No Winner ☹');
    }
}
checkWinner(dolphinsScore, koalasScore);
checkWinner(576, 111);

//Test 2
dolphinsScore = calcAverage(85, 54, 41);
koalasScore = calcAverage(23, 34, 27);
checkWinner(dolphinsScore, koalasScore);


///////////////////////////////////////
// Introduction to Arrays (Data Structure)
//---------------------------------------
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends[0], friends[2]); //calling Array elements

console.log(friends.length); //Number of element in Array
console.log(friends[friends.length - 1]); //Get the last element in Array

// Adding/replacing elements to Array
friends[2] = 'Jay'; //This will replace Peter
console.log(friends);

const firstName = 'Jonas'
const jonas = [firstName, 'Mann', 2037 - 1991, friends];
console.log(jonas);

const calcAge5 = birthYear => 2037 - birthYear;

const years = [1990, 1967, 2002, 2010, 2018];
const ages1 = calcAge5(years[0]);
const ages2 = calcAge5(years[1]);
const ages3 = calcAge5(years[years.length - 1]);
console.log(ages1, ages2, ages3);

const allAges = [calcAge5(years[0]), calcAge5(years[1]), calcAge5(years[years.length - 1])];
console.log(allAges);


///////////////////////////////////////
// Basic Array Operations (Methods)
//---------------------------------------
const friends2 = ['Michael', 'Steven', 'Peter'];

/** ADD Elements */
// PUSH: Adds elements to END of Array
friends2.push('Jay');

const newLength = friends2.push('Jane'); //Get the length of Array
console.log(friends2, newLength);

// UNSHIFT: Adds elements to BEGINNING of Array
friends2.unshift('John');
console.log(friends2);

/** REMOVE Elements */
// POP: Removes element at END of Array
friends2.pop(); //Removes Jane
const popped = friends2.pop(); //Removes Jay & gives us the name
console.log(friends2, popped);

// SHIFT: Removes element at BEGINNING of Array
friends2.shift(); //Removes John
console.log(friends2);

console.log(friends2.indexOf('Steven')); //Shows the index of the element
console.log(friends2.indexOf('Bob')); //If element is not in Array

console.log(friends2.includes('Steven')); //If element is in Array
console.log(friends2.includes('Bob')); //If element is not in Array

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven 😁');
}

///////////////////////////////////////
// Coding Challenge #2
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉
*/

/* const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;
} */
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 15 / 100 : bill * 20 / 100;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, total);
console.log(`The bill was $${bills[0]} so I tipped $${tips[0]} and my total was $${total[0]}`);


///////////////////////////////////////
// Introduction to Objects
//---------------------------------------
const jonasObj = { //Object Literal Syntax
    firstName: 'Jonas', //properties
    lastName: 'Mann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,

    //(ver1)
    /* calcAge: function (birthYear) { // Object Methods 
        return 2037 - birthYear;
    } */

    //(ver2)
    /* calcAge: function () {
        //console.log(this);
        return 2037 - this.birthYear;
    } */

    //(ver3)
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    //Challenge
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'no'} Driver's License`;
    }
};


///////////////////////////////////////
// Dot vs. Bracket Notation 
//---------------------------------------

// Retrieve data from Objects
console.log(jonasObj.lastName);
console.log(jonasObj['lastName']);

const nameKey = 'Name';
console.log(jonasObj[`first${nameKey}`], jonasObj[`last${nameKey}`]);

//Using the Prompt Function to pull data from Object
/* const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonasObj[interestedIn]) {
    console.log(jonasObj[interestedIn]);
} else {
    console.log('Wrong request! Please choose between firstName, lastName, age, job, and friends');
} */

// ADD data to Objects
jonasObj.location = 'Portugal';
jonasObj['twitter'] = '@jonasmann';
// console.log(jonasObj);

//// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonasObj.firstName} has ${jonasObj.friends.length} friends, and his best friend is called ${jonasObj.friends[0]}`);


///////////////////////////////////////
// Object Methods

//console.log(jonasObj.calcAge(birthYear)); //(ver1)

/* console.log(jonasObj.calcAge());//(ver2)
//-OR-
console.log(jonasObj['calcAge']());//(ver2) */

console.log(jonasObj.calcAge());//(ver3)
console.log(jonasObj.age);//(ver3)

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonasObj.getSummary());


///////////////////////////////////////
// Coding Challenge #3
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
*/

const markObj = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

const johnObj = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    },
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}

console.log(markObj.calcBMI(), johnObj.calcBMI());

//John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!
console.log(`${markObj.bmi > johnObj.bmi ? `${markObj.fullName()}'s BMI ${markObj.bmi} is higher than ${johnObj.fullName()}'s BMI ${johnObj.bmi}` : `${johnObj.fullName()}'s BMI ${johnObj.bmi} is higher than ${markObj.fullName()}'s BMI ${markObj.bmi}`}`);


///////////////////////////////////////
// Iteration: The for Loop

for (let rep = 1; rep <= 5; rep++) {
    console.log(`Lifting weights: repetition ${rep} 🏋️‍♂️`);
}

///////////////////////////////////////
// Looping Arrays, Breaking and Continuing

const jonasArray = [
    'Jonas',
    'Mann',
    2037 - 1991,
    ['Michael', 'Peter', 'Steven'],
    true,
    'Teacher'
];
const types = []

for (let i = 0; i < jonasArray.length; i++) {
    //Reading from jonasArray
    console.log(`${jonasArray[i]}, ${typeof jonasArray[i]}`);

    //Filling types array
    // types[i] = typeof jonasArray[i];
    //-OR-
    types.push(typeof jonasArray[i])
}
console.log(types);


const birthYears = [1991, 2007, 1969, 2020];
const byAges = [];

for (let i = 0; i < birthYears.length; i++) {
    byAges.push(2037 - birthYears[i]);
}
console.log(byAges);

//continue and break
console.log('--- ONLY STRINGS ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;
    console.log(`${jonasArray[i]}, ${typeof jonasArray[i]}`);
}

console.log('--- BREAK w/ NUMBER ---');
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;
    console.log(`${jonasArray[i]}, ${typeof jonasArray[i]}`);
}

///////////////////////////////////////
// Looping Backwards and Loops in Loops
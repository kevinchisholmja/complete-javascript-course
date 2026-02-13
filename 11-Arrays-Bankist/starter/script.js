'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #1

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const checkDogs = function (dogsJulia, dogsKate) {
//   //create a shallow copy of Julia's array, and remove the cat ages from that copied array
//   const dogsJuliaCorrected = dogsJulia.slice(1, -2);

//   // Create an array with both Julia's (corrected) and Kate's data
//   const dogs = [...dogsJuliaCorrected, ...dogsKate];

//   // "Dog number 1 is an adult, and is 5 years old"
//   // or
//   // Dog number 2 is still a puppy 🐶"
//   dogs.forEach(function (dog, i) {
//     const str =
//       dog >= 3
//         ? `Dog number ${i + 1} is an adult, and is ${dog} years old`
//         : `Dog number ${i + 1} is still a puppy 🐶`;
//     console.log(str);
//   });
// };

// console.log('---- TEST DATA 1 ----');
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log('---- TEST DATA 2 ----');
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #2

/*
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

// const calcAverageHumanAge = (dogAges) => {
//   const humanAges = dogAges.map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4));
//   const adults = humanAges.filter(dogAge => dogAge >= 18);
//   const average = adults.reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);

//   return average;

// }

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #3

/*
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = dogAges =>
  dogAges
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    // .map(value => { console.log('Step 1 - Human age:', value); return value; })
    .filter(dogAge => dogAge >= 18)
    // .map(value => { console.log('After reduce:', value); return value; })
    .reduce((acc, dogAge, i, arr) => acc + dogAge / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

/////////////////////////////////////////////////

///////////////////////////////////////
// Coding Challenge #4

/*
Julia and Kate are still studying dogs, but this time they are studying how much food a dog eats.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the 'dogs' array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the dog's objects 😉)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

/*
///////////////////////////////////////
// MENTOR'S NOTES FOR CODING CHALLENGE #4

### 1. Understanding the Problem

The goal is to analyze an array of dog objects to determine their eating habits. This involves adding data to the objects, finding specific dogs, filtering them based on conditions, and sorting them.

*   **Input:** An array of `dogs` objects.
*   **Processing:** A series of 8 distinct tasks involving data calculation, searching, filtering, and sorting.
*   **Output:** A series of console logs and new arrays based on the analysis.

### 2. Mapping to My Knowledge Baseline

This challenge is a comprehensive review of your array method skills.

*   **`forEach`:** Task 1 asks you to loop over an array and add a property to each object. Since you're performing a side effect (mutating the objects) and not creating a new array, `forEach` is the correct choice.
*   **`find` & `includes`:** Task 2 requires finding a specific dog. `find` is perfect for this. The condition inside `find` will need to check if the `owners` array `includes('Sarah')`.
*   **`filter` & `flatMap`:** For task 3, you need to first `filter` the dogs based on their eating habits and then extract all the owners into a single array. Chaining `flatMap` after `filter` is the most efficient way to do this.
*   **`join`:** Task 4 requires you to create a formatted string from an array of owners. `join(' and ')` is the method for this.
*   **`some`:** Task 5 asks if *any* dog meets a condition. `some` is the ideal method as it returns `true` as soon as it finds a single match.
*   **`every`:** Task 6 asks if *all* dogs meet a condition. `every` is the counterpart to `some` and is the right tool here.
*   **`slice` & `sort`:** Task 8 requires sorting a *copy* of the array. You'll first create a shallow copy with `slice()` (or the spread operator), and then use the `sort` method with a compare function `(a, b) => a.recFood - b.recFood` to sort the objects based on a property.

### 3. Step-by-Step Plan

1.  **Add `recFood`:** Use `forEach` on the `dogs` array. Inside the callback, calculate `recFood` using the formula and add it as a new property to the dog object.
2.  **Find Sarah's Dog:** Use `find` to get the dog object where `dog.owners.includes('Sarah')`. Use a ternary operator and a template literal to log its eating status.
3.  **Create Owner Arrays:**
    *   Chain `filter` and `flatMap` on the `dogs` array to create `ownersEatTooMuch`.
    *   Repeat the process to create `ownersEatTooLittle`.
4.  **Log Owner Strings:** Use template literals and the `join` method on both new owner arrays to print the required strings.
5.  **Check for Exact Amount:** Use `some` on the `dogs` array with the condition `dog.curFood === dog.recFood` and log the boolean result.
6.  **Check for Okay Amount:** Use `every` on the `dogs` array with the condition from HINT 2. Log the boolean result.
7.  **Create Okay Eaters Array:** Use `filter` with the same condition from step 6.
8.  **Sort by `recFood`:** Create a shallow copy of `dogs` using `slice()`. Chain the `sort()` method with the appropriate compare function.

### 4. Testing & Edge Cases

*   **Question 1:** In step 1, you are asked to mutate the original `dogs` array by adding a property. Why is this acceptable here, while in previous challenges we strictly avoided mutating data?
*   **Question 2:** The condition for an "okay" amount is `current > (recommended * 0.90) && current < (recommended * 1.10)`. What happens if a dog eats exactly 90% or 110% of the recommended amount? Is it considered "okay" by this logic? How would you change it to include those boundaries?

*/

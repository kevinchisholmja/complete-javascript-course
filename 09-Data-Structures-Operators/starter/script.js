'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    // console.log(mainIngredient);
    // console.log(otherIngredients);
  },
};

// ---

///////////////////////////////////////
// For of loop

const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  if (number === 3) {
    continue; // Skip the number 3
  }
  if (number === 5) {
    break; // Exit the loop when reaching 5
  }
  // console.log(`Test`, number); // This will log 1, 2, and 4
}

// ---
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const anything of menu) {
//   console.log(anything);
// }

for (const [i, el] of menu.entries()) {
  // console.log(`${i + 1}: ${el}`);
}

// ---

// ---

///////////////////////////////////////
// 119. Optional Chaining

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  // console.log(`On ${day}, we open at ${open}`);
}

// Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
// const users = [];

// console.log(users[0]?.name ?? 'User array empty');

// WITH optional chaining
// if (users.length > 0) console.log(users[0].name);
// else console.log('user array empty');

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1.
const [players1, players2] = game.players;
// console.log(players1, players2);

// 2.
const [gk, ...fieldPlayers] = [...players1];
// console.log(`Goalkeepers:`, gk);
// console.log(`Team1 Players:`, fieldPlayers);

// 3.
const allPlayers = [...players1, ...players2];
// console.log(`Both Teams:`, allPlayers);

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(`All Players:`, players1Final);

// 5.
// I think this is what they are looking for:
// const { team1, x: draw, team2 } = game.odds;
// console.log(team1, draw, team2);

// Alternative:
// const team1 = game.odds.team1;
// const draw = game.odds.x;
// const team2 = game.odds.team2;

// --- 6

// # 6. My Best answer
const printGoals = (...players) => {
  for (let i = 0; i < players.length; i++) {
    console.log(players[i]);
  } // Loop & print
  console.log(`${players.length} goals were scored`); // Print length directly
};
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// What the instructor wanted:
const printGoals1 = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};
// printGoals1('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals1('Davies', 'Muller');
// printGoals1(...game.scored);

// Unnecessary
const printGoals2 = (...player) => {
  let score = 0;
  for (let i = 0; i < player.length; i++) {
    console.log(`Score by:`, player[i]);
    score++;
  }

  console.log(`Total Score:${score}`);
};
// printGoals2(`Gnarby`, 'Coutinho', 'Perisic');

// --- If receiving an array:
const printGoalArray = playerArray => {
  for (let i = 0; i < playerArray.length; i++) {
    // console.log(`Alt - Score by:`, playerArray[i]);
  }

  // console.log('Alt - Player Goals:' + ' ' + playerArray.length);
};

printGoalArray(['Neymar', 'Mbappe', 'Haaland']);

// 7. Print to the console which team is more likely to win,
// game.odds.team1 < game.odds.team2 && console.log(`team1 is more likely to win`);
// game.odds.team2 < game.odds.team1 && console.log(`team2 is more likely to win`);

///////////////////////////////////////
// Looping Objects: Object Keys, Values, and Entries

// // Property NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// const property = Object.keys(openingHours);
// console.log(property.length);

for (const day of Object.keys(openingHours)) {
  // console.log(day);
}

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log('Property NAMES: ' + openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log('Property VALUES: ' + values);

// Entire object
const entry = Object.entries(openingHours);
// console.log('Entire object: ' + entry);

// Entire object
const entries = Object.entries(openingHours);
// [key, value]
for (const [day, { open, close }] of entries) {
  // console.log(`On ${day} we open at ${open} and close at ${close}`);
}
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
// # 1
for (const [index, player] of game.scored.entries()) {
  // console.log(`Goal ${index + 1}: ${player}`);
}
// Alternative
for (const [index, player] of Object.entries(game.scored)) {
  // console.log(`Goal ${parseFloat(index) + 1}: ${player}`);
}

// ---

// # 2
// const odds = Object.values(game.odds);
// let average = 0;

// for (const odd of odds) {
//   average += odd;
// }

// average /= odds.length; // Divide by the length of the array (3)
// console.log(average);

// Alternative 1
// let sum = 0;
// let count = 0;
// for (const i of Object.values(game.odds)) {
//   sum += i;
//   count++;
// }
// console.log(sum / count);

// Alternative 2
// const odd = Object.entries(game.odds);
// let sum = 0;
// for (const i of [...odd]) {
//   sum += i[1];
// }
// console.log(sum / odd.length);
// console.log(typeof sum); // number

// ---

// # 3
// for (const [team, odd] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${team === 'x' ? 'draw' : 'victory ' + game[team]}: ${odd}`
//   );
// }

// // Alternative
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamName = team === 'x' ? 'draw' : game[team]; // game.team1 or game.team2

//   const message = `Odd of victory ${teamName}: ${odd}`;

//   console.log(message);
// }

// ---

// BONUS
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] = (scorers[player] || 0) + 1;
// }
// console.log(scorers);

// Alternative
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);
/*
Thought process:
1. Inside the loop, first I set the player index on the scorers object `scorers[player]` and set each to zero (on each iteration the index player value is set to zero). 
2. Then I remove the RHS 0, and replace with (scorers[player] || 0), If the player already has a score (like 1 or 2), that’s "truthy." The OR operator (||) sees it and immediately use that number, If this is the player's first time being seen, scorers[player] is undefined. Since undefined is falsy, the code jumps over the || and grabs the 0 instead.
3. Now that I have a starting number (either their current score or 0), I just add 1.
*/

///////////////////////////////////////
// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
// console.log(ordersSet);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Bread'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');
// ordersSet.delete('Risotto');
// ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// // Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
// );

// console.log(new Set('jonasschmedtmann').size);

///////////////////////////////////////
// New Operations to Make Sets Useful!

// const commonFoods = italianFoods.intersection(mexicanFoods);
// console.log('Intersection:', commonFoods);
// console.log([...commonFoods]);

// const italianMexicanFusion = italianFoods.union(mexicanFoods);
// console.log('Union:', italianMexicanFusion);

// console.log([...new Set([...italianFoods, ...mexicanFoods])]);

// const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
// console.log('Difference italian', uniqueItalianFoods);

// const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
// console.log('Difference mexican', uniqueMexicanFoods);

// const uniqueItalianAndMexicanFoods =
//   italianFoods.symmetricDifference(mexicanFoods);
// console.log(uniqueItalianAndMexicanFoods);

// console.log(italianFoods.isDisjointFrom(mexicanFoods));

///////////////////////////////////////
// Maps: Fundamentals
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// console.log(rest.set(2, 'Lisbon, Portugal'));

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are closed :(');

// console.log(rest.get('name'));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

///////////////////////////////////////
// Maps: Iteration
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   ['correct', 3],
//   [true, 'Correct 🎉'],
//   [false, 'Try again!'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quiz app
// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }
// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// // Convert map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = [...new Set([...gameEvents.values()])];

// console.log(events);

// 2.
gameEvents.delete(64);

// console.log(gameEvents);

// 4.
// console.log(
//   `An event happened, on average, every ${90 / gameEvents.size} minutes`
// );

// Alternative
// const time = [...gameEvents.keys()].pop();
// console.log(time);
// console.log(
//   `An event happened, on average, every ${time / gameEvents.size} minutes`
// );

// 4.
// for (const [key, val] of gameEvents) {
//   key < 45
//     ? console.log(`[FIRST HALF]: ${key}: ${val}`)
//     : console.log(`[SECOND HALF]: ${key}: ${val}`);
// }

// console.log();

// Alternative ()
for (const [min, event] of gameEvents) {
  // Calculate the 'half' string first
  const half = min <= 45 ? 'FIRST' : 'SECOND';

  // Log once
  // console.log(`[${half} HALF] ${min}: ${event}`);
}

// ---

///////////////////////////////////////

/* The Complete JavaScript Course Coding Challenge 

##  Challenge #4 

Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase. 

The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed. 

Test data (pasted to textarea, including spaces): 

underscore_case

 first_name

Some_Variable

  calculate_AGE

delayed_departure

Should produce this output (5 separate console.log outputs): 

underscoreCase      ✅ 
firstName           ✅✅ 
someVariable        ✅✅✅ 
calculateAge        ✅✅✅✅ 
delayedDeparture    ✅✅✅✅✅ 

Hints: 
1. Remember which character defines a new line in the textarea 😉 
2. The solution only needs to work for a variable made out of 2 words, like a_b 
3. Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working 😉 
4. This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue! 
 
Afterwards, test with your own test data! 
 
GOOD LUCK 😀 

*/

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

/* *****************************
             MY WAY
***************************** */

// // We capture the event from each DOM element
// const textEl = document.querySelector('textarea')
// const buttonEl = document.querySelector('button')

// // We create the function based on the button click
// buttonEl.addEventListener('click', function () {
//   console.log('Button clicked!');

//   // We capture the textarea content (returns one element)
//   const content = textEl.value
//   console.log(`Capture textarea`, content);

//   // We use line break to separate
//   const lines = content.split('\n');

//   // We normalize each in the array
//   const normalize = (texts) => {
//     console.log(`After split`, texts)

//     const results = [];
//     let newText = ''
//     let checkMark = ''
//     let combine = ''
//     let paddedText = ''

//     for (const text of texts) {
//       if (text === "") { // remove blank lines
//         continue
//       } else {
//         const trimtext = text.trim().toLowerCase() // remove blank spaces & lowercase
//         newText =
//           trimtext.slice(0, trimtext.indexOf('_')) +        // Provide 1st half
//           trimtext.slice(trimtext.lastIndexOf('_') + 1).slice(0, 1).toUpperCase() + // Capture & Uppercase 1st letter of 2nd word
//           trimtext.slice(trimtext.lastIndexOf('_') + 2,) // slice, then provide 2nd word

//         // console.log(`During loop`, newText )

//         paddedText = newText.padEnd(20, ' ');

//         checkMark += `✅`

//         combine = paddedText + checkMark

//         console.log(combine)

//         results.push(combine);
//       }
//     }
//     console.log(`Capture return`, results)

//     return results;

//   }
//   normalize(lines)

// });

/* *****************************
 MUCH BETTER WAY (done by AI deepseek)
***************************** */

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');

// button.addEventListener('click', function () {
//   // Get the text from textarea
//   const text = textarea.value;

//   // Split by new line to get array of lines
//   const lines = text.split('\n');

//   // Manual counter for checkmarks
//   let lineNumber = 1;

//   // Loop through each line (using for loop to get index)
//   for (const line of lines) {

//     // Skip empty lines
//     if (line.trim() === '') continue;

//     // Trim and convert to lowercase
//     const trimmedLine = line.trim().toLowerCase();

//     // Find the underscore position
//     const [firstWord, secondWord] = trimmedLine.split('_');

//     // Extract parts and convert to camelCase
//     const camelCase = firstWord +
//       secondWord[0].toUpperCase() +
//       secondWord.slice(1);

//     // Create padded & checkmarks based on line index - Output the result
//     console.log(
//       camelCase.padEnd(20, ' ') +
//       '✅'.repeat(lineNumber)
//     );

//     // Increment for next line
//     lineNumber++;
//   }
// });


///////////////////////////////////////
// Google Gemini - Challenge #5: The "Log Parser"
///////////////////////////////////////

/*

### Challenge #5: The "Log Parser"

**The Scenario:**
You are building a monitoring dashboard. You are receiving a raw stream of data from a server log. The data is messy, separated by different symbols, and needs to be formatted into a human-readable alert.

** The Input (Paste this into your textarea):**

```text
STATUS:CRITICAL;ID:404;ERR:Connection_Timeout
STATUS:warn;ID:200;ERR:cpu_overload
STATUS:OK;ID:500;ERR:system_stable

```

**The Goal:**
Transform each line into a clean console log sentence.

**Expected Output:**

```text
🚨 Critical! Error 404: Connection Timeout
⚠️ Warn! Error 200: Cpu Overload
✅ Ok! Error 500: System Stable

```

*(Note: Capitalization matters! "Connection_Timeout" becomes "Connection Timeout")*

---

### 🛑 The Constraints (Read Carefully)

These constraints are designed to force you out of your "slicing" habit.

1. **ABSOLUTELY NO `indexOf` or `lastIndexOf**`: You are forbidden from searching for the position of a character.
2. **ABSOLUTELY NO manual numbers in `slice` or `substring**`: You cannot say `slice(0, 7)`. You cannot count characters. (You *can* use `slice(1)` only to capitalize the first letter, but not to cut words out).
3. **MUST Use `split()**`: You must break the string apart using the delimiters (`;` and `:` and `_`).
4. **MUST Use Array Destructuring**: When you split something, unpack it immediately.
* *Example:* `const [key, value] = str.split(':')`

*/

// const [key, value] = str.split(':')

// const textarea = document.querySelector('textarea');
// const button = document.querySelector('button');


// console.log(`Logging textarea value:
// ${textarea.value}`)

// // 1. EXTRACT: Get raw text
// const rawText = textarea.value;

// // 2. SPLIT: Break into lines
// const lines = rawText.split('\n');

// // 3. PROCESS: Transform each line
// for (const line of lines) {
//   // Skip empty lines
//   if (line.trim() === '') continue;

//   //4 3a. Parse line into components
//   const pairs = line.split(';'); // ["STATUS:CRITICAL", "ID:404", "ERR:Connection_Timeout"]

//   //5 3b. Extract values using for...of instead of .map()
//   const values = [];
//   for (const pair of pairs) {
//     const [key, value] = pair.split(':');
//     // console.log(`Logging Key loop`, key)
//     // console.log(`Logging Value loop`, value)
//     values.push(value);
//   }

//   //6 3c. Destructure values
//   const [rawStatus, id, rawError] = values; // ["CRITICAL", "404", "Connection_Timeout"]

//   // 3d. Transform each component
//   const formattedStatus = formatStatus(rawStatus);
//   const formattedId = `Error ${id}:`;
//   const formattedError = formatError(rawError);

//   // 3e. Output
//   console.log(`${formattedStatus}! ${formattedId} ${formattedError}`);
// }

// // Helper functions
// function formatStatus(raw) {
//   // Convert to lowercase, then capitalize first letter
//   const lower = raw.toLowerCase();
//   const capitalized = lower[0].toUpperCase() + lower.slice(1).toLowerCase();

//   // Add emoji based on original case-insensitive value
//   const upperRaw = raw.toUpperCase();
//   if (upperRaw === 'CRITICAL') return `🚨 ${capitalized}`;
//   if (upperRaw === 'WARN') return `⚠️ ${capitalized}`;
//   if (upperRaw === 'OK') return `✅ ${capitalized}`;
//   return capitalized;
// }

// function formatError(raw) {
//   // Split by underscore, capitalize each word, join with space
//   const words = raw.split('_');
//   let result = '';

//   for (const word of words) {
//     const capitalized = word[0].toUpperCase() + word.slice(1).toLowerCase();
//     result += (result ? ' ' : '') + capitalized;
//   }

//   return result;
// }

///////////////////////////////////////
// Alternative
///////////////////////////////////////
// const rawText = textarea.value;
// const lines = rawText.split('\n');

// for (const line of lines) {
//   if (line.trim() === '') continue;

//   // Split into key-value pairs
//   const parts = line.split(';');

//   let statusValue = '';
//   let idValue = '';
//   let errorValue = '';

//   // Extract values using destructuring
//   for (const part of parts) {
//     const [key, value] = part.split(':');

//     if (key === 'STATUS') statusValue = value;
//     if (key === 'ID') idValue = value;
//     if (key === 'ERR') errorValue = value;
//   }

//   // ---- Transform STATUS ----
//   const statusLower = statusValue.toLowerCase();
//   const statusFormatted =
//     statusLower[0].toUpperCase() + statusLower.slice(1);

//   let emoji = '';
//   const statusUpper = statusValue.toUpperCase();

//   if (statusUpper === 'CRITICAL') emoji = '🚨';
//   if (statusUpper === 'WARN') emoji = '⚠️';
//   if (statusUpper === 'OK') emoji = '✅';

//   // ---- Transform ERROR ----
//   const errorParts = errorValue.split('_');
//   let errorFormatted = '';

//   for (const word of errorParts) {
//     const cleanWord =
//       word[0].toUpperCase() + word.slice(1).toLowerCase();

//     errorFormatted += (errorFormatted ? ' ' : '') + cleanWord;
//   }

//   // ---- Output ----
//   console.log(
//     `${emoji} ${statusFormatted}! Error ${idValue}: ${errorFormatted}`
//   );
// }


///////////////////////////////////////
// Google Gemini - Challenge: "The Legacy Flight Board"
///////////////////////////////////////

/*

### 🧩 The Challenge: "The Legacy Flight Board"

**Scenario:**
You have been hired by a budget airline to fix their passenger display board. The backend system is ancient (run by a hamster on a wheel, presumably) and spits out flight data in a single, ugly string block.

Your job is to parse this string and display a clean, user-friendly Flight Status Board in the console.

**The Data:**
Copy this variable into your workspace:

```javascript
const rawFlightData = `
  AS-1209|SFO>JFK|08:45|on_time
  DL-0452|LAX>ORD|12:30|delayed_weather_storm
  BA-0099|LHR>IAD|17:15|cancelled
  UA-4401|DEN>SFO|06:00|boarding_now
`;

```

**The Goal (Expected Output):**
Your console must log exactly this format:

```text
✈️ Flight: AS-1209 | 📍 SFO to JFK | 🟢 Status: On Time
✈️ Flight: DL-0452 | 📍 LAX to ORD | ⚠️ Status: Delayed Weather Storm
✈️ Flight: BA-0099 | 📍 LHR to IAD | 🔴 Status: Cancelled
✈️ Flight: UA-4401 | 📍 DEN to SFO | 🔵 Status: Boarding Now

```

---

### 🚦 The Rules (Strict Constraints)

1. **FORBIDDEN:** You cannot use `indexOf`, `lastIndexOf`, `search`, or `substring`.
2. **FORBIDDEN:** You cannot use `slice` with manual indices to cut words out (e.g., `slice(0, 3)` to get an airport code is **banned**).
* *Exception:* You **MAY** use `slice(1)` only for the specific purpose of capitalizing a letter (e.g., `str[0].toUpperCase() + str.slice(1)`).


3. **MANDATORY:** You must use `.split()` to break the string into lines, and then again to break the lines into segments.
4. **MANDATORY:** You must use **Array Destructuring** to extract the data segments from your split arrays.
* *Hint:* The route (`SFO>JFK`) is one segment that contains two pieces of data. You will need to split and destructure that specifically.

5. **MANDATORY:** You must use a `for...of` loop to iterate. (No `.map` or `.forEach` allowed for this exercise, based on your "Learnt" file preferences).
6. **MANDATORY:** You must clean up the status messages:
* Replace underscores `_` with spaces.
* Capitalize the first letter of **every word** in the status (e.g., "delayed_weather_storm" -> "Delayed Weather Storm").

---

### 🧠 Your Task

1. **Analyze:** Look at the delimiters. We have newlines, pipes (`|`), arrows (`>`), and underscores (`_`).
2. **Draft:** Create your **Code Story** (just like your example). Break down how you will peel the layers of this data onion step-by-step.
3. **Code:** Write the solution in VS Code.
4. **Review:** Paste your **Code Story** and your **Final Code** here for my review.

I am ready when you are. Good luck!

*/
const rawFlightData = `
  AS-1209|SFO>JFK|08:45|on_time
  DL-0452|LAX>ORD|12:30|delayed_weather_storm
  BA-0099|LHR>IAD|17:15|cancelled
  UA-4401|DEN>SFO|06:00|boarding_now
`;

/*
// console.log(rawFlightData)

const trimData = rawFlightData.trim()   // Remove blank lines
// console.log(trimData)

const lineData = trimData.split('\n')   // Split 
// console.log(lineData)

for (const line of lineData) {               // 
  const dataPairs = line.trim().split("|")    // 
  // console.log(dataPairs)

  const [flight, route, , status] = dataPairs
  // console.log(flight)
  // console.log(route)
  // console.log(times)
  // console.log(statuses)

  const [origin, destination] = route.split('>')
  // console.log(...cleanRoute)

  // ---- Transform STATUS ----
  const lowerStatus = status.toLocaleLowerCase().split('_')
  // console.log(lowerStatus)

  let capitalStatus = '';

  let emoji = '';

  for (const lower of lowerStatus) {
    const normalStatus = lower[0].toUpperCase() + lower.slice(1)
    // console.log(normalStatus)

    capitalStatus += normalStatus

    const statusMap = { // Object literal
      'on_time': '🟢',
      'delayed_weather_storm': '⚠️',
      'cancelled': '🔴',
      'boarding_now': '🔵',
    };

    emoji = statusMap[status];

  }
  ///////////////////////////////////////
  // ALTERNATIVE

  // const statusLower = status.toLowerCase();

  // if (statusLower === 'on_time') emoji = '🟢';
  // if (statusLower === 'delayed_weather_storm') emoji = '⚠️';
  // if (statusLower === 'cancelled') emoji = '🔴';
  // if (statusLower === 'boarding_now') emoji = '🔵';

  // console.log(capitalStatus)

  const cleanRow = `✈️ Flight: ${flight} | 📍 ${origin} to ${destination} | ${emoji} Status: ${capitalStatus}`
  console.log(cleanRow)
}

///////////////////////////////////////
// ALTERNATIVE
// let capitalStatus = '';

// for (const lower of lowerStatus) {
//   const normalStatus =
//     lower[0].toUpperCase() + lower.slice(1);

//   capitalStatus += normalStatus + ' ';
// }
*/

///////////////////////////////////////
// REFACTORING
///////////////////////////////////////

// 1. CONFIGURATION (Define maps once, outside the loop)
const STATUS_EMOJIS = {
  'on_time': '🟢',
  'delayed_weather_storm': '⚠️',
  'cancelled': '🔴',
  'boarding_now': '🔵',
};

// 2. PREPARATION
const trimData = rawFlightData.trim();
const lineData = trimData.split('\n');

// 3. PROCESSING
for (const line of lineData) {
  // Split the row
  const dataPairs = line.trim().split("|");

  // Destructure (Skipping time)
  const [flight, route, , rawStatus] = dataPairs;

  // Destructure Route
  const [origin, destination] = route.split('>');

  // ---- Transform STATUS ----
  const statusWords = rawStatus.toLowerCase().split('_');
  let capitalStatus = '';

  for (const word of statusWords) {
    // Capitalize first letter + rest of word + space
    capitalStatus += word[0].toUpperCase() + word.slice(1) + ' ';
  }

  // Look up emoji using the original raw key
  const emoji = STATUS_EMOJIS[rawStatus] || '⚪'; // Fallback just in case

  // Final Output (Trimming the trailing space on status)
  const cleanRow = `✈️ Flight: ${flight} | 📍 ${origin} to ${destination} | ${emoji} Status: ${capitalStatus.trim()}`;

  // console.log(cleanRow);
}


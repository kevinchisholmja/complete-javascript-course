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

//

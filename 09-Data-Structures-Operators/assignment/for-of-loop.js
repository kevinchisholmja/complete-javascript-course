///////////////////////////////////////
// For of loop

const itemArray = ["a", "b", "c", "d", "e"];

for (const item of itemArray) {
  if (item === "c") {
    continue; // Skip the number c
  }
  if (item === "e") {
    break; // Exit the loop when reaching e
  }
  //   console.log(`List item #: ` + item); // This will log a, b, and d
}

// ---
const menu = ["pasta", "gnocchi", "tomatoes", "olive oil", "garlic", "basil"];
// for (const item of menu) {
//   console.log(item);
// }

for (const [i, el] of menu.entries()) {
  //   console.log(`Menu with index ${i} is ${el}`);
}

// ---

/*
### Test 1: Basic Iteration & Control Flow

**Scenario**
You are processing a queue of tasks. Some tasks are labeled "Draft" and should be skipped to focus only on "Active" tasks, but if you hit a "Critical-Stop" task, you must abort the entire loop immediately.

**Task**
Given the array of tasks below, write a `for...of` loop that:

1. Logs `"Processing: [Task Name]"` for every task.
2. **Skips** the current iteration if the task is `"Draft"`.
3. **Stops** the loop entirely if the task is `"Critical-Stop"`.

**Constraints**

* Use `for...of`.
* Use `continue` and `break`.
*/

const tasks = ["Update Website", "Draft", "Email Clients", "Critical-Stop", "Clean Database"];

for (const taskName of tasks) {
  if (taskName === "Draft") {
    continue;
  }
  if (taskName === "Critical-Stop") {
    break;
  }
  //   console.log(`Processing: ${taskName}`);
}
/*
**Reflection Question**
According to the transcript, why is being able to use `continue` and `break` a significant advantage of the `for...of` loop compared to "other ways of looping arrays" you will learn later (like `.forEach` or `.map`)?
*/
// Being able to use `continue` and `break` a significant advantage of the `for...of` loop because it allows you to skip elements in the array or terminate the iteration when needed.

// ---

/*
### Test 2: Index Access & Destructuring

**Scenario**
You are building a leaderboard display for a game. You have an array of player names sorted by score (highest first). You need to print their rank starting at **1** (not 0) alongside their name.

**Task**
Given the array below, write a `for...of` loop that:

1. Uses the `.entries()` method to get both the index and the element.
2. **Destructures** the index and player name directly in the loop variable declaration (e.g., `const [a, b]`).
3. Logs: `"Rank [index + 1]: [Player Name]"`

**Constraints**

* Must use `.entries()`.
* Must use destructuring in the loop head (do not access `item[0]` manually inside the loop).
*/

const leaderboard = ["Jonas", "Manfred", "Elizabeth"];

for (const [i, player] of leaderboard.entries()) {
  // console.log(`Rank ${i + 1}: ${player}`);
}

/*
**Reflection Question**
In the transcript, when we looked at what `menu.entries()` actually returns (by expanding it), we saw it is an iterator that yields something specific for each item. What is the data structure of that specific item which makes destructuring possible?

// My Reflection Question Answer:
The data structure of the item which makes destructuring possible is the object that `menu.entries()` creates, therefore the iterator provides the index for each item. 

*/

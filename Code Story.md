# Code Story

## My Solution Story (envisioned)

The following is my vision of how to complete the following challenge:

///////////////////////////////////////
// Google Gemini - Challenge: "The Legacy Flight Board" # Code Story
///////////////////////////////////////

**Given Constraints (including assumed / strongly implied ones):**

1. No `indexOf`, `lastIndexOf`, `search`, or `substring`
2. No `slice` with manual/hard-coded indices (except `slice(1)` only for capitalizing the rest of a word)
3. Must use `.split()` (both for splitting lines/newlines and for splitting each flight row by `|`)
4. Must use **array destructuring** to extract values from the split arrays
5. Must use `for...of` loop for iteration (no `.map()`, `.forEach()`, `.filter()`, etc.)
6. Must clean status: replace underscores with spaces + capitalize the first letter of **every word** in the status
7. Must handle the route part (`SFO>JFK`) by splitting it again (on `>`) and destructuring the two airport codes
8. Output must match the **exact** requested format (including emojis, spacing, capitalization, and wording: "On Time", "Delayed Weather Storm", etc.)
9. Must process **all four** flights present in `rawFlightData`
10. Cannot rely on knowing the exact number of flights in advance (should work by iterating the lines)

## My Vision:

### 1. 
The solution begins by assessing the `rawFlightData` string literal variable.

This gives us one block of flight data, containing multiple entries.

---
### 2.

For the flight data, each entry is on its own line, therefore we will need to trim blank lines then separated by line breaks (`\n`):

```js
.trim() 
.split('\n')
```

Now we have an array where each item represents **one flight entry**.  

---
### 3. 

We use a `for...of` loop to go through each line:

```js
for (const line of lineData)
```

Then we:

- Remove extra spaces with `trim()`    
- Then split `.split("|")`

---
### 4. 

Then we deconstruct the data pairs of each line

```js
const [flight, route, , status] = dataPairs
```

We deconstruct and split the route pair

```js
const [origin, destination] = route.split('>')
```

We lower case and split the status pair

```js
const lowerStatus = status.toLocaleLowerCase().split('_')
```

---
### 5. 

We then capitalize the status

```js
const normalStatus = lower[0].toUpperCase() + lower.slice(1)
```

Then generate the emoji by creating an object literal

```js
const statusMap = {}
```

---
### 6. 

Now we can create a sting literal to account for the relevant variables

```js
 const cleanRow = `✈️ Flight: ${flight} | 📍 ${routeTo} to ${routeFrom} | ${emoji} Status: ${capitalStatus}`
```

Now we can log the results to the console. 


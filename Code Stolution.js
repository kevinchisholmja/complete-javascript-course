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

const statusMap = { // Object literal
  'on_time': '🟢',
  'delayed_weather_storm': '⚠️',
  'cancelled': '🔴',
  'boarding_now': '🔵',
};

const trimData = rawFlightData.trim()
const lineData = trimData.split('\n')

for (const line of lineData) {
  const dataPairs = line.trim().split("|")

  const [flight, route, , status] = dataPairs

  const [origin, destination] = route.split('>')

  // ---- Transform STATUS ----
  const lowerStatus = status.toLocaleLowerCase().split('_')

  let capitalStatus = '';

  let emoji = '';

  for (const lower of lowerStatus) {
    const normalStatus = lower[0].toUpperCase() + lower.slice(1)

    capitalStatus += normalStatus + ' ';

  }

  emoji = statusMap[status];

  const cleanRow = `✈️ Flight: ${flight} | 📍 ${origin} to ${destination} | ${emoji} Status: ${capitalStatus}`
  console.log(cleanRow)
}


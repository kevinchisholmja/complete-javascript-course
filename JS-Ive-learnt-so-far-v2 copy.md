---
uid: 20260117-knw7
tags:
  - javascript
  - architecture
  - constraints
date: 2026-02-04
course_progress: Section 21 (Arrays of Objects II)
---
## 1. JavaScript Language Core (ECMAScript)

### Primitives & Expressions
- Strings (template literals), numbers, booleans.
- `null`, `undefined`, truthiness, and falsiness.
- Data type checks with `typeof` and `instanceof` for runtime safety.

### Operators & Expressions
- `Arithmetic`, `Comparison`, `Logical`
- `Assignment` (=, `+=`, `-=`, `&&=`, `||=`, `??=`)
- `Ternary` (`? :`)
- `Unary`, `Bitwise` (awareness and intentional use)

### **Modern Operators (Architectural Critical)**
> *Use these patterns for clean data handling in multi-tenant apps.*

- **Destructuring (Arrays)**
    - **Skipping elements**: `const [x, , z] = arr`
    - **Default Values**: `const [a=1] = []` (Prevents `undefined` errors)
    - **Swapping Variables**: `[a, b] = [b, a]` (No temp variable needed)
    - **Nested**: Unpacking arrays inside arrays.
- **Destructuring (Objects)**
    - **Renaming (Aliasing)**: `const { name: restaurantName } = obj` (Crucial for API data collisions)
    - **Default Values**: `const { menu = [] } = obj` (Safety for missing fields)
    - **Mutating Variables**: Wrap in parentheses `({a, b} = obj)`
    - **Nested**: `const { fri: { open } } = openingHours`
    - **Function Parameters**: Passing an object options bag `func({ time, address })` for order-independent arguments.
- **Spread Operator (`...`)** (Right side of **=**)
    - **Shallow Copies**: `[...arr]` or `{...obj}` (Replaces `Object.assign`)
    - **Merging**: `[...arr1, ...arr2]`
    - **Passing Arguments**: `func(...argsArray)`
    - *Note: Works on Iterables (Arrays, Strings, Sets, Maps) and Objects (ES2018).*
- **Rest Pattern (`...`)** (Left side of **=**)
    - **Destructuring**: `const [a, ...others] = arr` (Collects *remaining* elements).
    - **Functions**: `function add(...numbers)` (Accepts arbitrary arguments).
    - *Constraint: Must be the last element.*

### **Control Flow & Short Circuiting**
- `if / else`, `Switch`, `Ternary`
- **Guard Clauses** (early return): fail fast and keep business logic branches shallow.
- **Logical Operators for Control Flow**
    - **OR (`||`)**: Returns first **truthy** value. Useful for fallback, but can override valid `0`, `''`, or `false`.
    - **AND (`&&`)**: Returns first **falsy** value. (Use for **Execution**: `orderPizza && orderPizza()`).
    - **Nullish Coalescing (`??`)**: Fallback only for `null` / `undefined` (allows `0` or `''`).
- **Logical Assignment**: `&&=`, `||=`, `??=`
- **Short-circuiting**: avoid unnecessary work and protect unsafe access paths.

### Execution Model
- Scope & Scope Chain
- Hoisting & TDZ (Temporal Dead Zone)
- Execution Contexts & Call Stack

### Variables
- `const` (immutable reference), `let` (mutable), `var` (avoid)
- Destructuring, spread, and rest syntax as default data-handling tools.

### Functions
> **Intent:** Design for **predictability**. Favor explicit inputs (arguments), explicit outputs (return values), and minimal side effects over hidden state.

- Declaration vs Expression vs Arrow (plus arrow implicit return)
- **Default Parameters (ES6)**: set defaults in the function signature.
    - `function createBooking(flightNum, numPassengers = 1, price = 199) {}`
    - Defaults can be expressions: `price = 199 * 1.2`
    - Defaults can use earlier params: `price = 199 * numPassengers`
    - Order matters: a default can reference only parameters defined before it
    - Arguments are positional: you cannot skip a middle argument directly
    - To keep a default and set a later arg, pass `undefined` in the skipped position
    - ES5 fallback pattern: `param = param || default` (historical; risky when `0`, `''`, or `false` are valid)
- **Parameters**: Rest (`...args`) and destructuring for named options objects
- Spread in function calls for explicit argument mapping
- **IIFE (Immediately Invoked Function Expression)**:
    - Pattern for one-time function execution: `(function () { ... })();` or `(() => { ... })();`
    - Implementation detail: wrap function in parentheses so JavaScript treats it as an expression, then invoke it immediately.
    - Enterprise use: isolate bootstrap/setup logic so temporary variables do not leak.
    - Modern JS note: if the goal is only data privacy, block scope with `const`/`let` is often enough.
    - `var` caveat: `var` ignores block scope, so avoid it when relying on block-based encapsulation.
- **Closures**:
    - Automatic behavior (not created manually): closure is created each time a function is created.
    - A function keeps access to variables from its birthplace scope.
    - Works even after the parent execution context has finished.
    - Captures local variables and function arguments.
    - Appears in returned functions, reassigned function variables, callbacks, timers (`setTimeout`), and event handlers.
    - Name resolution rule: closed-over variables have priority over same-name variables higher in normal scope lookup.
    - Memory note: closed-over data remains reachable and cannot be garbage-collected until references to the function are gone.
- **`this` Binding**: Arrow functions inherit `this` from parent scope; Regular functions have dynamic `this`.

### Iteration & Loop Control (Use Intentionally)
- `for`, `for...of`, `for...in`, `while`, `do...while`
- `break`, `continue`
- Production use: prefer array methods / `for...of` for readability and immutability-first flows; use other loops for low-level control or performance-sensitive paths.

---

## 2. Collections & Data Transformation

### Arrays
> Choose array methods by **intent**: group, mutate, transform, search, validate, reduce, or iterate.

- **Mutating Methods ⚠️**:
    - `push`, `pop`
    - `unshift`, `shift`
    - `splice`
    - `reverse`, `sort`, `fill`
    - **Rule**: Never run these directly on React/shared/original API arrays. Copy first (`const copy = [...arr]`), then mutate the copy if needed.
- **Non-Mutating / Copy-of-origin Methods ✅**:
    - **Access & Search**: `at` (negative index support), `indexOf`, `includes`, `find`, `findIndex`, `findLast`, `findLastIndex`.
    - **Transform & Flatten**: `map` (shape transform), `filter` (subset selection), `flat`, `flatMap` (flatten nested structures).
    - **Modern Immutability (ES2023)**: `toReversed`, `toSorted`, `toSpliced`, `with` (replace at index). *Preferred for React state updates.*
    - **Logic & Reduce**: `some` (any-pass check), `every` (all-pass validation gate), `reduce` (accumulate to single value).
    - **Output**: `join` (string), `concat` (merge), `slice` (extract).
    - **Creation**: `Array.from({ length: n }, (_, i) => ...)` for programmatic data generation.
    - **Grouping**: `Object.groupBy(arr, fn)` (returns Object).
    - **Side Effects**: `forEach` (method is non-mutating, but callback side effects can still mutate external state).
- **Iteration Option**:
    - `for...of` for explicit control flow without index boilerplate
- **Enterprise usage patterns from Arrays of Objects II**:
    - Completed courses: `filter` by status without mutating original user/course records.
    - Big groups / family group: segment data with deterministic criteria (size/type flags).
    - All groups public check: `every` as a safe publish precondition.
    - Export verified users: `filter` first, then `map` to export schema.
    - Additional use cases: combine methods for tenant-safe data views while keeping source arrays immutable.
    - Performance note: Keep chains focused and readable; avoid unnecessary passes when datasets are large.

### Objects
> **Intent:** Treat objects as **immutable snapshots** of state. Prefer shallow copies (`...`) and destructuring over direct property mutation.

- **Mutating Patterns ⚠️**:
    - Reassigning properties on an existing object reference mutates shared state.
- **Non-Mutating / Copy-of-origin Methods ✅**:
    - `Object.keys`, `Object.values`, `Object.entries`, `Object.fromEntries`
    - Spread copy (`{ ...obj }`) for shallow clone and merge
    - Optional chaining (`?.`) and nullish coalescing (`??`) for safe read/default behavior
- Object literal shorthand for concise object assembly in API/UI mapping.

### Sets
- `new Set(iterable)` (Removes duplicates).
- **Mutating Methods ⚠️**: `add`, `delete`, `clear`
- **Non-Mutating / Copy-of-origin Methods ✅**:
    - `has`, `size`
    - `intersection`, `union`, `difference`, `symmetricDifference` (return new sets)
    - `isSubsetOf`, `isSupersetOf`, `isDisjointFrom` (boolean relationship checks)
- Iteration: `for...of`, `forEach`, spread (`[...set]`).

### Maps
- `new Map()` (Key-Value pairs where keys can be *any* type).
- **Mutating Methods ⚠️**: `set`, `delete`, `clear`
- **Non-Mutating / Copy-of-origin Methods ✅**:
    - `get`, `has`, `size`
    - `keys`, `values`, `entries`, `forEach` (read/iterate)
- Iteration: `for (const [key, value] of map)`.
- Conversions: `new Map(Object.entries(obj))`, `Object.fromEntries(map)`, `[...map]`.

### Strings
- Strings are immutable primitives.
- **Mutating Methods ⚠️**: none
- **Non-Mutating / Copy-of-origin Methods ✅**:
    - Search: `includes`, `indexOf`, `lastIndexOf`, `startsWith`, `endsWith`
    - Extract/normalize: `slice`, `toLowerCase`, `toUpperCase`, `trim`, `trimStart`, `trimEnd`
    - Transform: `replace`, `replaceAll`, `split`, `join`, `padStart`, `padEnd`, `repeat`, `charAt`

---

## 3. Architectural Constraints (Explicit Rules)

> **Enterprise Rules:**

1.  **Immutability by default**: Copy arrays/objects (`...`) before any mutation path.
2.  **Mutation contract clarity**: Label operations as `Mutating ⚠️` vs `Non-Mutating ✅` before using them in shared/state flows.
3.  **Fail-safe defaults**: Use parameter defaults and `??` for nullable input; use `||` only when truthy fallback behavior is intended.
4.  **Function parameter policy**:
    - Use object destructuring for functions with 3+ arguments (named options).
    - For default parameters, respect left-to-right dependency order.
    - Use `undefined` to keep a default when setting later positional arguments.
5.  **Loop policy**: Prefer array methods and `for...of`; use `for`, `for...in`, `while`, `do...while` only when control/performance requirements justify them.
6.  **Array transformation policy (React-ready)**:
    - Default to `map`, `filter`, `find`, `some`, `every`.
    - Treat `sort`, `reverse`, `splice`, `push`, `pop`, `shift`, `unshift` as unsafe on shared/state data unless operating on a copied array. *Prefer `toSorted`, `toReversed`, `toSpliced` (ES2023) where available.*
    - Use `reduce` when it materially improves clarity; avoid dense accumulator logic in core business paths.
7.  **B2B safety checks**:
    - Use `every` for all-pass workflow gates (publish/export).
    - Use `filter` + `map` for explicit, auditable export/read-model pipelines.
8.  **Purity & side effects**: Keep pure transformation functions separate from I/O or mutable side effects.
9.  **Determinism & idempotency**: Business rules should produce predictable output and tolerate safe retries.
10. **Boundary validation**: Validate and normalize input/output at module/API boundaries.
11. **Runtime awareness**: Write environment-aware code (`window` vs `process.env`) and keep module side effects intentional.
12. **Closure hygiene**: In long-lived callbacks (timers/listeners), capture only what is needed to reduce memory retention and stale state risk.

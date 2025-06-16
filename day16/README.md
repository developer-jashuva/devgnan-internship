# Day-16: JavaScript Loops and Iteration

Today’s session was focused on understanding **loops in JavaScript**—what they are, why they matter, what types are available, and how to choose the right one. We also explored the powerful `map()` function.

Loops allow us to execute a block of code repeatedly until a specified condition is false. They help us avoid writing repetitive code and are essential for automating tasks, processing arrays and objects, and enhancing code efficiency.

## ❓ Why are Loops Important?
- Automate repetitive tasks
- Process arrays and objects
- Enhance code efficiency and readability

---

## 📚 Types of Loops in JavaScript

- `for` loop – Best for known number of iterations:
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

- `while` loop – Ideal when the number of iterations is unknown:
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

- `do...while` loop – Ensures the block runs at least once:
```javascript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```

- `for...of` loop – Great for iterating over array values:
```javascript
const arr = [1, 2, 3];
for (const num of arr) {
  console.log(num);
}
```

- `for...in` loop – Used for iterating over object properties:
```javascript
const obj = {a: 1, b: 2};
for (const key in obj) {
  console.log(key, obj[key]);
}
```

### How to Choose the Right Loop?
| Situation                             | Best Loop        |
|--------------------------------------|------------------|
| Fixed number of iterations           | `for` loop       |
| Looping until a condition is false   | `while` loop     |
| Execute at least once                | `do...while`     |
| Iterating over array values          | `for...of`       |
| Iterating over object properties     | `for...in`       |

### `map()` Function
The `map()` function creates a new array by applying a function to each element of the original array:
```javascript
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2);
console.log(doubled); // [2, 4, 6]
```
It is non-mutating and perfect for data transformation.

📌 *Practicing different loop types helps in mastering flow control and writing better JavaScript code.*
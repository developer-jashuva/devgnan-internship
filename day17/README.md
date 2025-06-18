# Day-17: JavaScript Functions Explained

In today’s session, we focused on **functions**—a fundamental concept in JavaScript that helps us structure and reuse code efficiently.

## 🔍 What are Functions?
A **function** is a reusable block of code that performs a specific task. It can accept inputs (called **parameters**) and return an output.

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Sai")); // Hello, Sai!
```

## 🛠️ How to Implement Functions

### Function Declaration
```javascript
function add(a, b) {
  return a + b;
}
```

### Function Expression
```javascript
const multiply = function(a, b) {
  return a * b;
};
```

### Arrow Function
```javascript
const subtract = (a, b) => a - b;
```

## 🧱 Types of Functions

| Type                                 | Description                                 | Syntax Example                       |
|--------------------------------------|---------------------------------------------|--------------------------------------|
| Named Function                       | Has a name                                  | `function greet() {}`                |
| Anonymous Function                   | No name                                     | `const x = function() {}`           |
| Arrow Function                       | Shorter syntax, no own `this`               | `const fn = () => {}`               |
| Callback Function                    | Passed as argument to another function      | `setTimeout(() => {}, 1000)`        |
| IIFE (Immediately Invoked Function) | Runs immediately upon definition            | `(function() { ... })();`           |

## 🧠 Importance of `map()` Function

The `map()` function is a built-in method used to **transform arrays**.

```javascript
const nums = [1, 2, 3];
const squares = nums.map(n => n * n);
console.log(squares); // [1, 4, 9]
```

- Returns a **new array**
- Does **not modify** the original
- Great for **data transformation**

## 💡 Key Takeaways
- Functions promote **reusability** and **clean structure**
- Multiple ways to define functions: **declaration**, **expression**, and **arrow**
- Knowing different types helps build better logic
- `map()` is a crucial tool for modern JavaScript developers

📌 *Mastering functions is key to writing scalable and maintainable JavaScript applications.*
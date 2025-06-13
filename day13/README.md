# Day-13: Deep Dive into Global Execution Context in JavaScript

In today's session, we focused deeply on understanding the **Global Execution Context (GEC)** in JavaScript. We explored how JavaScript runs code behind the scenes, how memory is allocated, and how execution flows line-by-line.

---

## 🌍 What is the Global Execution Context (GEC)?

When a JavaScript program starts, it first enters the **Global Execution Context**. This is the default context where all global code runs.

### 🔄 Two Phases of GEC:
1. **Creation Phase**
    - Memory is allocated for variables and functions.
    - Variables declared with `var` are initialized with `undefined`.
    - `let` and `const` are hoisted but placed in the **Temporal Dead Zone (TDZ)**.
    - Function declarations are fully hoisted.

2. **Execution Phase**
    - Code is executed line by line.
    - Variable values are assigned.
    - Functions are invoked.

---

## 🧾 Code Example with GEC and Debugger

We used the following example to walk through execution line-by-line using the browser's **debugger** tool:

```javascript
var x = 10;
function greet() {
  var y = 20;
  console.log("Inside greet", x + y);
}
greet();
```

### 🔍 Step-by-Step Debugging:
- Used browser DevTools → `Sources` tab.
- Placed a `debugger;` keyword or used a breakpoint.
- Observed the **Call Stack**, **Scope**, and **Memory Allocation** in real-time.

---

## ✅ Key Takeaways
- JavaScript creates the GEC first before executing any code.
- Every function call creates a new **Function Execution Context** stacked on top of GEC.
- We can trace execution flow using the debugger.
- Understanding GEC helps explain **hoisting**, **scope**, and **execution order** clearly.

---

📌 *Today, I cleared all my doubts about how JavaScript runs under the hood using GEC and debugger tools. Feeling confident now in analyzing JS code execution!*
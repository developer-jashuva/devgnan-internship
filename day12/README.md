# Day-12: Understanding `let`, `var`, and `const` in JavaScript

In this session, we explored the **scope**, **global execution context**, and **memory allocation** differences between `let`, `var`, and `const` in JavaScript with examples.

---

## 🧠 Scope Comparison Table

| Keyword | Scope    | Hoisted | Re-declarable | Re-assignable | Temporal Dead Zone |
| ------- | -------- | ------- | ------------- | ------------- | ------------------ |
| `var`   | Global   | ✅ Yes   | ✅ Yes         | ✅ Yes         | ❌ No               |
| `let`   | Block    | ✅ Yes   | ❌ No          | ✅ Yes         | ✅ Yes              |
| `const` | Block    | ✅ Yes   | ❌ No          | ❌ No          | ✅ Yes              |

---

## 🌍 Global Execution Context (GEC)

When JavaScript runs, it enters the **Global Execution Context**, which has two phases:

1. **Creation Phase (Memory Allocation)**
2. **Execution Phase**

---

## 🧾 Code Example

```javascript
console.log(a); // undefined
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

var a = 10;
let b = 20;
const c = 30;

function test() {
    var x = 100;
    let y = 200;
    const z = 300;

    if (true) {
        var x = 500; // Global-scoped
        let y = 600; // Block-scoped
        const z = 700; // Block-scoped

        console.log(x); // 500
        console.log(y); // 600
        console.log(z); // 700
    }

    console.log(x); // 500
    console.log(y); // 200
    console.log(z); // 300
}

test();
```

---

## 🧰 Memory Allocation (Creation Phase)

During memory allocation:

* `var` is hoisted and initialized with `undefined`.
* `let` and `const` are hoisted but not initialized.
* Accessing `let` or `const` before declaration results in a **ReferenceError** due to **Temporal Dead Zone (TDZ)**.

| Variable    | Memory Slot | Initialization |
| ----------- | ----------- | -------------- |
| `a` (var)   | `undefined` | ✅ Yes          |
| `b` (let)   | TDZ         | ❌ No           |
| `c` (const) | TDZ         | ❌ No           |

---

## 🧪 Scope Illustration

```javascript
if (true) {
    var a = 1;
    let b = 2;
    const c = 3;
}

console.log(a); // 1
console.log(b); // ❌ Error: b is not defined
console.log(c); // ❌ Error: c is not defined
```

---

## ✅ Best Practices

* Use `let` when the value will change.
* Use `const` for constants (recommended default).
* Avoid `var` in modern JavaScript due to its function-scoping and hoisting quirks.

---

📌 *Understanding these differences is essential to writing bug-free and predictable JavaScript code.*

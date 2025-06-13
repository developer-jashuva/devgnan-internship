# Day-11: Understanding `let`, `var`, and `const` in JavaScript

In this session, we explored the **scope**, **global execution context**, and **memory allocation** differences between `let`, `var`, and `const` in JavaScript with examples.

---

## 🧠 Scope Comparison Table

| Keyword | Scope         | Hoisted | Re-declarable | Re-assignable | Temporal Dead Zone |
|---------|---------------|---------|----------------|----------------|--------------------|
| `var`   | Function       | ✅ Yes  | ✅ Yes         | ✅ Yes         | ❌ No              |
| `let`   | Block          | ✅ Yes  | ❌ No          | ✅ Yes         | ✅ Yes             |
| `const` | Block          | ✅ Yes  | ❌ No          | ❌ No          | ✅ Yes             |

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
        var x = 500; // Function-scoped
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

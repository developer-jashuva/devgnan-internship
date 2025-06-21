# Day-20: JavaScript Events and Handling

Today we explored the concept of **events in JavaScript**—how they work, why they’re important, and how to handle them effectively in real-world applications.

---

## 🔔 What are Events in JavaScript?

Events are **interactions** or **occurrences** that happen in the browser and can be detected by JavaScript. They include user actions (like clicks or key presses), browser actions (like page loading), and more.

Example:

```javascript
<button onclick="alert('Clicked!')">Click Me</button>
```

---

## ❓ Why Use Events?

* To make web pages **interactive**
* To **respond to user input** in real time
* To **validate forms** before submission
* To trigger **animations, modals, popups** etc.

---

## 🧾 Common Types of Events

| Event Type  | Description                    |
| ----------- | ------------------------------ |
| `click`     | When an element is clicked     |
| `mouseover` | When the mouse hovers over     |
| `keydown`   | When a key is pressed          |
| `submit`    | When a form is submitted       |
| `load`      | When the page finishes loading |
| `change`    | When input value changes       |

---

## 🛠️ How to Handle Events

### 1. HTML Event Attributes

```html
<button onclick="sayHi()">Say Hi</button>
```

### 2. JavaScript `addEventListener()`

```javascript
const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  alert("Button Clicked");
});
```

### 3. Event Object Usage

```javascript
btn.addEventListener("click", (event) => {
  console.log(event.target);
});
```

---

## ⚙️ Event Bubbling and Capturing

* **Event Bubbling**: Event starts from the target element and bubbles up to the parent.
* **Event Capturing**: Event goes from the root to the target (rarely used).

Example:

```javascript
div.addEventListener("click", () => console.log("DIV clicked"));
button.addEventListener("click", () => console.log("BUTTON clicked"));
```

---

## 💡 Key Takeaways

* Events are crucial for building **interactive** websites.
* Use `addEventListener()` for clean and flexible event handling.
* Understand event flow to debug and build better UI experiences.

---

📌 *Mastering events is key to making dynamic and user-driven web applications.*

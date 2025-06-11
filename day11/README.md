                        Day-11
Javascript Primitive Data Types And Scope of variables

What are Variables?
Variables are like boxes where we store information. Think of them as containers with labels.
// Creating variables
let userName = "John";
let userAge = 25;
let isLoggedIn = true;
console.log("Name:", userName);
console.log("Age:", userAge);
console.log("Logged in:", isLoggedIn);


Primitive Data Types (Basic Types)

1. String (Text)
    let firstName = "Rahul";
    let lastName = "Sharma";
    let email = "rahul@gmail.com";
    console.log("Full name:", firstName + " " + lastName);
2. Number
    let age = 22;
    let price = 299.99;
    let temperature = -5;
    console.log("Age:", age);
    console.log("Price: ₹", price);
3. Boolean (True/False)
    let isStudent = true;
    let hasJob = false;
    let isAdult = age >= 18;
    console.log("Is student?", isStudent);
    console.log("Is adult?", isAdult);
4. Undefined & Null
    let phoneNumber; // undefined
    let middleName = null; // intentionally empty
    console.log("Phone:", phoneNumber);
    console.log("Middle name:", middleName);


Part 3: Understanding Scopes

What is Scope?

Scope means "where can I use this variable?" Think of it like rooms in a house.

Global Scope (Living Room - Everyone Can Access)

let websiteName = "MyApp"; // Global variable
function showWelcome() {
console.log("Welcome to", websiteName); // Can use global variable
}

function showFooter() {
console.log("© 2024", websiteName); // Can use global variable
}


Local Scope (Private Room - Only People Inside Can Access)

function loginUser() {
let username = "john123"; // Local variable
let password = "secret"; // Local variable
console.log("Logging in:", username);
// username and password only work inside this function
}
// console.log(username); // ❌ ERROR! Can't access outside function


Block Scope (Bathroom - Even More Private)

if (true) {
let message = "Inside if block"; // Block scope
console.log(message); // ✅ Works here
}
// console.log(message); // ❌ ERROR! Can't access outside block

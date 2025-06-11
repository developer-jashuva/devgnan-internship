//Exercise 1: Mess Bill Calculator

let ricePrice = 50;
let sambarPrice = 30;
let samPrice = 25;
let quantity = 2;

let totalRice = ricePrice * quantity;
let totalSambar = sambarPrice * quantity;
let totalRassam =samPrice * quantity;
let grandTotal = totalRice + totalSambar + totalRassam;

console.log("Rice cost:", totalRice + " rupees");
console.log("Sambar cost:", totalSambar + " rupees");
console.log("Rassam cost:", totalRassam + " rupees");
console.log("Total mess bill: ₹", grandTotal + " - konchem ekkuva ayyindi!");


//Exercise 2: Student Profile (Andhra University Style)

// Student profile kosam variables create cheddaam
let studentName = "Priya Sharma";
let studentAge = 20;
let studentEmail = "priya.sharma@gmail.com";
let isEnrolled = true;
let collegeName = "Andhra University";
let courseName = "Computer Science";
let hometown = "Vijayawada";
let favoriteFood = "Pulihora";

// Profile display cheddaam
console.log("=== STUDENT PROFILE - ANDHRA STYLE ===");
console.log("Name:", studentName);
console.log("Age:", studentAge + " years - young aa!");
console.log("Email:", studentEmail);
console.log("College:", collegeName + " - mana pride!");
console.log("Course:", courseName);
console.log("Native place:", hometown + " - Krishna district!");
console.log("Favorite food:", favoriteFood + " - typical Andhra taste!");
console.log("Enrolled aa?", isEnrolled);
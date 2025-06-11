// 1. Create variables for:
// • Restaurant name
// • Food item name
// • Price
// • Quantity
// • Customer name
// • Is delivery needed (true/false)
// 2. Calculate total price (price × quantity)
// 3. Show order summary using console.log
// 4. Use proper scopes (create functions for different parts)


let Restaurant ="Domino's Pizza";
let CustomerName="jashuva";
let foodItem ="Pizza" ;
let Price = 420;

let Quantity =2 ;
let IsDeliveryNeeded = true;
let totalPrice;



function orderSummery(totalPrice) {
    console.log("=== ORDER SUMMARY ===");
    console.log("Restarent:",Restaurant);
    console.log("Customer:",CustomerName);
    console.log("Food Item:",foodItem);
    console.log("Quantity:",Quantity);
    console.log("Price per Item:",Price);
    console.log("Total Price:",totalPrice);
    console.log("Is Delivery Needed:",IsDeliveryNeeded);
    
    
}
function calculateTotalPrice(Price,Quantity) {
    totalPrice=Price*Quantity;

    orderSummery(totalPrice);
}

calculateTotalPrice(Price,Quantity);

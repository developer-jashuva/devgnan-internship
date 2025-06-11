let Restaurant ="Venkatesh Bhattu";
let CustomerName="mesh Naidu garu";
let foodItem ="Mutton Biryani - full spicy!" ;
let Price = 280;

let Quantity =2 ;
let IsDeliveryNeeded = "Ha kavali";
let totalPrice;
let DeliveryAdress=" MVP Colony - beach side area";
let DeliveryCharges= 40;
let EstimatedTime= "45 minutes - traffic batti depend avuthundhi";

function orderSummery(totalPrice) {
    console.log("=== ORDER SUMMARY - ANDHRA STYLE ===");
    console.log("Restarent:",Restaurant);
    console.log("Customer:",CustomerName);
    console.log("Food Item:",foodItem);
    console.log("Quantity:",Quantity);
    console.log("Price per Item:",Price);
    console.log("SubTotal:",totalPrice);
    console.log("Delivery To:",DeliveryAdress);
    console.log("Deliery Charges:",DeliveryCharges);
    console.log("Total:",totalPrice+DeliveryCharges);
    console.log("Delivery Kavala:",IsDeliveryNeeded);
    console.log("Estmated Time:",EstimatedTime);
    
    
    
}
function calculateTotalPrice(Price,Quantity) {
    totalPrice=Price*Quantity;

    orderSummery(totalPrice);
}

calculateTotalPrice(Price,Quantity);

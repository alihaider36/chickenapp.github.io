// Make a program that takes input from the user as a quantity of chicken whose price is 500 per kg 
// this program gives the price according to the quantity of user requirement.

// let userInput = prompt('Quantity of Chicken');
// let userInputResult = userInput;
// let chickenPrice = 500;

// document.write("Total Price is " + eval(chickenPrice * userInputResult));


// Write a program that takes two input from the user of which one is the price per kg chicken and the other is the
// quantity of chicken in grams and then calculate it which will result in the price that what user have to pay
// according to the price and quantity he decided.

let userDecidePrice = prompt('Price Per KG of Chicken');
let userDecideQuantity = prompt('Quantity of Chicken');
const chickenTotalPrice = eval(userDecidePrice * userDecideQuantity);
document.write("Total Price is " + chickenTotalPrice);
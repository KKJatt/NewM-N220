const itemPrice = 40.99
let totalAfterTax = 0
let discountedTotalAfterTax = 0

// I made the itemPrice be const because that price will not change as that's the self price
// I made the totalAfterTax and discountedTotalAfterTax both let because both of them will change after calculating

const Discounted = itemPrice > 50;

// I also made Discounted = a const because this boolean will not change as 50 is the set price for an item to be discounted.


totalAfterTax = itemPrice * (1+0.07)
discountedTotalAfterTax = totalAfterTax * (1-0.10)

console.log("The total after tax of your item is $");
console.log("Is your item available for discount: " + Discounted);
console.log("If your item is available for discount, then the total after discount and tax is $" + (discountedTotalAfterTax).toFixed(2));





// appropriately declare variables for the:
// item price
// total after tax
// discounted total after tax
// add comments explain why you chose the declaration keywords that you uses (var, let, const)
// send a message to console for the:
// total after tax
// a boolean showing if the item qualifies for the discount
// discounted total after tax
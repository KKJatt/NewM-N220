const radius = 6;
let area = 0;
let perimeter = 0;

// I chose const for the radius because it will not be changing
// I chose let for both the area and perimeter because those will both be changing when using the formulas to find the answers


area = (Math.PI * (radius*radius)).toFixed(2);
perimeter = (2 * Math.PI * radius).toFixed(2);

console.log("The area of the circle is: " + area);
console.log("The perimeter of the circle is: " + perimeter);
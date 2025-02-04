const applePrice = .49;

let pickedApples = 4;

//went and picked some more apples
pickedApples += 10;

//dropped a few on the way
pickedApples -= 4;

const totalForApples = applePrice*pickedApples;

console.log("Cost of apples:" , totalForApples);

console.log("too many apples", pickedApples>5)

// ate some apples then dropped the rest
pickedApples-=6;

console.log("too many apples",pickedApples>5)

let rememberRouteHome = false;

console.log("good to go home", pickedApples>5 && rememberRouteHome);

let haveAMap = true;

console.log("good to go home", rememberRouteHome || haveAMap);

console.log("is my total for apples a number?", typeof totalForApples)

console.log("String of 5:", String(5), 5)

let myAdress = "413";

myAdress +=" Peach"+" St";

console.log("My adress:" ,myAdress);

console.log("Street name has st:", myAdress.toLowerCase().includes("st"));

console.log("My address,", myAdress.replace("St","Street"));

console.log("Karanjot",length)

let myAge = 76;

myAge = Number(myAge);

myAge += 5/12;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday:", Math.ceil(myAge));

console.log("my favorite number:", Math.random()*100);
function letsGo() {
  console.log("FUNction Time!");
}

letsGo();
//this is how to set default value in a function
function calculateTotal(itemPrice, taxRate = 0.07, discountRate = 0.1) {
  //if too many if statements, use switch statement
  const groupsOfTwenty = Math.floor(itemPrice / 20);

  switch (groupsOfTwenty) {
    case 0:
        discount = 0;
        break;
    case 1:
      return "Small Discount";
    case 2:
      return "Slightly larger discount";
    case 3:
      return "Large discount";
    default:
      return "Huge Discount";
  }

  //bottom code is same as top

  if (itemPrice > 100) {
    return itemPrice * (i + taxRate) * (1 - discountRate * 2);
  } else if (itemPrice > 80) {
    return itemPrice * (1 + taxRate) * (1 - discountRate);
  } else if (itemPrice > 60) {
    return itemPrice * (1 + taxRate) * (1 - discountRate);
  } else if (itemPrice > 40) {
    return itemPrice * (1 + taxRate) * (1 - discountRate);
  } else if (itemPrice > 20) {
    return itemPrice * (1 + taxRate) * (1 - discountRate);
  } else {
    return itemPrice * (1 + taxRate);
  }
}

console.log("Kidney = $20, Tax Rate = 40%: ", calculateTotal(20, 0.4));

const items = [18, 24, 17, 3];

function showItems() {
  const newSection = document.createElement("section");
  newSection.innerHTML = "<h4>Items</h4>";

  let total = 0;

  for (let i = 0; i < items.length; i++) {
    newSection.innerHTML += "<p>$" + items[i] + "</p>";
    total += items[i];
  }

  newSection.innerHTML += "<hr />";

  newSection.innerHTML += "<p>$" + calculateTotal(total, 0.07) + "</p>";

  document.body.appendChild(newSection);
}

showItems();

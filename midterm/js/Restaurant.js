const menuItemListRef = document.querySelector("#menu");
const cartTableRef = document.querySelector("#cart");
const noItemsRowRef = document.querySelector("#no-items");

const menuItems = [
  "Hamburger",
  "Cheeseburger",
  "Cheese Pizza",
  "Pepperoni Pizza",
  "Sausage Pizza",
  "Caesar Salad",
  "Fries",
  "Onion Rings",
];

const menuItemPrices = [
  "2.99",
  "3.99",
  "3.99",
  "4.99",
  "4.99",
  "3.99",
  "1.99",
  "2.49",
];

const cart = [];

function updateNoItems() {
  if (cart.length > 0) {
    noItemsRowRef.style.display = "none";
  } else {
    noItemsRowRef.style.display = "block";
  }
}

function showCart(){
    // re adds the header row everytime to keep it looking nice, copied from index.html file
    cartTableRef.innerHTML =
      "<tr>" +
      "<th>Item Name</th>" +
      "<th>Price</th>" +
      "<th>Special Request</th>" +
      "<th>Actions</th>" +
      "</tr>";

    if(cart.length === 0){ //if empty add no items
        cartTableRef.innerHTML += "<tr id='no-items'><td colspan='4'>No items in cart</td></tr>";
    }else{
      //else add the row with the 4 categories
      for (let i = 0; i < cart.length; i++) {
        // cartTableRef.innerHTML +=
        // "<tr>" +
        // "<td>" + cart[i].name + "</td>" +
        // "<td>" + cart[i].price + "</td>" +
        // "<td>" + "Special Request" + "</td>" +
        // "<td>" + "<button>" + "-" +"</button>" + "</td>"
        // "</tr>"

        const newTr = document.createElement("tr");
        const nameTD = document.createElement("td");
        const priceTD = document.createElement("td");
        const specialTD = document.createElement("td");
        const actionTD = document.createElement("td");

        nameTD.innerText = cart[i].name;
        priceTD.innerText = "$" + cart[i].price;

        // the customer special section
        const specialInput = document.createElement("textarea");
        specialInput.value = "";
        specialInput.onchange = function () {
          // when someone adds a special request it actually changes the data
          cart[i].specialRequest = specialInput.value;
        };
        specialTD.appendChild(specialInput);

        // from here a button is added with logic to put under the actions header section
        const removeBtn = document.createElement("button");

        removeBtn.innerText = "-";
        actionTD.onclick = function () {
          cart.splice(i, 1);
          updateNoItems();
          showCart();
        };

        actionTD.appendChild(removeBtn);

        newTr.appendChild(nameTD);
        newTr.appendChild(priceTD);
        newTr.appendChild(specialTD);
        newTr.appendChild(actionTD);

        cartTableRef.appendChild(newTr);
      }
      // after everything is done, now it will show the price and add it up
      let total = 0;
      for (let i = 0; i < cart.length; i++) {
        total += cart[i].price;
      }

      const totalRow = document.createElement("tr");
      const totalNameTD = document.createElement("td");
      totalNameTD.innerText = "Total";

      const totalTD = document.createElement("td");
      totalTD.colspan = "3";
      totalTD.innerText = "$" + total;
      totalRow.appendChild(totalNameTD);
      totalRow.appendChild(totalTD);
      cartTableRef.appendChild(totalRow);
    }
    
}


function addItemToCart(e){
    const name = e.target.dataset.name;
    const price = e.target.dataset.price;
    // makes an object because there is 4 things with each item
    const cartItem = {
      name: name,
      price: price,
      specialRequest: "",
      additionalInfo: "",
    };

    cart.push(cartItem);
    updateNoItems();
    showCart();
}

// add items into the menu list
for (let i = 0; i < menuItems.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = menuItems[i];

    const newBtn = document.createElement("button");
    newBtn.innerText = "+";
    newBtn.dataset.name = menuItems[i];
    newBtn.dataset.price = menuItemPrices[i]

    newBtn.onclick = addItemToCart;
    newLi.appendChild(newBtn);
    menuItemListRef.appendChild(newLi);
}

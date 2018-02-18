var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = {};
 let itemPrice = Math.floor(Math.random() * (100 - 1)) + 1;
 itemName[item] = itemPrice;
 console.log(`${item} has been added to your cart.`);
 cart.push(itemName);
 return cart;
}

function viewCart() {
  if (cart.length === 0) {
    console.log('Your shopping cart is empty.');
  }

  const itemsInCart = [];

  for (let i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i]);
    var nameOfItem = keys[0];
    var cost = cart[i][nameOfItem];

    if (i > 0 && i === cart.length - 1) {
      itemsInCart.push(`and ${nameOfItem} at $${cost}`);
    } else {
      itemsInCart.push(`${nameOfItem} at $${cost}`);
    }
  }

  if (cart.length === 2) {
    console.log(`In your cart, you have ${itemsInCart.join(' ')}.`);
  } else {
    console.log(`In your cart, you have ${itemsInCart.join(', ')}.`);
  }

}

function total() {
  // write your code here
  var totalCost = 0;

  for (let i = 0; i < cart.length; i++) {
    var keys = Object.keys(cart[i]);
    var nameOfItem = keys[0];
    var cost = cart[i][nameOfItem];

    totalCost = totalCost + cost;
  }
  console.log(totalCost);
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

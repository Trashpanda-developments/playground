/* Make a webshop for apple-pies. provide 10 unique apple-pies a shoppingcart to buy the apple-pies and make it user interactable. */

var applePies = [];
var shoppingCart = [];
function ApplePie(name, price, description) {
  this.name = name;
  this.price = price;
  this.description = description;
}
function ShoppingCart() {
  this.items = [];
  this.totalPrice = 0;
}
ShoppingCart.prototype.addItem = function(item) {
  this.items.push(item);
  this.totalPrice += item.price;
}
ShoppingCart.prototype.removeItem = function(item) {
  var index = this.items.indexOf(item);
  if (index > -1) {
    this.items.splice(index, 1);
    this.totalPrice -= item.price;
  }
}
function createApplePies() {
  applePies.push(new ApplePie('Apple Pie 1', 10, 'This is the first apple pie'));
  applePies.push(new ApplePie('Apple Pie 2', 20, 'This is the second apple pie'));
  applePies.push(new ApplePie('Apple Pie 3', 30, 'This is the third apple pie'));
  applePies.push(new ApplePie('Apple Pie 4', 40, 'This is the fourth apple pie'));
  applePies.push(new ApplePie('Apple Pie 5', 50, 'This is the fifth apple pie'));
  applePies.push(new ApplePie('Apple Pie 6', 60, 'This is the sixth apple pie'));
  applePies.push(new ApplePie('Apple Pie 7', 70, 'This is the seventh apple pie'));
  applePies.push(new ApplePie('Apple Pie 8', 80, 'This is the eighth apple pie'));
  applePies.push(new ApplePie('Apple Pie 9', 90, 'This is the ninth apple pie'));
  applePies.push(new ApplePie('Apple Pie 10', 100, 'This is the tenth apple pie'));
}
function createApplePieList() {
  var applePieList = document.createElement('ul');
  applePies.forEach(function(applePie) {
    var applePieListItem = document.createElement('li');
    applePieListItem.innerHTML = applePie.name + ' - ' + applePie.price + ' - ' + applePie.description;
    applePieListItem.addEventListener('click', function() {
      shoppingCart.addItem(applePie);
      updateShoppingCart();
    });
    applePieList.appendChild(applePieListItem);
  });
  document.body.appendChild(applePieList);
}
function createShoppingCart() {
  var shoppingCartList = document.createElement('ul');
  shoppingCartList.id = 'shoppingCartList';
  document.body.appendChild(shoppingCartList);
}
function updateShoppingCart() {
  var shoppingCartList = document.getElementById('shoppingCartList');
  while (shoppingCartList.firstChild) {
    shoppingCartList.removeChild(shoppingCartList.firstChild);
  }
  shoppingCart.items.forEach(function(item) {
    var shoppingCartListItem = document.createElement('li');
    shoppingCartListItem.innerHTML = item.name + ' - ' + item.price + ' - ' + item.description;
    shoppingCartListItem.addEventListener('click', function() {
      shoppingCart.removeItem(item);
      updateShoppingCart();
    });
    shoppingCartList.appendChild(shoppingCartListItem);
  });
  var shoppingCartTotalPrice = document.createElement('div');
  shoppingCartTotalPrice.innerHTML = 'Total price: ' + shoppingCart.totalPrice;
  shoppingCartList.appendChild(shoppingCartTotalPrice);
}
createApplePies();
createApplePieList();
createShoppingCart();
shoppingCart = new ShoppingCart();
updateShoppingCart();

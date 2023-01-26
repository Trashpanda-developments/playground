/* Make a webshop for apple-pies. provide 10 unique apple-pies a shoppingcart to buy the apple-pies and make it user interactable. */

let applePies = [];
let shoppingCart = [];
class ApplePie {
  constructor(name, price, size, spijs, baked, description) {
    this.name = name;
    this.price = price;
    this.size = size;
    this.spijs = spijs;
    this.baked = baked;
    this.description = description;
  }
}
class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }
  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  }
  removeItem(item) {
    let index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.totalPrice -= item.price;
    }
  }
}
function createApplePies() {
  applePies.push(new ApplePie('Apple Pie 1', 10, 'medium', 'spijs', 'gebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 20, 'medium', 'spijs', 'ongebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 30, 'medium', 'geen spijs', 'gebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 40, 'medium', 'geen spijs', 'ongebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 50, 'large', 'spijs', 'gebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 60, 'large', 'spijs', 'ongebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 70, 'large', 'geen spijs', 'gebakken', ''));
  applePies.push(new ApplePie('Apple Pie 1', 80, 'large', 'geen spijs', 'ongebakken', ''));

}
function createApplePieList() {
  let applePieList = document.createElement('ul');
  applePies.forEach(function(applePie) {
    let applePieListItem = document.createElement('li');
    applePieListItem.innerHTML = applePie.name + ' - ' + applePie.price + ' - ' + applePie.size + ' - ' + applePie.spijs + ' - ' + applePie.baked + ' - ' + applePie.description;
    applePieListItem.addEventListener('click', function() {
      shoppingCart.addItem(applePie);
      updateShoppingCart();
    });
    applePieList.appendChild(applePieListItem);
  });
  document.body.appendChild(applePieList);
}
function createShoppingCart() {
  let shoppingCartList = document.createElement('ul');
  shoppingCartList.id = 'shoppingCartList';
  document.body.appendChild(shoppingCartList);
}
function updateShoppingCart() {
  let shoppingCartList = document.getElementById('shoppingCartList');
  while (shoppingCartList.firstChild) {
    shoppingCartList.removeChild(shoppingCartList.firstChild);
  }
  shoppingCart.items.forEach(function(item) {
    let shoppingCartListItem = document.createElement('li');
    shoppingCartListItem.innerHTML = item.name + ' - ' + item.price + ' - ' + item.size + ' - ' + item.spijs + ' - ' + item.baked + ' - ' + item.description;
    shoppingCartListItem.addEventListener('click', function() {
      shoppingCart.removeItem(item);
      updateShoppingCart();
    });
    shoppingCartList.appendChild(shoppingCartListItem);
  });
  let shoppingCartTotalPrice = document.createElement('div');
  shoppingCartTotalPrice.innerHTML = 'Total price: ' + shoppingCart.totalPrice;
  shoppingCartList.appendChild(shoppingCartTotalPrice);
}
createApplePies();
createApplePieList();
createShoppingCart();
shoppingCart = new ShoppingCart();
updateShoppingCart();

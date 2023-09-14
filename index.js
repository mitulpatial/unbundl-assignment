"use strict";

let cart = [];
let total = 0;
let productCount = 0;

function addToCart(product, price) {
  if (cart.length < 8) {
    cart.push({ product, price });
    total += price;
    productCount++;
    updateCart();
  } else {
    alert("Bundle limit reached (8 chocolates)");
  }
}

function removeFromCart(index) {
  const removed = cart.splice(index, 1);
  total -= removed[0].price;
  productCount--;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const totalPrice = document.getElementById("total-price");
  const productCountElement = document.getElementById("product-count");

  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const listItem = document.createElement("div");
    listItem.innerHTML = `
    <div class="item-desc">${item.product}</div>
    <div class="item-price">₹${item.price}</div>
    <button class="remove-btn-style" onclick="removeFromCart(${index})">Remove</button>`;
    cartList.appendChild(listItem);
  });

  totalPrice.textContent = total.toFixed(2);
  productCountElement.textContent = productCount;
}

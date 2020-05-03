"use strict";

const shoppingList = document.querySelector(".shopping-list");

fetch("./shopping.json")
  .then((response) => response.json())
  .then((json) => {
    json.forEach((el) => {
      shoppingList.innerHTML += `
        <li class="shopping-item ${el.color}-${el.type}">
            <img src="${el.img}" alt="${el.color} ${el.type}">
            <span>${el.gender}, ${el.size} size</span>
        </li>
      `;
    });
  })
  .catch((error) => console.error(error));

function sortByCase(sort) {
  const shoppingItem = shoppingList.querySelectorAll("li");
  shoppingItem.forEach((el) => {
    el.className.includes(sort)
      ? el.classList.remove("blind")
      : el.classList.add("blind");
  });
}

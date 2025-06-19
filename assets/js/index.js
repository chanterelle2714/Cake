console.log("РАботает");

let CatalogList = document.querySelector(".catalog-list");

console.log(CatalogList);

let cakes = [
  {
    name: "Торт Медовик",
    price: 270,
    descript:
      "Торт Наполион-это классичекский французский десерт, состоящий из множество тонких слоев теста и крема",
    image: "Медовик.jfif",
  },
  {
    name: "Торт Наполион",
    price: 140,
    descript:
      "Торт Наполион-это классичекский французский десерт, состоящий из множество тонких слоев теста и крема.,",
    image: "наполион.jfif",
  },
];
cakes.forEach((cake) => {
  CatalogList.insertAdjacentHTML(
    "beforeend",
    ` <article class="catalog-item">
            <img src="./assets/images/${cake.image}" alt="" />
            <div class="item-content">
              <div class="item-info">
                <h3>${cake.name}</h3>
                <p>${cake.descript}</p>
              </div>
              <p class="item-price">${cake.price}/штука</p>
              <button class="item-bth-order">Купить</button>
            </div>
          </article>`
  );
});

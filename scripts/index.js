import { data } from "../scripts/dbCard.js";

const createCard = (array) => {
  const sectionCard = document.createElement("section");
  const divCard = document.createElement("div");
  const imgCard = document.createElement("img");
  const spanCartegoryCard = document.createElement("span");
  const h2Card = document.createElement("h2");
  const pCard = document.createElement("p");
  const spanPriceCard = document.createElement("span");
  const buttonCard = document.createElement("button");

  sectionCard.classList.add("card__itens");
  divCard.classList.add("card__img");
  spanCartegoryCard.classList.add("card__category");
  spanCartegoryCard.classList.add("btn-card");
  spanPriceCard.classList.add("card__price");

  sectionCard.id = array.id;
  spanCartegoryCard.innerHTML = array.tag;
  imgCard.src = array.img;
  h2Card.innerHTML = array.nameItem;
  pCard.innerHTML = array.description;
  spanPriceCard.innerHTML = `R$ ${array.value}`;
  buttonCard.innerHTML = array.addCart;

  divCard.append(imgCard);
  sectionCard.append(
    divCard,
    spanCartegoryCard,
    h2Card,
    pCard,
    spanPriceCard,
    buttonCard
  );

  return sectionCard;
};

const renderCards = (array) => {
  const section = document.querySelector(".card__container");

  section.innerHTML = "";

  array.forEach((element) => {
    const card = createCard(element);

    section.appendChild(card);
  });
};

renderCards(data);
createCard(data);

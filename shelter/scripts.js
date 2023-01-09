import {pet} from "./pets.js";

const menuBrg = document.querySelector('.header__burger');
const nav = document.querySelector('.header__navigation');
const logo = document.querySelector('.logo');
const body = document.querySelector('body');

menuBrg.addEventListener('click', function () {
  menuBrg.classList.toggle('active');
  nav.classList.toggle('active');
  logo.classList.toggle('active');
  document.querySelector('body').classList.toggle('lock');
});

//Popup
const popupBg = document.querySelector('.popup__body');
const openPopupButtons = document.querySelectorAll('.button-border');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close');
const popupLayout = document.querySelector('.popup__layout');
const popupPets = document.querySelector('.popup__pets');
let popupNav = popupPets.childNodes[7];

openPopupButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    let pets = pet.find(item => item.id == button.parentNode.id);
    popupLayout.childNodes[1].src = `${pets.img}`;
    popupPets.childNodes[1].innerHTML = `${pets.name}`;
    popupPets.childNodes[3].innerHTML = `${pets.type} - ${pets.breed}`;
    popupPets.childNodes[5].innerHTML = `${pets.description}`;
    popupNav.childNodes[1].innerHTML = `${pets.age}`;
    popupNav.childNodes[3].innerHTML = `${pets.inoculations}`;
    popupNav.childNodes[5].innerHTML = `${pets.diseases}`;
    popupNav.childNodes[7].innerHTML = `${pets.parasites}`;
    e.preventDefault();
    popupBg.classList.add('open');
    popup.classList.add('open');
  });
});

closePopupButton.addEventListener('click', () => {
  popupBg.classList.remove('open');
  popup.classList.remove('open');
});

document.addEventListener('click', (e) => {
  if (e.target === popupBg) {
    popupBg.classList.remove('open');
    popup.classList.remove('open');
  }
});

//Slider
const buttonLeft = document.querySelector('.button_left');
const buttonRight = document.querySelector('.button_right');
const cards = document.querySelector('.cards');
const cardsFour = document.querySelector('.cards-foure');
const cardsThree = document.querySelector('.cards-three');

buttonLeft.addEventListener('click', (e) => {
  function randomArr (petsArr = pet.map(item => item.id)) {
    let random = Math.floor(Math.random()*petsArr.length);
    let result = petsArr[random];
    let pets = pet.find(item => item.id == result);
    return pets;
  }
  let point = randomArr();
  cards.id = `${point.id}`;
  cards.childNodes[1].src = `${point.img}`;
  cards.childNodes[3].innerHTML = `${point.name}`;
  point = randomArr();
  cardsFour.id = `${point.id}`;
  cardsFour.childNodes[1].src = `${point.img}`;
  cardsFour.childNodes[3].innerHTML = `${point.name}`;
  point = randomArr();
  cardsThree.id = `${point.id}`;
  cardsThree.childNodes[1].src = `${point.img}`;
  cardsThree.childNodes[3].innerHTML = `${point.name}`;
  e.preventDefault();
});

buttonRight.addEventListener('click', (e) => {
  function randomArr (petsArr = pet.map(item => item.id)) {
    let random = Math.floor(Math.random()*petsArr.length);
    let result = petsArr[random];
    let pets = pet.find(item => item.id == result);
    return pets;
  }
  let point = randomArr();
  cards.id = `${point.id}`;
  cards.childNodes[1].src = `${point.img}`;
  cards.childNodes[3].innerHTML = `${point.name}`;
  point = randomArr();
  cardsFour.id = `${point.id}`;
  cardsFour.childNodes[1].src = `${point.img}`;
  cardsFour.childNodes[3].innerHTML = `${point.name}`;
  point = randomArr();
  cardsThree.id = `${point.id}`;
  cardsThree.childNodes[1].src = `${point.img}`;
  cardsThree.childNodes[3].innerHTML = `${point.name}`;
  e.preventDefault();
});

let menuBrg = document.querySelector('.header__burger-pets');
let nav = document.querySelector('.header__navigation');
let logo = document.querySelector('.logo');

menuBrg.addEventListener('click', function(){
    menuBrg.classList.toggle('active');
    nav.classList.toggle('active');
    logo.classList.toggle('active');
})
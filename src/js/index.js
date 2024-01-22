import '../scss/style.scss'

//button show all hide
/*
let buttonShow = document.querySelector('.button-show-hide')
let brands = document.querySelector('.brands')
let brandNames = document.querySelector('.brand-names')
let arrow = document.querySelector('.show-hide-arrow')

let showAll = function () {
  brands.classList.toggle('full')
  brandNames.classList.toggle('full')
  buttonShow.classList.toggle('show-hide')
  buttonShow.classList.toggle('button-show-hide')
  arrow.classList.toggle('show-arrow')
  arrow.classList.toggle('hide-arrow')
}

buttonShow.addEventListener('click', showAll)*/
//button show-all-hide--swiper--2

let buttonShow2 = document.querySelector('.button-show-hide--2')
let brandNames2 = document.querySelector('.swiper-wrapper--3')
let arrow2 = document.querySelector('.show-hide-arrow--2')

let showAll2 = function () {
  brandNames2.classList.toggle('full--2')
  buttonShow2.classList.toggle('show-hide--2')
  buttonShow2.classList.toggle('button-show-hide--2')
  arrow2.classList.toggle('show-arrow--2')
  arrow2.classList.toggle('hide-arrow--2')
}

buttonShow2.addEventListener('click', showAll2)

let buttonShow = document.querySelector('.button-show-hide')
//let brands = document.querySelector('.swiper')
let brandNames = document.querySelector('.swiper-wrapper')
let arrow = document.querySelector('.show-hide-arrow')

let showAll = function () {
  //brands.classList.toggle('full');
  brandNames.classList.toggle('full')
  buttonShow.classList.toggle('show-hide')
  buttonShow.classList.toggle('button-show-hide')
  arrow.classList.toggle('show-arrow')
  arrow.classList.toggle('hide-arrow')
}
buttonShow.addEventListener('click', showAll)


let brandNames3 = document.querySelector('.swiper-wrapper--4')
let arrow3 = document.querySelector('.show-hide-arrow--3')

let showAll3 = function () {
  brandNames3.classList.toggle('full--3')
  arrow3.classList.toggle('show-arrow--3')
  arrow3.classList.toggle('hide-arrow--3')
}

let buttonShow4 = document.querySelector('.button-show-hide--4')
let text4 = document.querySelector('.wrapper--4')
let arrow4 = document.querySelector('.show-hide-arrow--4')

let showAll4 = function () {
  text4.classList.toggle('full--4')
  buttonShow4.classList.toggle('show-hide--4')
  buttonShow4.classList.toggle('button-show-hide--4')
  arrow4.classList.toggle('show-arrow--4')
  arrow4.classList.toggle('hide-arrow--4')
}
buttonShow4.addEventListener('click', showAll4)

//burger open & close side menu
let buttonBurger = document.querySelector('.menu__left--button--burger')
let buttonsChat = document.querySelectorAll('.menu__bottom--button--chat')
let buttonsTel = document.querySelectorAll('.menu__bottom--button--tel')

let buttonCross = document.querySelector('.menu__left--button--cross')
let buttonCrossChat = document.querySelector('.button--cross--chat')
let buttonCrossTel = document.querySelector('.button--cross--tel')

let leftCont = document.querySelector('.left-container')

let modalBurger = document.querySelector('.modal-menu')
let modalChat = document.querySelector('.modal-right')
let modalTel = document.querySelector('.modal-right--tel')

let blurredArea = document.querySelector('.blurred')
let blurredBurger = document.getElementById('blurred')

//buttons functions
let openBurger = function () {
  modalBurger.classList.add('modal-menu--open')
  blurredArea.classList.remove('close-blurred')
  blurredArea.classList.add('open-blurred')
  modalBurger.classList.add('animation--open')
  modalBurger.classList.remove('animation--close')
   }

buttonBurger.addEventListener('click', openBurger)

let closeBurger = function () {
  modalBurger.classList.remove('modal-menu--open')
  blurredArea.classList.remove('open-burger')
  blurredArea.classList.add('close-blurred')
  modalBurger.classList.add('animation--close')
  modalBurger.classList.remove('animation--open')


}
buttonCross.addEventListener('click', closeBurger)

let openChat = function () {
  modalChat.classList.remove('modal-right')
  modalChat.classList.add('modal-right--open')
  blurredArea.classList.remove('close-blurred')
  blurredArea.classList.add('open-blurred')
  modalBurger.classList.remove('modal-menu--open')
  modalBurger.classList.add('modal-menu--close')
  modalChat.classList.add('animation--open--2')
  modalChat.classList.remove('animation--close--2')

}

for (let i = 0; i < buttonsChat.length; i++) {
  buttonsChat[i].addEventListener('click', openChat)
}

let openTel = function () {
  modalTel.classList.remove('modal-right--tel')
  modalTel.classList.add('modal-right--tel--open')
  blurredArea.classList.remove('close-blurred')
  blurredArea.classList.add('open-blurred')
  modalBurger.classList.remove('modal-menu--open')
  modalBurger.classList.add('modal-menu--close')
  modalTel.classList.add('animation--open--2')
  modalTel.classList.remove('animation--close--2')
}

for (let i = 0; i < buttonsTel.length; i++) {
  buttonsTel[i].addEventListener('click', openTel)
}

let closeChat = function () {
  modalChat.classList.remove('modal-right--open')
  modalChat.classList.add('modal-right')
  blurredArea.classList.remove('open-blurred')
  blurredArea.classList.add('close-blurred')
  modalChat.classList.remove('animation--open--2')
  modalChat.classList.add('animation--close--2')

}

buttonCrossChat.addEventListener('click', closeChat)

let closeTel = function () {
  modalTel.classList.remove('modal-right--tel--open')
  modalTel.classList.add('modal-right--tel')
  blurredArea.classList.add('close-blurred')
  blurredArea.classList.remove('open-blurred')
  modalTel.classList.remove('animation--open--2')
  modalTel.classList.add('animation--close--2')
}

buttonCrossTel.addEventListener('click', closeTel)


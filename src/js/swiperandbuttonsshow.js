let buttonShow = document.querySelector('.button-show-hide');
let brands = document.querySelector('.swiper')
let brandNames = document.querySelector('.swiper-wrapper')
let arrow = document.querySelector('.show-hide-arrow')


let showAll = function(){
brands.classList.toggle('full');
brandNames.classList.toggle('full');
buttonShow.classList.toggle('show-hide')  
buttonShow.classList.toggle('button-show-hide')
arrow.classList.toggle('show-arrow')
arrow.classList.toggle('hide-arrow')
}
buttonShow.addEventListener('click', showAll);

let buttonShow2 = document.querySelector('.button-show-hide-2')
let brands2 = document.querySelector('.brands-2')
let brandNames2 = document.querySelector('.brand-names-2')
let arrow2 = document.querySelector('.show-hide-arrow-2')




let swiper;

function handleSwiper() {
  if (window.matchMedia('(max-width: 768px)').matches) {

    if (!swiper) {
      swiper = new Swiper('.swiper', {
        loop: false,
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
  } else {
    if (swiper) {
      swiper.destroy();
      swiper = undefined;
    }
  }
}
window.addEventListener('resize', handleSwiper);

handleSwiper();
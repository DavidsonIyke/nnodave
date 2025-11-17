// initialize

const swiper = new Swiper('.home', {
  // Optional parameters
  spaceBetween: 30,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-star');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('fa-star');
  navbar.classList.remove('active');
}


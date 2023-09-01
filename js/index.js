// Drop login

let loginBtn = document.querySelector('.login-btn');
let dropLogin = document.querySelector('.drop-login');

loginBtn.onclick = () => {
   dropLogin.classList.toggle("drop-login-open");
};

// Menu Open
let menu = document.querySelector('.menu-icon');
// let navbar = document.querySelector('.navbar');

menu.onclick = () => {
   menu.classList.toggle("move");
};

// inicio Swiper inicializacion
var swiper = new Swiper(".inicio", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
   delay: 25000,
   disableOnInteraction: false,
},
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
});




import Swiper from 'swiper/bundle';
const slider = document.querySelector('.swiper');

let mySwiper = new Swiper(slider,{
    slidesPerView: "auto",
    lazy: true,
    spaceBetween:40,
    loop:true,
    centeredSlides:true,
    navigation: {
        nextEl: document.querySelector('.swiper-button-next'),
        prevEl: document.querySelector('.swiper-button-prev')
    },
    pagination: {
        el: document.querySelector('.swiper-pagination'),
        clickable: true,
        
    },

   
});
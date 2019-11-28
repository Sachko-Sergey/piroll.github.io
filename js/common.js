$(function () {

    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            dynamicBullets: true,
            loop: true,
        },
        slidesPerView: 1,
        clickable: true,
        autoplay: {
            delay: 3000,
        },
    });
 
});


$('.menu-b-btn').on('click', function () {
    $('.menu__list').slideToggle();
});


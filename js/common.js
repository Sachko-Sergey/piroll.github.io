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
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //       slidesPerView: 1,
        //       spaceBetween: 20
        //     },
        //     // when window width is >= 480px
        //     480: {
        //       slidesPerView: 1,
        //       spaceBetween: 30
        //     },
        //     // when window width is >= 640px
        //     640: {
        //       slidesPerView: 1,
        //       spaceBetween: 40
        //     }
        //   }
    });
 
});


$('.menu-b-btn').on('click', function () {
    $('.menu__list').slideToggle();
});


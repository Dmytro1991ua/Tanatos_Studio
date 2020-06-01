
//Swiper Slider for Review Section
var swiper = new Swiper('.slider-1', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 600,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.slider-2', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false
    },
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },

        992: {
            slidesPerView: 3,
            spaceBetween: 50,
        },

        1200: {
            slidesPerView: 4,
            spaceBetween: 50,
        },

    }
});

//wow js
new WOW().init();

// Fixed Header on Scroll
window.onscroll = function () {
    const scrollTop = document.documentElement.scrollTop;

    if (window.innerWidth > 768) {
        if (scrollTop > 70) {
            document.querySelector(".navigation").classList.add("sticky");
        } else {
            document.querySelector(".navigation").classList.remove("sticky");
        }
    }
}
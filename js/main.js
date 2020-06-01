
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

//open navbar on click to a hamburger menu
const toggleBtn = document.querySelector(".navigation__menu");
toggleBtn.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
    document.querySelector(".navigation__toggle").classList.toggle("active");
    document.querySelector("body").classList.toggle("lock"); //class to apply and remove overflow: hidden to a body when a nav in active
});

//close a navigation on click to a specific link
const navbar = document.querySelector(".nav");
const links = navbar.querySelectorAll(".nav__link"); //select all links (<a>)

//loop through all links
links.forEach(function (link) {
    link.addEventListener("click", () => {
        document.querySelector(".nav").classList.toggle("show");
        document.querySelector("body").classList.remove("lock");
        document.querySelector(".navigation__toggle").classList.toggle("active");
    });
});
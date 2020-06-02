
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

//scrolling (animation) to the next section on click to a btn

function smoothScroll(target, duration) { // == "target" parametr means that we need to go somewhere (to scroll to particular section). == "duration" parameter -- how long thar animation is gonna last 
    //select target to which we are gonna scroll on click
    var target = document.querySelector(target); //her we pass "target" as a paremetr instead of actual section to which we want to scroll (in our case section about). we are gonna pass actual section as a parameter we will call smoothScroll() function
    var targetPosition = target.getBoundingClientRect().top; //Метод Element.getBoundingClientRect() возвращает размер элемента и его позицию относительно viewport (часть страницы, показанная на экране, и которую мы видим).
    var startPosition = window.pageYOffset; // window.pageOffSet -- возвращает количество пикселей, на которое прокручен документ по вертикали (вниз или вверх). Значение свойства равное 0.0 говорит о том, что в данный момент верхний край документа 
    var distance = targetPosition - startPosition;
    var startTime = null; //we are goona be using this with a window.requestAnimationFrame() -- allows to look animation and transition smooth

    function animation(currentTime) {
        if (startTime === null) {
            startTime = currentTime;
        }
        var timeElapsed = currentTime - startTime; //timeElapsed -- истекшее время
        var runAnimation = ease(timeElapsed, startPosition, distance, duration);//run ease function. ease() function has 4 parameters that we need to passt to it (t, b, c, d --- t - timeElapsed, b - startPosition, c -- distance, d -- duration)
        window.scrollTo(0, runAnimation); //runAnimation will run vertically
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }

    function ease(t, b, c, d) {  //http://www.gizma.com/easing/ -- website with easing functions for smoth animation
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }
    requestAnimationFrame(animation); // pass animation () function as parameter. The "window.requestAnimationFrame()" method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint.
}

const headerArrowDown = document.querySelector(".header__arrow-down");//select a header arrow down

headerArrowDown.addEventListener("click", function () { //click for a changes on click to header arrow down and scroll to a section-features
    smoothScroll(".section-features", 500); //here we call smoothScroll() function
});

//btn scroll to top of the header
var scrollUpToHeader = document.querySelector(".btn-top-scroll");//select btn-to-top

const scrollBtn = function () { //function to display and hide scroll to top button -- scrollUpToHeader
    if (window.scrollY >= 300) {
        scrollUpToHeader.classList.add("is-visible");
    } else {
        scrollUpToHeader.classList.remove("is-visible");
    }
}

window.addEventListener("scroll", scrollBtn);


scrollUpToHeader.addEventListener("click", function () { //click for a changes on a certain button and scroll up to a header
    smoothScroll(".header", 500); //here we call smoothScroll() function
});
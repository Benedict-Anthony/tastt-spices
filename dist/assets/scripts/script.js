const openMenu = document.getElementById("open");
const closeMenu = document.getElementById("close");
const header = document.querySelector(".header")
const sections = document.querySelectorAll('section[id]')
const year = document.querySelector("#year");
const scrollUpBtn = document.querySelector(".scrollupbtn")

openMenu.addEventListener("click", () => {
    document.querySelector(".navigation__list").classList.add("show")
})


closeMenu.addEventListener("click", () => {
    document.querySelector(".navigation__list").classList.remove("show")
})


function windowScrolled() {
    window.scrollY >= 50 ? header.classList.add("scrolled") : header.classList.remove("scrolled")
}
function removeNavbarOnScroll() {
    document.querySelector(".navigation__list").classList.remove("show")
}

const scrollActive = () => {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('li a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}


window.addEventListener("scroll", windowScrolled)
window.addEventListener("scroll", removeNavbarOnScroll)
window.addEventListener("scroll", scrollActive);
window.addEventListener("DOMContentLoaded", scrollActive);
window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
        scrollUpBtn.style.opacity = 1
    }
    else {
        scrollUpBtn.style.opacity = 0

    }
})

// SWIPER JS INITIALIZATION
const dishContainer = new Swiper(".dishes_container", {
    // loop: true,
    // auto: true,
    speed: 400,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
        290: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        840: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    }
})


const packageContainer = new Swiper(".packages__container", {
    // loop: true,
    // auto: true,
    speed: 400,
    // direction: "vertical",
    navigation: true,
    slidesPerView: 1,
    spaceBetween: 10,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true
    }
})


const reviewsContainer = new Swiper(".reviews__container", {
    // loop: true,
    // auto: true,
    speed: 400,
    // navigation: true,
    slidesPerView: "auto",
    breakpoints: {
        290: {
            slidesPerView: 1,
            spaceBetween: 10,
        },

        500: {
            slidesPerView: 2,
            spaceBetween: 15,
        },

        840: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
    spaceBetween: 10,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
    },

})

const currentYear = new Date()

year.innerHTML = currentYear.getFullYear()
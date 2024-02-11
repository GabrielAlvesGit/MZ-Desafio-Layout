var body = document.body;
var nav = document.querySelector(".menu--nav");
var menuHamburger = document.querySelector(".menu-hamburger");
var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");
var comoInvestirBtn = document.querySelector(".btns-heard-comoInv");
var comoInvestirContainer = document.querySelector(
    ".btns-heard-comoInv-container"
);

var divCarousel = document.getElementById("carousel");
var descricaoElement = divCarousel.querySelector("#textCarousel");
var imgElement = divCarousel.querySelector("#imgCarousel");
var titleElement = divCarousel.querySelector("#titleCarousel");

let currentIndex = 0;

function toggleMenu() {
    if (nav.classList.contains("active")) {
        nav.classList.remove("active");
        menuHamburger.setAttribute("aria-expanded", "false");
        menuIcon.style.display = "inline";
        closeIcon.style.display = "none";
        comoInvestirContainer.style.display = "none";
        body.style.overflow = "";
    } else {
        nav.classList.add("active");
        menuHamburger.setAttribute("aria-expanded", "true");
        menuIcon.style.display = "none";
        closeIcon.style.display = "inline";
        comoInvestirContainer.style.display = "block";
        body.style.overflow = "hidden";
    }
}

/* =============== Carousel ===============*/
function updateCarousel(index) {
    titleElement.textContent = dados.carousel[index].title;
    descricaoElement.textContent = dados.carousel[index].descricao;
    imgElement.src = dados.carousel[index].img;
    imgElement.alt = dados.carousel[index].alt;

    // Remove todos os dots
    document.querySelectorAll(".dot").forEach((dot) => {
        dot.classList.remove("special-dot");
    });

    // Adiciona dot clicado
    document
        .querySelector(`.dot:nth-child(${index + 1})`)
        .classList.add("special-dot");
}

document
    .querySelector(".carousel-btn:first-child")
    .addEventListener("click", function () {
        currentIndex =
            (currentIndex - 1 + dados.carousel.length) % dados.carousel.length;
        updateCarousel(currentIndex);
    });

document
    .querySelector(".carousel-btn:last-child")
    .addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % dados.carousel.length;
        updateCarousel(currentIndex);
    });

document.querySelectorAll(".dot").forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

fetch("./js/Data.json").then((response) => {
    response.json().then((data) => {
        dados = data;
        updateCarousel(currentIndex);
    });
});

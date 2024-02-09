var body = document.body;
var nav = document.querySelector(".menu--nav");
var menuHamburger = document.querySelector(".menu-hamburger");
var menuIcon = document.getElementById("menu-icon");
var closeIcon = document.getElementById("close-icon");
var comoInvestirBtn = document.querySelector(".btns-heard-comoInv");
var comoInvestirContainer = document.querySelector(
    ".btns-heard-comoInv-container"
);

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

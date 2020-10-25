import "../styles/styles.css";
import "lazysizes";


if (module.hot) {
  module.hot.accept();
}


const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  burger.classList.toggle("burgerOut");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
    burger.classList.toggle("burgerOut");
  });
});

AOS.init({
  duration: 1200,
});
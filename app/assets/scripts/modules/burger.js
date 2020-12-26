const Burger = () => {
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const link = document.querySelector(".burger-work");
// const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
  burger.classList.toggle("burgerOut");
});

  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
    burger.classList.toggle("burgerOut");
  });

AOS.init({
  duration: 1200,
});
}

export default Burger
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const closeMenu = document.querySelector(".close-menu");
const openMenu = document.querySelector(".menu");
const aside = document.querySelector(".aside");
const section = document.querySelector(".section");
const bottom = document.querySelector(".right .bottom");

dark.addEventListener("click", () => {
  dark.classList.add("light");
  light.classList.remove("light");
  document.body.classList.add("dark-mode");
});
light.addEventListener("click", () => {
  dark.classList.remove("light");
  light.classList.add("light");
  document.body.classList.remove("dark-mode");
});

openMenu.addEventListener("click", () => {
  aside.style.left = "0";
  section.classList.add("blur");
  bottom.classList.add("blur");
});

closeMenu.addEventListener("click", () => {
  aside.style.left = "-320px";
  section.classList.remove("blur");
  bottom.classList.remove("blur");
});

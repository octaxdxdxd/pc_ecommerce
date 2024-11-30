let burgerMenu = document.querySelector(".burger-menu")
let navBar = document.querySelector("nav")

burgerMenu.addEventListener("click", () => {
    navBar.classList.toggle("active")
});
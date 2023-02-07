const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")

hamburgerMenu.addEventListener("click", () => {
    menu.style.display == "none" ? menu.style.display = "block" : menu.style.display = "none"
})
const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")
const title = document.getElementById("title")
const footers = document.getElementsByTagName("footer")

hamburgerMenu.addEventListener("click", () => {
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none"
    menu.style.display == "flex" ? title.style.display = "none" : title.style.display = "flex"
})

for(f of footers) {
    f.className = "footer"
}
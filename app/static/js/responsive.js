const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")
const title = document.getElementById("title")
const footers = document.getElementsByTagName("footer")
const settingsMenu = document.getElementById('settings')

hamburgerMenu.addEventListener("click", () => {
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none"
    menu.style.display == "flex" ? title.style.display = "none" : title.style.display = "flex"
    menu.style.display == "flex" ? themeSwitcherContainer.style.display = "none" : themeSwitcherContainer.style.display = "none"
})

settingsMenu.addEventListener('click', () => {
    themeSwitcherContainer.style.display == "none" ? themeSwitcherContainer.style.display = "block" : themeSwitcherContainer.style.display = "none"
    themeSwitcherContainer.style.display == "block" ? menu.style.display = "none" : menu.style.display = "none"
    themeSwitcherContainer.style.display == "block" ? title.style.display = "flex" : title.style.display = "flex"
})

if (window.innerWidth > 450) {
    menu.style.display = "flex"
}


for(f of footers) {
    f.className = "footer"
}
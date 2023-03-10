const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")
const title = document.getElementById("title")
const footers = document.getElementsByTagName("footer")
const settingsMenu = document.getElementById('settings')
const imageMobile = document.getElementById('image-mobile')
const searchBar = document.getElementById('search-container')

hamburgerMenu.addEventListener("click", () => {
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none"
    menu.style.display == "flex" ? title.style.display = "none" : title.style.display = "flex"
    menu.style.display == "flex" ? themeSwitcherContainer.style.display = "none" : themeSwitcherContainer.style.display = "none"
    menu.style.display == "flex" ? searchBar.style.display = "none" : searchBar.style.display = "flex"
})

settingsMenu.addEventListener('click', () => {
    themeSwitcherContainer.style.display == "none" ? themeSwitcherContainer.style.display = "block" : themeSwitcherContainer.style.display = "none"
    themeSwitcherContainer.style.display == "block" ? menu.style.display = "none" : menu.style.display = "none"
    themeSwitcherContainer.style.display == "block" ? title.style.display = "flex" : title.style.display = "flex"
    themeSwitcherContainer.style.display == "block" ? searchBar.style.display = "none" : searchBar.style.display = "flex"
})

if (window.innerWidth > 450) {
    menu.style.display = "flex"
}

for(f of footers) {
    if (location.pathname === '/contact/' || location.pathname === '/moyenne/') {
        f.className = 'footer-sticky'
    }
}
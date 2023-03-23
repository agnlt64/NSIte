const hamburgerMenu = document.getElementById("hamburger-menu")
const menu = document.getElementById("menu")
const title = document.getElementById("title")
const footers = document.getElementsByTagName("footer")
<<<<<<< HEAD:js/responsive.js
=======
const settingsMenu = document.getElementById('settings')
const imageMobile = document.getElementById('image-mobile')
const searchBar = document.getElementById('search-container')
>>>>>>> nsite-flask:app/static/js/responsive.js

hamburgerMenu.addEventListener("click", () => {
    menu.style.display == "none" ? menu.style.display = "flex" : menu.style.display = "none"
    menu.style.display == "flex" ? title.style.display = "none" : title.style.display = "flex"
<<<<<<< HEAD:js/responsive.js
})

for(f of footers) {
    f.className = "footer"
=======
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
    if (location.pathname === '/contact/' || location.pathname === '/moyenne/' || location.pathname === '/search-results/') {
        f.className = 'footer-sticky'
    }
>>>>>>> nsite-flask:app/static/js/responsive.js
}
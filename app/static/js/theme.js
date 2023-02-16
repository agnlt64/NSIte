const themeSwitcher = document.getElementById('theme-switcher')
const themeSwitcherContainer = document.getElementById("theme")

if (window.innerWidth > 450) {
    themeSwitcherContainer.style.marginRight = `${window.innerWidth / 150}%`
}
else {
    themeSwitcherContainer.style.marginRight = `${window.innerWidth / 10}%`
}

function storeTheme(theme) {
    localStorage.setItem("currentTheme", theme)
}

function getTheme() {
    const currentTheme = localStorage.getItem("currentTheme")
    document.body.toggleAttribute(currentTheme)
    if (currentTheme === "light") {
        themeSwitcher.checked = false
    }
}

themeSwitcher.addEventListener('click', () => {
    document.body.toggleAttribute("light")
    document.body.hasAttribute("light") ? storeTheme("light") : storeTheme('')
})

if (window.innerWidth > 450) {
    themeSwitcherContainer.style.display = "flex"
}

document.onload = getTheme()
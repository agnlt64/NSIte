const themeSwitcher = document.getElementById('theme-switcher')
const themeSwitcherContainer = document.getElementById("theme")

function storeTheme(theme) {
    localStorage.setItem("currentTheme", theme)
}

function getTheme() {
    const currentTheme = localStorage.getItem("currentTheme")
    try {
        document.body.toggleAttribute(currentTheme)
    }
    catch (DOMException) {
        // we don't actually care
    }
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
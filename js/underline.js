const lines = document.getElementsByClassName("line");
const gotoMenu = document.getElementById("goto-menu").getElementsByTagName("li");

for (let i = 0; i < gotoMenu.length; i++) {
    gotoMenu[i].addEventListener('mouseover', () => {
        lines[i].style.animation = "slide 0.2s forwards";
    });
    gotoMenu[i].addEventListener('mouseout', () => {
        lines[i].style.animation = "unslide 0.2s forwards";
    });
}
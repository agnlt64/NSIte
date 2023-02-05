const filled = document.querySelector(".filled");

function update() {
    filled.style.width = `${(window.scrollY) / (document.body.scrollHeight - window.innerHeight) * 100}%`;
    requestAnimationFrame(update);
}

update();

// go up the page
const up = document.getElementById("up");
up.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
//----variables globales
let numChoisi, nbCoups, min, max;
const restartButton = document.getElementById("id_recommencer");
const totalCoups = document.getElementById("numero");

//----- ajout de boutons
function addButtons() {
    const demo = document.getElementById("demo");

    for (let i = 0; i < 101; i++) {
        let btn = document.createElement("button");
        btn.className += "mybutton "
        btn.className += "initiale ";
        btn.id = i;
        i < 10 ? btn.innerHTML = `0${i}` : btn.innerHTML = i;
        demo.appendChild(btn);
    }
}

function changeClass(min, max) {
    const allButtons = document.querySelectorAll(".mybutton");
    for (btn of allButtons) {
        btn.id < min || btn.id > max ? btn.disabled = true : btn.disabled = false;
    }
}

function init() {
    nbCoups = 0;
    min = 0;
    max = 100;
    numChoisi = Math.round(Math.random() * (max - min) + min);
    totalCoups.innerHTML = nbCoups;
    changeClass(min, max);
}

function clickButton(id) {
    id > numChoisi ? max = id - 1 : (id === numChoisi ? alert("Vous avez gagné !") : min = id + 1);
    changeClass(min, max);
    nbCoups++;
    totalCoups.innerHTML = nbCoups;
}

addButtons();
init();

restartButton.addEventListener('click', init);

const allButtons = document.querySelectorAll('.mybutton');
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
        clickButton(i);
    });
}


// glow button
document.querySelectorAll(".glow-button").forEach((button) => {
    const gradientElem = document.createElement("div");
    gradientElem.classList.add("gradient");
  
    button.appendChild(gradientElem);
  
    button.addEventListener("pointermove", (e) => {
      const rect = button.getBoundingClientRect();
  
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      gsap.to(button, {
        "--pointer-x": `${x}px`,
        "--pointer-y": `${y}px`,
        duration: 0.6,
      });
  
      gsap.to(button, {
        "--button-glow": chroma
          .mix(
            getComputedStyle(button)
              .getPropertyValue("--button-glow-start")
              .trim(),
            getComputedStyle(button).getPropertyValue("--button-glow-end").trim(),
            x / rect.width
          )
          .hex(),
        duration: 0.2,
      });
    });
  });
  
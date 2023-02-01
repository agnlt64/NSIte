const moyenneFinale = document.getElementById("moyenne");
let maths = document.getElementById("maths");
let physique = document.getElementById("physique");
let snt = document.getElementById("snt");
const calculBtn = document.getElementById("calculer-moyenne");

function calculerMoyenne(value1, value2, value3) {
    let somme = -1;
    if (value1 !== NaN && value2 !== NaN && value3 !== NaN) {
        somme += value1 + value2 + value3;
        somme /= 3;
    }
    return Math.round(somme);
}

function updateMoyenne() {
    if (Number(maths.value) > 20 || Number(physique.value) > 20 || Number(snt.value) > 20) {
        moyenneFinale.toggleAttribute("red");
        moyenneFinale.removeAttribute("orange");
        moyenneFinale.removeAttribute("green");
        moyenneFinale.innerHTML = "Valeurs incorrectes !";
    }
    else {
        const moyenne = calculerMoyenne(Number(maths.value), Number(physique.value), Number(snt.value));
        if (moyenne < 8) {
            moyenneFinale.toggleAttribute("red");
            moyenneFinale.removeAttribute("orange");
            moyenneFinale.removeAttribute("green");
            moyenneFinale.innerHTML = "La spécialité NSI vous est vivement déconseillée !";
        }
        else if (moyenne >= 8 && moyenne < 14) {
            moyenneFinale.toggleAttribute("orange");
            moyenneFinale.removeAttribute("red");
            moyenneFinale.removeAttribute("green");
            moyenneFinale.innerHTML = "Vous devrez vous accrocher, mais vous pouvez y arriver !";
        }
        else if (moyenne >= 14 && moyenne <= 20) {
            moyenneFinale.toggleAttribute("green");
            moyenneFinale.removeAttribute("orange");
            moyenneFinale.removeAttribute("red");
            moyenneFinale.innerHTML = "Vous pouvez y aller les yeux fermés !";
        }
        else {
            moyenneFinale.toggleAttribute("red");
            moyenneFinale.removeAttribute("orange");
            moyenneFinale.removeAttribute("green");
            moyenneFinale.innerHTML = "Valeurs incorrectes !";
        }
    }
}

calculBtn.addEventListener("click", updateMoyenne);
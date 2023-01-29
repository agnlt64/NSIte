let moyenneFinale = document.getElementById("moyenne");
let maths = document.getElementById("maths");
let physique = document.getElementById("physique");
let snt = document.getElementById("snt");
const calculBtn = document.getElementById("calculer-moyenne");

function calculerMoyenne() {
    try {
        maths = Number(maths.value);
        physique = Number(physique.value);
        snt = Number(snt.value);
        if (maths <= 20 && physique <= 20 && snt <= 20) {
            let somme = maths + physique + snt;
            if (somme / 3 >= 13) {
                moyenneFinale.style.color = "green";
                moyenneFinale.style.fontWeight = "bold";
                moyenneFinale.innerHTML = `Votre moyenne est de ${somme / 3}, donc vous êtes apte à rentrer en NSI !`;
                return;
            }
            else {
                moyenneFinale.style.color = "orange";
                moyenneFinale.style.fontWeight = "bold";
                moyenneFinale.innerHTML = `Votre moyenne est de ${somme / 3}, donc vous aurez du mal à suivre en NSI !`;
                return;
            }
        }
    }
    catch (error) {
        moyenneFinale.style.color = "red";
        moyenneFinale.style.fontWeight = "bold";
        moyenneFinale.innerHTML = "Valeurs incorrectes !";
    }
}

calculBtn.addEventListener("click", calculerMoyenne);
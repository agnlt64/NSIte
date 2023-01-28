// // Récupération des éléments de formulaire
// const mathInput = document.querySelector('.mathInput');
// const pcInput = document.querySelector('.pcInput');
// const techInput = document.querySelector('.techInput');
// const resultat = document.querySelector('finalButton');

// // Récupération des boutons de calcul
// const mathButton = document.querySelector('.mathButton');
// const pcButton = document.querySelector('.pcButton');
// const techButton = document.querySelector('.techButton');
// const finalButton = document.querySelector('.finalButton');

// // Fonction pour calculer la moyenne
// function calculerMoyenne(e) {
//     // Récupération des valeurs des champs de formulaire
//     const mathNote = parseFloat(mathInput.value);
//     const pcNote = parseFloat(pcInput.value);
//     const techNote = parseFloat(techInput.value);

//     // Vérification des valeurs saisies
//     if (isNaN(mathNote) || isNaN(pcNote) || isNaN(techNote)) {
//         resultat.textContent = "Veuillez saisir des nombres valides.";
//         return;
//     }else{
//         moyenne = mathNote / mathInput.length;
//         var resultat = document.getElementById("resultat1");
//         resultat.innerHTML = moyenne
//         moyenne2 = pcNote / pcInput.length;
//         var resultat2 = document.getElementById("resultat2");
//         resultat2.innerHTML = moyenne2
//         moyenne3 = techNote / techInput.length;
//         var resultat3 = document.getElementById("resultat3");
//         resultat3.innerHTML = moyenne

//     }
//     // Ajout d'un écouteur d'événement sur les boutons de calcul
// mathButton.addEventListener('click',() => calculerMoyenne);
// pcButton.addEventListener('click',() => calculerMoyenne);
// techButton.addEventListener('click',() => calculerMoyenne);
// finalButton.addEventListener('click',() => calculerMoyenne);

// function moyenneGlobale(){
//     const moyenne = (resultat + resultat2 + resultat3) / 3;

//     // Affichage du résultat
//     resultat.textContent = "Votre moyenne est de " + moyenne.toFixed(2);
// }
// if(moyenne<12){
//     alert("vous n'êtes pas apte à rentrer en spécialité NSI");
// }else{
//     alert("vous êtes apte en rentrer en spécialité NSI");
// }
// }

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
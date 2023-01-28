// Récupération des éléments de formulaire
const mathInput = document.querySelector('.Mathematiques input');
const pcInput = document.querySelector('.Phyisque-Chimie input');
const techInput = document.querySelector('.Technologie input');
const resultat = document.querySelector('#resultat');

// Récupération des boutons de calcul
const mathButton = document.querySelector('.mathButton');
const pcButton = document.querySelector('.pcButton');
const techButton = document.querySelector('.techButton');
const finalButton = document.querySelector('.finalButton');

// Fonction pour calculer la moyenne
function calculerMoyenne(e) {
    // Récupération des valeurs des champs de formulaire
    const mathNote = parseFloat(mathInput.value);
    const pcNote = parseFloat(pcInput.value);
    const techNote = parseFloat(techInput.value);

    // Vérification des valeurs saisies
    if (isNaN(mathNote) || isNaN(pcNote) || isNaN(techNote)) {
        resultat.textContent = "Veuillez saisir des nombres valides.";
        return;
    }else{
        moyenne = mathNote / mathInput.length;
        var resultat = document.getElementById("resultat1");
        resultat.innerHTML = moyenne
        moyenne2 = pcNote / pcInput.length;
        var resultat2 = document.getElementById("resultat2");
        resultat2.innerHTML = moyenne2
        moyenne3 = techNote / techInput.length;
        var resultat3 = document.getElementById("resultat3");
        resultat3.innerHTML = moyenne

    }
    // Ajout d'un écouteur d'événement sur les boutons de calcul
mathButton.addEventListener('click',() => calculerMoyenne);
pcButton.addEventListener('click',() => calculerMoyenne);
techButton.addEventListener('click',() => calculerMoyenne);
finalButton.addEventListener('click',() => calculerMoyenne);

function moyenneGlobale(){
    const moyenne = (resultat + resultat2 + resultat3) / 3;

    // Affichage du résultat
    resultat.textContent = "Votre moyenne est de " + moyenne.toFixed(2);
}
if(moyenne<12){
    alert("vous n'êtes pas apte à rentrer en spécialité NSI");
}else{
    alert("vous êtes apte en rentrer en spécialité NSI");
}
}

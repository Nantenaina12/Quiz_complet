let score=0;
let indiceQuestionActuelle = 0;
const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Londres", "Berlin", "Paris", "Madrid"],
        reponse: 2
    },
    {
        question: "Combien de planètes dans notre système solaire ?",
        options: ["7", "8", "9", "10"],
        reponse: 1
    },
    {
        question: "La terre tourne autour de lui-même pendant?",
        options: ["24h", "365Jours", "60minutes", "3600s"],
        reponse: 0
    },
    {
        question: "Quel est le pays le plus grand du monde?",
        options: ["Russie", "Espagne", "France", "Italie"],
        reponse: 0
    },
    {
        question: "Quelle est la capitale du Maroc?",
        options: ["Tanger", "Casablanca", "Rabat", "Marrakech"],
        reponse: 2
    },
    {
        question: "Que font 4+5x3 ?",
        options: ["27", "19", "17", "10"],
        reponse: 1
    },
    {
        question: "Qu'appelle t-on quelqu'un qui parle beaucoup de langues?",
        options: ["Polyvalent", "Polyglotte", "Polylangue", "Multilangue"],
        reponse: 1
    },
    {
        question: "Quand est-ce que la prémière guerre mondiale a lieu?",
        options: ["1915", "1916", "1914", "1918"],
        reponse: 2
    },
    {
        question: "Qui a remporté la coupe du monde en 2014 ?",
        options: ["Brésil", "Argentine", "France", "Allemagne"],
        reponse: 3
    },
    {
        question: "Qui a chanté la chanson :Si je t'aime, je suis jaloux?",
        options: ["Tayc", "Dadju", "Kalash", "Gims"],
        reponse: 1
    },
    {
        question: "Une année contient combien de saisons?",
        options: ["5", "3", "4", "2"],
        reponse: 3
    },
    {
        question: " Qui est le premier navigateur a decouvert l'Amérique durant les grandes decouvertes?",
        options: ["Colomb", "Diego Diaz", "Barthelemi Diaz", "Marco"],
        reponse: 0
    },
    {
        question: "Quel est le participe passé du verbe : vivre?",
        options: ["vivant", "vive", "veçu", "vivé"],
        reponse: 2
    },
    {
        question: "Compléter la phrase suivante: nous irons ....France",
        options: ["à", "en", "au", "de"],
        reponse: 1
    },
    {
        question: "Compléter cette phrase: Il se peut que vous....peur d'échouer",
        options: ["avez", "aurez", "aviez", "ayez"],
        reponse: 3
    },
    {
        question: "Une heure compte combien de secondes?",
        options: ["3600", "60", "120", "1000"],
        reponse: 1
    },
    {
        question: "Quel est le satellite naturel de la Terre?",
        options: ["Lune", "Soleil", "Phobos", "LandSat"],
        reponse: 0
    }
];
const question=document.getElementById("question");
const choix=document.getElementById("choices");
const btn=document.getElementById("next-btn");
const point=document.getElementById("score");
const total=document.getElementById("total");
const btn_ref=document.getElementById("refaire");
function afficherquetions(index){
    if(index>=questions.length){
        afficherResultat();
        return;
    }
    const ques=questions[index];
    question.textContent=ques.question;
    choix.textContent="";
    ques.options.forEach((option, i) => {

        const bouton = document.createElement("button");
        bouton.textContent = option;
        bouton.classList.add("bouton-choix");
        bouton.addEventListener("click", () => 
            selectionnerReponse(i));
            choix.appendChild(bouton);
    });
    total.textContent = questions.length;
    point.textContent = score;
}

function selectionnerReponse(indiceSelectionne) {

    const question = questions[indiceQuestionActuelle];
    // Désactive tous les boutons après sélection
    const boutons = choix.querySelectorAll(".bouton-choix");
    boutons.forEach(bouton => {
        bouton.disabled = true;
    });

    // Vérifie la réponse
    if (indiceSelectionne === question.reponse) {
        score++;
        point.textContent = score;
        boutons[indiceSelectionne].classList.add("correct");
    } else{

        boutons[indiceSelectionne].classList.add("incorrect");     
        boutons[question.reponse].classList.add("correct");
    }
    // Active le bouton suivant
    boutonSuivant.style.display = "block";
    }

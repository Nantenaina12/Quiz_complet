let score = 0;
let indiceQuestionActuelle = 0;
let tempsRestant;
let timer;
const dureeParQuestion = 15; // 15 secondes par question

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
        reponse: 2
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

const question = document.getElementById("question");
const choix = document.getElementById("choices");
const btn = document.getElementById("next-btn");
const point = document.getElementById("score");
const total = document.getElementById("total");
const btn_ref = document.getElementById("refaire");
const tempsElement = document.getElementById("temps");

function demarrerChronometre() {
    tempsRestant = dureeParQuestion;
    tempsElement.textContent = tempsRestant;
    tempsElement.style.color = "black";
    
    timer = setInterval(() => {
        tempsRestant--;
        tempsElement.textContent = tempsRestant;
        
        if (tempsRestant <= 5) {
            tempsElement.style.color = "red";
        }
        
        if (tempsRestant <= 0) {
            clearInterval(timer);
            tempsEcoule();
        }
    }, 1000);
}

function arreterChronometre() {
    clearInterval(timer);
    tempsElement.style.color = "black";
}

function tempsEcoule() {
    const questionActuelle = questions[indiceQuestionActuelle];
    const boutons = choix.querySelectorAll(".bouton-choix");
    
    boutons.forEach(bouton => {
        bouton.disabled = true;
    });
    
    boutons[questionActuelle.reponse].classList.add("correct");
    
    setTimeout(() => {
        questionSuivante();
    }, 2000);
}

function afficherquestions(index) {
    arreterChronometre();
    
    if (index >= questions.length) {
        afficherResultats();
        return;
    }
    
    const ques = questions[index];
    question.textContent = ques.question;
    choix.textContent = "";
    
    ques.options.forEach((option, i) => {
        const bouton = document.createElement("button");
        bouton.textContent = option;
        bouton.classList.add("bouton-choix");
        bouton.addEventListener("click", () => selectionnerReponse(i));
        choix.appendChild(bouton);
    });
    
    total.textContent = questions.length;
    point.textContent = score;
    btn.style.display = "none";
    
    demarrerChronometre();
}

function selectionnerReponse(indiceSelectionne) {
    arreterChronometre();
    
    const questionActuelle = questions[indiceQuestionActuelle];
    const boutons = choix.querySelectorAll(".bouton-choix");
    
    boutons.forEach(bouton => {
        bouton.disabled = true;
    });

    if (indiceSelectionne === questionActuelle.reponse) {
        score++;
        point.textContent = score;
        boutons[indiceSelectionne].classList.add("correct");
    } else {
        boutons[indiceSelectionne].classList.add("incorrect");     
        boutons[questionActuelle.reponse].classList.add("correct");
    }
    
    btn.style.display = "block";
}

function questionSuivante() {
    indiceQuestionActuelle++;
    btn.style.display = "none";
    afficherquestions(indiceQuestionActuelle);
}

function afficherResultats() {
    question.textContent = `Quiz terminé ! Votre score : ${score}/${questions.length}`;
    choix.innerHTML = "";
    btn.style.display = "none";
    btn_ref.style.display = "block";
}

function recommencerQuiz() {
    arreterChronometre();
    score = 0;
    indiceQuestionActuelle = 0;
    btn_ref.style.display = "none";
    afficherquestions(indiceQuestionActuelle);
}

btn.addEventListener("click", questionSuivante);
btn_ref.addEventListener("click", recommencerQuiz);

document.addEventListener("DOMContentLoaded", () => {
    afficherquestions(indiceQuestionActuelle);
});
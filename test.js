const boutonCommencer = document.querySelector(".bouton");
const citation = document.querySelector(".citation h2");
const cartes = document.querySelectorAll(".carte");

const citations = [
  "« Le meilleur moment pour commencer était hier. Le deuxième meilleur moment est maintenant. »",
  "« Chaque petit pas te rapproche de ton objectif. »",
  "« La discipline est un acte d'amour envers ton futur. »",
  "« N'attends pas d'être prêt : commence, puis apprends. »"
];

let indexCitation = 0;

// Changer la citation toutes les 6 secondes
setInterval(() => {
  indexCitation = (indexCitation + 1) % citations.length;
  citation.textContent = citations[indexCitation];
}, 6000);

// Les cartes deviennent des objectifs terminables
cartes.forEach((carte) => {
  carte.style.cursor = "pointer";

  carte.addEventListener("click", () => {
    carte.classList.toggle("termine");

    if (carte.classList.contains("termine")) {
      carte.querySelector(".icone").textContent = "✓";
    } else {
      const position = [...cartes].indexOf(carte) + 1;
      carte.querySelector(".icone").textContent = `0${position}`;
    }
  });
});

// Message lors du clic sur le bouton principal
boutonCommencer.addEventListener("click", () => {
  setTimeout(() => {
    alert("Bienvenue ! Choisis une priorité et commence par un petit pas.");
  }, 500);
});

// Message selon l'heure
const heure = new Date().getHours();

if (heure < 12) {
  console.log("Bonjour ! Une belle journée commence.");
} else if (heure < 18) {
  console.log("Bon après-midi ! Continue tes efforts.");
} else {
  console.log("Bonsoir ! Prends un moment pour toi.");
}
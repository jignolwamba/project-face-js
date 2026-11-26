const testBillet = document.querySelector("#essai-billet");
document.querySelector("#sortir-billet").addEventListener("click", () => {
  testBillet.textContent = "Clic reçu. Ouvre js/billet.js pour créer le billet.";
});

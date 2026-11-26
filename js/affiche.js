const testAffiche = document.querySelector("#essai-affiche");
document.querySelectorAll(".choisir").forEach((bouton) => {
  bouton.addEventListener("click", () => {
    const nom = bouton
      .closest(".concert")
      .querySelector(".artiste").textContent;
    testAffiche.textContent =
      "Clic reçu pour " + nom + ". Ouvre js/affiche.js.";
  });
});

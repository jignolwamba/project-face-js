const testScene = document.querySelector("#essai-scene");
document.querySelector("#interrupteur").addEventListener("click", () => {
  testScene.textContent = "Clic reçu. Ouvre js/scene.js pour allumer la scène.";
});

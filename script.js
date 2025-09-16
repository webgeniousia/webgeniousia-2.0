// Script para mostrar alertas cuando haces clic en un cóctel
document.addEventListener("DOMContentLoaded", () => {
  const cocteles = document.querySelectorAll(".coctel h3");

  cocteles.forEach(c => {
    c.addEventListener("click", () => {
      alert("Has seleccionado: " + c.textContent);
    });
  });
});

// pegar o elemento modal
var modal = document.getElementById("myModal");

// pegar o botão que abre a modal
var btn = document.querySelectorAll("#myBtn");

// pegar o botão de fechar a modal
var span = document.getElementsByClassName("sairModal")[0];

// Quando clicar no botão de abrir a modal, ela abre

btn.forEach((myBtn) =>
myBtn.onclick = function() {
  modal.style.display = "block";
}
)
// Clicar no botão de fechar a modal
span.onclick = function() {
  modal.style.display = "none";
}

// Sempre que clicar fora da modal, ela fecha
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
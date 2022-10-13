
//função para abrir a navbar
sidebarLeft = document.querySelector('.nav-left')
sidebarTop = document.querySelector('.nav-top')
header = document.querySelector(".header")
toggle = document.querySelector(".toggle")

toggle.addEventListener("click", () => {
  sidebarTop.classList.toggle("close")
  sidebarLeft.classList.toggle("close")
  header.classList.toggle('close')
    ;
})



/* const buscar = document.getElementById('buscar');
const divbuscar = document.getElementById('divbuscar');
buscar.addEventListener('', function() {
    divbuscar.classList.toggle('active');
}) */


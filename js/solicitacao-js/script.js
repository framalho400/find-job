const vaga = document.getElementById('vaga');
const empresa = document.getElementById('empresa');
const cardVagas = document.getElementById('cardVagas');
const cardEmpresa = document.getElementById('cardEmpresa');
empresa.addEventListener('click', function() {
    vaga.classList.add('close');
    cardVagas.classList.add('close');
    cardEmpresa.classList.remove('close');
    empresa.classList.remove('close');

})
vaga.addEventListener('click', function() {
    vaga.classList.remove('close');
    cardVagas.classList.remove('close');
    cardEmpresa.classList.add('close');
    empresa.classList.add('close');
})


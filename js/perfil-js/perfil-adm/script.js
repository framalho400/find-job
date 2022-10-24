
const addAdm = document.querySelector('#addAdm');
const salvaAdm = document.querySelector('#salvaAdm');

var newAdm = new bootstrap.Modal(document.getElementById('newAdm'));
addAdm.addEventListener('click', function(){
    newAdm.show();
    })
salvaAdm.addEventListener('click', function(){
    newAdm.hiden();
    }
    )
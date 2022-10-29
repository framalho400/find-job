

var modalAdm = new bootstrap.Modal(document.getElementById('modalEdit'));
document.querySelector('#editAdm').addEventListener('click', function () {
    modalAdm.show();
    document.getElementById('salvarEdit').addEventListener('click', function () {
        modalAdm.hide();
    });
}
)


var newAdm = new bootstrap.Modal(document.getElementById('newAdm'));
document.querySelector('#addAdm').addEventListener('click', function () {
    newAdm.show();
    document.getElementById('salvaAdm').addEventListener('click', function () {
        newAdm.hide();
    });
})



url = "http://localhost:8080/api/administrador";
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const nif = document.getElementById('nif');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmaSenha');
function criaAdm() {
    axios.get(url,{
        nome: nome.value,
        email: email.value,
        nif: nif.value,
        senha: senha.value,
        confirmaSenha: confirmaSenha.value


    })


        .then((response) => {
            const data = response.data;
        }
        )
        .catch((error) => console.log(error));


}
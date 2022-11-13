const nome = document.getElementById('nome');
const email = document.getElementById('email');
const nif = document.getElementById('nif');
const senha = document.getElementById('senha');
const confirmaSenha = document.getElementById('confirmaSenha');

url = "http://localhost:8080/api/adm";
function criaAdm() {
axios.post(url, {
nome: nome.value,
email: email.value,
nif: nif.value,
senha: senha.value, 
ativo: true
})
.then((response) => {
console.log(JSON.stringify(response.data));
msgErro(msgText = "Cadastrado com sucesso!", color = "green");
})
.catch((error) => console.log(error) + msgErro(msgText = "Erro ao cadastrar!", color = "red"));

};

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
        criaAdm();
        newAdm.hide();
    });
})





//=========================================================== Menssagem de erro =============================================================================//

function msgErro(msgText, color) {
    
    const div = document.createElement('div');
    
    div.classList.add('msg');
    div.style.borderLeft = `solid 10px ${color}`;
    div.innerText = msgText;
    document.body.appendChild(div);
    
    
    setTimeout(function () {
        div.classList.add('close')
    }, 3000); // 5 segundos
    setTimeout(function () {
        div.remove();
    }, 6000); // 6 segundos

}
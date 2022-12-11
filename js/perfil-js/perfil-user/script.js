
  var token = sessionStorage.getItem("token")


function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  };
  
  const payload = parseJwt(token)

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');

console.log(payload.nome);
nome.innerHTML = payload.name;
email.innerHTML = payload.email;
cpf.innerHTML = payload.cpf;




//alterar dados
var modalUser = new bootstrap.Modal(document.getElementById('modalEdit'));
document.querySelector('#editUser').addEventListener('click', function () {
    modalUser.show();
    document.getElementById('salvarEdit').addEventListener('click', function () {
        alteraDados(id = payload.id)
        modalUser.hide();
    });
}
)
const emailUser = document.getElementById('emailUser').value = payload.email;
const nomeUser = document.getElementById('nomeUser').value = payload.name;
const cpfUser = document.getElementById('cpfUser').value = payload.cpf;

userEdit = {
    nome: nomeUser,
    email: emailUser,
    cpf: cpfUser
}
function alteraDados(id){
    axios.put(`http://192.168.3.106:8080/api/usuario/${id}`, userEdit,
         )
        .then(function (response) {
            console.log(response);
            msgErro('Dados alterados com sucesso!', 'green')
        }
        ).catch(function (error) {
            console.log(error);
            msgErro('Erro ao alterar dados!', 'red')
        }
        );
}

//alterar senha
const alteraSenha = document.getElementById('alteraSenha');
const modalSenha = new bootstrap.Modal(document.getElementById('modalSenha'));
alteraSenha.addEventListener('click', function () {
    modalSenha.show();
    document.getElementById('salvarSenha').addEventListener('click', function () {
        modalSenha.hide();
    });
}
)
const senhaAtual = document.getElementById('senhaAtual').value = payload.senha;
const novaSenha = document.getElementById('novaSenha').value = payload.senha;
const confirmaNovaSenha = document.getElementById('confirmaNovaSenha')




//excluir conta
const excuirUser = document.getElementById('deleteUser')
const modalExcluir = new bootstrap.Modal(document.getElementById('modalDelUser'));
excuirUser.addEventListener('click', function () {
    modalExcluir.show();
    document.getElementById('excuirUser').addEventListener('click', function () {
        deleteUser()
        modalExcluir.hide();
    });
}
)
function deleteUser(){
    axios.delete(`http://192.168.3.106:8080/api/usuario/excluir/${payload.id}`)
    .then(function (response) {
        console.log(response);
        sessionStorage.clear();
        location.reload();
    }
    ).catch(function (error) {
        console.log(error);
        
    })
}


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
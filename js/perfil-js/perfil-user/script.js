
  var token = sessionStorage.getItem("token")

  if (token == null) {
    window.location.replace('/../../templates/login/login/login_user.html')
 
   } 
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
const celular = document.getElementById('celular');
const cpf = document.getElementById('cpf');

console.log(payload.nome);
nome.innerHTML = payload.name;
email.innerHTML = payload.email;
celular.innerHTML = payload.celular;
cpf.innerHTML = payload.cpf;





var modalUser = new bootstrap.Modal(document.getElementById('modalEdit'));
document.querySelector('#editUser').addEventListener('click', function () {
    modalUser.show();
    document.getElementById('salvarEdit').addEventListener('click', function () {
        modalUser.hide();
    });
}
)


const emailUser = document.getElementById('emailUser').value = payload.email;
const celularUser = document.getElementById('celularUser').value = payload.celular;
const cpfUser = document.getElementById('cpfUser').value = payload.cpf;



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
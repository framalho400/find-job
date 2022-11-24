const formulario = document.querySelector('form');
const Icpf = document.getElementById('cpf');
const Isenha = document.getElementById('senha');


const logar = document.querySelector('#entrar').addEventListener('click',
    function (e) {
        e.preventDefault();
    entrar();
})



const url = 'http://localhost:8080/api/usuario/login'

usuario =
{
    cpf: Icpf.value,
    senha: Isenha.value
}


function entrar() {
    axios.post(url, usuario, {
             
    headers: {
        'Content-Type': 'application/json',
        'accept': 'application/json',
        Authorization: `Bearer ${token}` }
}
    )
    .then((resp) => {

    resp.json()
    .then((resposta) => {
        msgErro(msgText="Erro ao logar", color= "red");
        sessionStorage.setItem("token", resposta.token);
        const token = resposta.token;
        console.log(JSON.stringify(response.data));
        window.location.href = "../../templates/usuario/home.html"; 
        
    }).catch((error) => {
        alert("Erro ao fazer login");
        /*  window.location.href = "../suporte/index.html"; */
        console.log(error)
        msgErro(msgText="Erro ao logar", color= "red");
        if (resp.status == 401) {
            msgErro(msgText="Erro ao logar", color= "red");
            
        } 
    })
})
}


 function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}; 

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
const formulario = document.querySelector('form');
const Icpf = document.getElementById('cpf');
const Isenha = document.getElementById('senha');




const url = 'http://10.92.198.40:8080/api/usuario/login'

function entrar() {
    usuario =
    {
        cpf: Icpf.value,
        senha: Isenha.value
    }
    axios.post(url, usuario).then((resp) => {

    resp.json().then((resposta) => {
        onsole.log(JSON.stringify(response.data));
        sessionStorage.setItem("token", resposta.token);
        const token = parseJwt(resposta.token);
        alert(token);
        
        window.location.href = "../../template/usuario/home.html"; 
        
    }).catch((error) => {
        alert("Erro ao fazer login");
        /*  window.location.href = "../suporte/index.html"; */
        console.log(error)
    /*     if (resp.status == 401) {
            msg = "Usuário ou senha incorretos"
            exibeErro(msg)
        } */
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

const logar = document.querySelector('#entrar').addEventListener('click',
function (e) {

    e.preventDefault();
    entrar();
})
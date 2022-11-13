const formulario = document.querySelector('form');
const Icpf = document.querySelector('#cpf');
const Isenha = document.querySelector('#senha');

const logar = document.querySelector('#entrar').addEventListener('click', entrar)



const url = 'http://localhost:8080/api/usuario/login'
function entrar() {
    axios.post(url, {
        cpf: Icpf.value,
        senha: Isenha.value
    })

.then((resp) => {
    resp.json().then((resposta) => {
        sessionStorage.setItem("token", resposta.token);
        const token = parseJwt(resposta.token);
        alert(token);
        
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

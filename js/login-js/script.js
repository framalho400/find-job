const formulario = document.querySelector('form');
const Icpf = document.querySelector('#cpf');
const Isenha = document.querySelector('#senha');





/* function entrar() {



    fetch('http://10.92.198.19:8080/usuario/login', {



        headers: {

            'Accept': 'application/json',

            'Content-Type': 'application/json'

        },

        method: 'GET',

        body: JSON.stringify({

            nome: Inome.value,

            cpf: Icpf.value,

            email: Iemail.value,

            senha: Isenha.value,

        }),

    })

        .then(function (res) {
            console.log(res);

        })

        .catch(function (res) {
            console.log(res);

        });

};




function limpar() {

    Inome.value = '';

    Icpf.value = '';

    Iemail.value = '';

    Isenha.value = '';

    IrepitaSenha.value = '';

}



formulario.addEventListener('submit', function (event) {
    if (Inome.value == '' || Icpf.value == '' || Iemail.value == '' || Isenha.value == '') {
        alert('Preencha todos os campos!');

    }
    else if (Isenha.value != IrepitaSenha.value) {
        alert('As senhas não coincidem!');

    }
    else {

        cadastrar();
        limpar();
        window.location.href = "../../templates/usuario/home.html";

    }
});
 */


const url = 'http://localhost:8080/api/usuario/'
function entrar() {
    axios.post(url, {
        cpf: Icpf.value,
        senha: Isenha.value
    })

.then((resp) => {
    resp.json().then((resposta) => {
        sessionStorage.setItem("token", resposta.token);
        const token = parseJwt(resposta.token);
        if (token == null) {
            window.location.href = "../prof/index.html";
        } else {
            window.location.href = "../prof/index.html";
        }
        
    }).catch((error) => {
        window.location.href = "../suporte/index.html";
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

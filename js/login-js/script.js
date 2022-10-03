const formulario = document.querySelector('form');
const Icpf = document.querySelector('#cpf');
const Isenha = document.querySelector('#senha');





function entrar() {



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

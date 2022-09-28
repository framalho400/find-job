//paginação
const proximo = document.querySelector('#proximo')
const voltar = document.querySelector('#voltar')
const cadastroP = document.querySelector('.cadastroP')
const cadastro = document.querySelector('.cadastro')

proximo.addEventListener('click', () => {

  if (Inome.value == '' || Icpf.value == '') {
    alert('Preencha todos os campos')
  }
    else {
    cadastro.classList.add('close')
    cadastroP.classList.add('open');
  }

})
voltar.addEventListener('click', () => {
  cadastro.classList.remove('close')
  cadastroP.classList.remove('open');
})




//api 
const formulario = document.querySelector('form');
const Icpf = document.querySelector('#cpf');
const Inome = document.querySelector('#nome');
const Iemail = document.querySelector('#email');
const Isenha = document.querySelector('#senha');
const IrepitaSenha = document.querySelector('#repitaSenha');





function cadastrar() {



  fetch('http://localhost:8080/usuario', {



    headers: {

      'Accept': 'application/json',

      'Content-Type': 'application/json'

    },

    method: 'POST',

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


}



formulario.addEventListener('submit', function (event) {
  event.preventDefault();
  if (Inome.value == '' || Icpf.value == '' || Iemail.value == '' || Isenha.value == '') {
    alert('Preencha todos os campos!');

  }
  else if (Isenha.value != IrepitaSenha.value) {
    alert('As senhas não coincidem!');

  }
  else {
    window.location.href = "../../templates/login/login.html";
    cadastrar();
    limpar();
  }
});
//paginação
const proximo = document.querySelector('#proximo')
const voltar = document.querySelector('#voltar')
const cadastroP = document.querySelector('.cadastroP')
const cadastro = document.querySelector('.cadastro')

proximo.addEventListener('click', () => {

  if (Inome.value == '' || Icpf.value == '') {
    let msgText = "Preencha todos os campos!";
    msgErro(msgText);
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



   fetch('http://10.92.198.19:8080/usuario', {
/*     fetch('http://localhost:8080/usuario', { */


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

  IrepitaSenha.value = '';

}



formulario.addEventListener('submit', function (event) {
  event.preventDefault();
   if (Inome.value == '' || Icpf.value == '' || Iemail.value == '' || Isenha.value == '') {
    let msgText = "Preencha todos os campos!";
    msgErro(msgText);

  }
  else if (Isenha.value != IrepitaSenha.value) {
        let msgText = "As senhas não coincidem";
        msgErro(msgText);
      }
  else { 
    let msgText = "Cadastrado com sucesso!";
    msgErro(msgText);
    cadastrar();
    limpar();
    window.location.href = "../../templates/usuario/home.html";
   }
   msgErro(msgText);
});

  
  
  
  
  function msgErro(msgText) {
      const msg = document.querySelector('.msg');

      msg.innerHTML = msgText;
  
      msg.classList.add('active');
      setTimeout(function(){
          msg.classList.remove('active');
      
        }, 5000);
  
  }
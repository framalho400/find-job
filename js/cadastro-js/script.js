//paginação
const proximo = document.querySelector('#proximo')
const voltar = document.querySelector('#voltar')
const cadastroP = document.querySelector('.cadastroP')
const cadastro = document.querySelector('.cadastro')

proximo.addEventListener('click', () => {

  cadastro.classList.add('close')
  cadastroP.classList.add('open');
  /*   if (Inome.value == '' || Icpf.value == '') {
      let msgText = "Preencha todos os campos!";
      msgErro(msgText);
    }
    else {
    }
   */
})
voltar.addEventListener('click', () => {
  cadastro.classList.remove('close')
  cadastroP.classList.remove('open');
})





const url = 'http://10.92.198.19:8080/usuario/especifico/';

const formulario = document.querySelector('form');
const Icpf = document.querySelector('#cpf');
const Inome = document.querySelector('#nome');
const Iemail = document.querySelector('#email');
const Isenha = document.querySelector('#senha');
const IrepitaSenha = document.querySelector('#repitaSenha');

function cadastrar() {
  axios.post(url, {
    nome: Inome.value,
    cpf: Icpf.value,
    email: Iemail.value,
    senha: Isenha.value


  })
    .then((response) => {
      alert(JSON.stringify(response.data));
      msgErro(msgText = "Cadastrado com sucesso!", color = "green");
    })
    .catch((error) => console.log(error));
    msgErro(msgText = `Usuario não cadastrado` , color = "red");
};

function limpar() {

  Inome.value = '';

  Icpf.value = '';

  Iemail.value = '';

  Isenha.value = '';

  IrepitaSenha.value = '';

}

formulario.addEventListener('submit', function (event) {
  event.preventDefault(event);
  if (Inome.value == '' || Icpf.value == '' || Iemail.value == '' || Isenha.value == '') {
    msgErro(msgText = "Preencha todos os campos!", color = "red");
  }
  else if (Isenha.value != IrepitaSenha.value) {
    msgErro(msgText = "As senhas não coincidem!");
  }
  else {
   
    cadastrar();
    limpar();
    /*   window.location.href = "../../templates/usuario/home.html"; */

  }
  
});


function msgErro(msgText, color) {

  const msg = document.querySelector('.msg');

  div = document.createElement('div');
  div.classList.add('msg');
  div.style.borderLeft  = `solid 10px ${color}`;
  div.innerText = msgText;
  document.body.appendChild(div); 
  

setTimeout(function () {
    div.classList.add('close')


}, 3000); // 5 segundos
setTimeout(function () {
  div.remove();
}, 40000); // 6 segundos


}

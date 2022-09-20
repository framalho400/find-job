
const proximo = document.querySelector('#proximo')
const voltar = document.querySelector('#voltar')
const cadastroP = document.querySelector('.cadastroP')
const cadastro = document.querySelector('.cadastro')

proximo.addEventListener('click', () => {
    cadastro.classList.add('close')
    cadastroP.classList.add('open');
  }) 
  voltar.addEventListener('click', () => {
    cadastro.classList.remove('close')
    cadastroP.classList.remove('open');
  }) 

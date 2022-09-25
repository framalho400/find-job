
const proximo = document.querySelector('#proximo')
const voltar = document.querySelector('#voltar')
const c1 = document.querySelector('.c1')
const c2 = document.querySelector('.c2')

proximo.addEventListener('click', () => {
    c1.classList.add('close')
    c2.classList.remove('close');
  }) 
  voltar.addEventListener('click', () => {
    c1.classList.remove('close')
    c2.classList.add('close');
  }) 

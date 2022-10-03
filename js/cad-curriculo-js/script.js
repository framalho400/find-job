
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


  const checkbox = document.querySelector('#checkExp')
  const dtInicio = document.querySelector('#dtInicio')
  const dtSaida = document.querySelector('#dtSaida')

  const checkboxCurso = document.querySelector('#checkCurso')
  const dtInicioCurso = document.querySelector('#dtInicioCurso')
  const dtSaidaCurso = document.querySelector('#dtSaidaCurso')

  //quando o checkbox for marcado, o campo de data de saida será desabilitado
  checkboxCurso.addEventListener('click', () => {
    if(checkboxCurso.checked){
      dtSaidaCurso.disabled = true;
    } else {
      dtSaidaCurso.disabled = false;
    }
          }
  )

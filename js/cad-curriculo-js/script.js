
var myModal = new bootstrap.Modal(document.getElementById('myModal'));
myModal.show();

/* paginação do curriculo */
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


//quando o checkbox for marcado, o campo de data de saida será desabilitado
const checkbox = document.querySelector('#checkExp')
const dtSaida = document.querySelector('#dtSaida')

const checkboxCurso = document.querySelector('#checkCurso')
const dtSaidaCurso = document.querySelector('#dtSaidaCurso')

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    dtSaida.disabled = true;
  } else {
    dtSaida.disabled = false;
  }
}
)

checkboxCurso.addEventListener('click', () => {
  if (checkboxCurso.checked) {
    dtSaidaCurso.disabled = true;
  } else {
    dtSaidaCurso.disabled = false;
  }
}
)



/* Função para adicionar  */
const formExpProf = document.querySelector('#formExpProf')
const nameEmpresa = document.querySelector('#empresaNome')

addExp.addEventListener('click', () => {
  if (nameEmpresa.value == "") {
  }
  else {
    var exp = document.createElement('div')
    exp.classList.add('exp')
    var texto = document.createTextNode(nameEmpresa.value)
    exp.appendChild(texto)

    const expProfissional = document.getElementById('expProf')
    expProfissional.appendChild(exp)
     nameEmpresa.value = ""


    //criando o botão de remover
    var btnExcluir = document.createElement('button')
    btnExcluir.classList.add('btnExcluir')
    btnExcluir.innerHTML = "<i class='bx bx-x-circle'></i>"
    exp.appendChild(btnExcluir)

    btnExcluir.addEventListener('click', () => {
      expProfissional.removeChild(exp)
    })
  }

})
{/* <i class='bx bx-pencil'></i> */}

const formFA = document.querySelector('#FormfromaAcad')
const nameFA = document.querySelector('#nomeCurso')

addFM.addEventListener('click', () => {
  if (nameFA.value == "") {
  }
  else {
    var exp = document.createElement('div')
    exp.classList.add('exp')
    var texto = document.createTextNode(nameFA.value)
    exp.appendChild(texto)

    const expProfissional = document.getElementById('formAcad')
    expProfissional.appendChild(exp)
  }
})


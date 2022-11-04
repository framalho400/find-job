/* const url = 'https://api.github.com/users/luizotavio/repos';

function getVagas() {
  axios.get(url, {
    headers: {
      'Accept': 'application/vnd.github.v3+json'
    }

  }).then(response => {
    console.log(response.data);
    response.data.forEach(vaga => {
      console.log(vaga.name);
      CriaVaga();
    });

  }).catch(error => {
    console.log(error);

    
  })
} */





data = {
  "vagas": [
    {
      "id": 1,
      "vaga": "Vaga 1",
      "empresa": "Empresa 1",
      "endereco": "Rua roque soares",
      "n": "163",
      "cep": "06730-000",
      "cidade": "VGP",
      "data": "Data 2",
      "uf": "SP",
      "requisitos": "Requisitos 1, Requisitos 2, Requisitos 3",
      "requisitos": "Desejaveis 1, Desejaveis 2, Desejaveis 3",
      "contato": "Telefone 2",
      "link": "Link 2",
      "wpp": "wpp 2",
      "beneficios": "Beneficios 1, Beneficios 2, Beneficios 3, Beneficios 4"

    },
  ]
}

vagas = data.vagas;
vagas.sort(function (b, a) {
  return a.id - b.id;
});

vagas.forEach(vaga => {
  criaVaga(vaga.nome, vaga.empresa, vaga.local, vaga.salario, vaga.requisitos, vaga.beneficios, vaga.contato, vaga.wpp, vaga.email);

});

/* 
const filterVagas = vagas.filter((valorAtual) => {
  return valorAtual.nome.includes('Vaga 1'); 
});
 */


//função para criar vaga
function criaVaga(
vaga, empresa, endereco, n, cep, cidade, uf, requisitos, desejaveis, contratacao, descricao, salario, beneficios, periodo, contato, wpp, email,

) {


  const principal = document.querySelector('.principal');
  const div = document.createElement('div');
  div.classList.add('div');
  div.innerHTML = `
    <div class="vaga">
        <h3>${vaga}</h3>
    </div>
    <div class="empresa">
        <h4>${empresa}</h4>
    </div>
    <div class="r">
    <div class="local">
        <h6>Local:</h6>
        <p>${endereco}, ${n}, ${cep},${cidade}, ${uf} </p>
    </div>
    <div class="salario">
        <h6>Salario:</h6>
        <p>${salario}</p>
    </div>
    </div>
    <div class="requisitos">
        <h6>Requisitos:</h6>
        <ul>
       ${requisitos.split(",").map(requisito => `<li>${requisito}</li>`).join('')}
        </ul>
    </div>


    `;


  /* ${requisitos.map(requisito => `<li>${requisito}</li>`).join('')} */
  button = document.createElement('button');
  button.classList.add('btn');
  button.classList.add('btn-primary');
  button.classList.add('bVerMais');
  button.innerHTML = 'Ver Mais..';

  div.appendChild(button);
  button.addEventListener('click', function () {

    var modal = new bootstrap.Modal(document.querySelector('#modalVaga'));
    modal.show();

    const conteudoModal = document.querySelector('#modalBody');
    conteudoModal.innerHTML = `<div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            <span>
                    <h4>Empresa:</h4>
                    <p>${empresa}</p>
                </span>    
            <span>
                    <h5>Local:</h5>
                    <p>${endereco}, ${n}, ${cep},${cidade}, ${uf} </p>
                </span>
                <span>
                    <h5>Requisitos:</h5>
                    <ul> 
                    ${requisitos.split(",").map(requisito => `<li>${requisito}</li>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Desejavel:</h5>
                    <ul>
                    ${desejaveis.split(",").map(desejavel => `<li>${desejavel}</li>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Regime de Contratação:</h5>
                    <p>${contratacao}</p>
                </span>
               
            </div>
            <div class="col-md-4 ms-auto">
                <span>
                    <h5>Salario:</h5>
                    <p>${salario}</p>

                </span>
                <span>
                    <h5>Beneficios:</h5>
                    <ul>
                    ${beneficios.split(",").map(beneficio => `<li>${beneficio}</li>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Periodo:</h5>
                    <p>${periodo}</p>
                </span>

            </div>
            <span>
                    <h5>Descriçao:</h5>
                    <p>${descricao}</p>
                </span>
        </div>
    </div>`
  })

  principal.appendChild(div);
  const div2 = document.createElement('div');
  div2.classList.add('aba');
  div2.innerHTML = `
    <i class='bx bx-chevron-left contats ' id="contats"></i>
  <div class="contatos ">
    <h4>Entre em contato conosco:</h4>
    <span>
        <label>Contato</label>
        <p>${contato}</p>
    </span>
    <span>
        <label>Whatsapp</label>
        <p>${wpp}</p>
    </span>
    <span>
        <label>Email</label>
        <p>${email}</p>
    </span>
</div>`
  div.appendChild(div2);
}






//função para abrir a modal


//função para abrir a aba da contatos
const abas = document.querySelectorAll('.aba');
const div = document.querySelectorAll('.div');
const modalLocal = document.querySelector('.modalLocal');



abas.forEach((aba) =>
  aba.addEventListener('click', (event) => {
    aba.classList.toggle('close')
  })
);

/* div.forEach((div) => {
  div.addEventListener('click', (e) => {


  })
});

 */



/*modal para criar vagas  */

const adiconaVaga = document.getElementById('adiconaVaga');

var addVaga = new bootstrap.Modal(document.getElementById('modalAddVaga1'));
var addVaga2 = new bootstrap.Modal(document.getElementById('modalAddVaga2'));

adiconaVaga.addEventListener('click', function () {
  addVaga.show();

  document.getElementById('proximoVaga').addEventListener('click', function () {
    addVaga.hide();
    addVaga2.show();
    document.getElementById('salvarVaga').addEventListener('click', function () {
      addVaga2.hide();
      /*      criaVaga(); */
    })
  })
})
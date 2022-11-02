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
      "nome": "Vaga 1",
      "requisitos": ["Descrição da vaga 1", "Descrição da vaga 2", "Descrição da vaga 3"],
      "empresa": "Empresa 1",
      "local": "Local 1",
      "salario": "Salário 1",
      "tipo": "Tipo 1",
      "data": "Data 1",
      "email": "Email 1",
      "contato": "Telefone 1",
      "link": "Link 1",
      "wpp": "wpp 1",
        "beneficios":["Beneficios 1", "Beneficios 2", "Beneficios 3", "Beneficios 4"] 
    },
    {
      "id": 2,
      "nome": "Vaga 2",
      "requisitos": ["Descrição da vaga 1", "Descrição da vaga 2", "Descrição da vaga 3"],
      "empresa": "Empresa 2",
      "local": "Local 2",
      "salario": "Salário 2",
      "tipo": "Tipo 2",
      "data": "Data 2",
      "email": "Email 2",
      "contato": "Telefone 2",
      "link": "Link 2",
      "wpp": "wpp 2",
      "beneficios":["Beneficios 1", "Beneficios 2", "Beneficios 3", "Beneficios 4"] 
      
    },
    {
      "id": 3,
      "nome": "Vaga 3",
      "requisitos": ["Descrição da vaga 1", "Descrição da vaga 2", "Descrição da vaga 3"],
      "empresa": "Empresa 3",
      "local": "Local 3",
      "salario": "Salário 3",
      "tipo": "Tipo 3",
      "data": "Data 3",
      "email": "Email 3",
      "contato": "Telefone 3",
      "link": "Link 3",
      "wpp": "wpp 3",
      "beneficios":["Beneficios 1", "Beneficios 2", "Beneficios 3", "Beneficios 4"] 
    },
    {
      "id": 4,
      "nome": "Vaga 4",
      "requisitos": ["Descrição da vaga 1", "Descrição da vaga 2", "Descrição da vaga 3"],
      "empresa": "Empresa 4",
      "local": "Local 4",
      "salario": "Salário 4",
      "tipo": "Tipo 4",
      "data": "Data 4",
      "email": "Email 4",
      "contato": "Telefone 4",
      "link": "Link 4",
      "wpp": "wpp 4",
      "beneficios":["Beneficios 1", "Beneficios 2", "Beneficios 3", "Beneficios 4"] 
    },
    {
      "id": 5,
      "nome": "Vaga 5",
      "requisitos": ["Descrição da vaga 1", "Descrição da vaga 2", "Descrição da vaga 3"],
      "empresa": "Empresa 5",
      "local": "Local 5",
      "salario": "Salário 5",
      "tipo": "Tipo 5",
      "data": "Data 5",
      "email": "Email 5",
      "contato": "Telefone 5",
      "link": "Link 5",
      "wpp": "wpp 5", 
      "beneficios":["Beneficios 1", "Beneficios 2", "Beneficios 3", "Beneficios 4"] 
    }





  ]
}

vagas = data.vagas;
vagas.forEach(vaga => {
    criaVaga(vaga.nome, vaga.empresa, vaga.local, vaga.salario, vaga.descricao, vaga.requisitos, vaga.beneficios, vaga.contato, vaga.wpp, vaga.email); 
 
});

/* 
const filterVagas = vagas.filter((valorAtual) => {
  return valorAtual.nome.includes('Vaga 1'); 
});
 */


//função para criar vaga
function criaVaga(vaga, empresa, local, salario, descricao, requisitos, beneficios, contato, wpp, email) {


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
        <p>${local}</p>
    </div>
    <div class="salario">
        <h6>Salario:</h6>
        <p>${salario}</p>
    </div>
    </div>
    <div class="requisitos">
        <h6>Requisitos:</h6>
        <ul>
         ${requisitos.map(requisito => `<li>${requisito}</li>`).join('')}
        </ul>
    </div>


    `;
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
                    <h5>Local:</h5>
                    <p>${local}</p>
                </span>
                <span>
                    <h5>Requisitos:</h5>
                    <ul> 
                    ${requisitos.map(requisito => `<li>${requisito}</li>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Regime de Contratação:</h5>
                    <p>CLT (efetivo), prestador de serviços (PJ)</p>
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
                    ${beneficios.map(beneficio => `<li>${beneficio}</li>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Horarios:</h5>
                    <p> 08:00 ás 17:00 Seg a Sex
                        <br> 08:00 ás 16:00 Sábado
                    </p>
                </span>

            </div>
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
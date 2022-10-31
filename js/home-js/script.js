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
            <li>Experiência com massagem</li>
            <li>Disponibilidade de horário</li>
            <li>Boa comunicação</li>
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
                    <p>Experiência com logística
                        Experiência com sistema totvs fly01</p>
                </span>
                <span>
                    <h5>Regime de Contratação:</h5>
                    <p>CLT (efetivo), prestador de serviços (PJ)</p>
                </span>
            </div>
            <div class="col-md-4 ms-auto">
                <span>
                    <h5>Salario:</h5>
                    <p>São Paulo - SP</p>

                </span>
                <span>
                    <h5>Beneficios:</h5>
                    <p>Tíquete Refeição, Tíquete Alimentação,
                        Vale Transporte, Vale Alimentação</p>
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




criaVaga(vaga = "Atendente", empresa = 'Casa de Massagens', local = 'Rua Algusta', salario = '12200R$', requisitos = 'Excel', beneficios = 'dasdsa', contato = 'dsds' );
criaVaga();
criaVaga();
criaVaga();

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
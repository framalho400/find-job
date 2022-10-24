






//função para criar vaga
function CriaVaga() {
  vaga  = "Massagista"
  empresa = "Casa de Massagem"; 
  local = 'Rua Algusta, 123';
  salario = "R$ 1.000,00";
  contato = '123456789';
  wpp = '123456789';
  email = '@gmail.com'
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
    <button type="button" class="btn btn-primary bVerMais">
        Ver Mais..
    </button>

    
    `;
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


CriaVaga();
CriaVaga();
CriaVaga();
CriaVaga();



//função para abrir a aba da contatos
const abas = document.querySelectorAll('.aba');

abas.forEach((aba) =>
  aba.addEventListener('click', (event) => {
    aba.classList.toggle('close')
  })
);

const div = document.querySelector('.div');
const modalLocal = document.querySelector('.modalLocal');

div.addEventListener('click', (e) => {
  local = 'Rua Algusta, 123';	
  var myModal = new bootstrap.Modal(document.getElementById('myModal'));
  modalLocal.innerHTML = `${local}`;
  
myModal.show();

})


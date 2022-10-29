const vaga = document.getElementById('vaga');
const empresa = document.getElementById('empresa');
const cardVagas = document.getElementById('cardVagas');
const cardEmpresa = document.getElementById('cardEmpresa');
empresa.addEventListener('click', function () {
    vaga.classList.add('close');
    cardVagas.classList.add('close');
    cardEmpresa.classList.remove('close');
    empresa.classList.remove('close');

})
vaga.addEventListener('click', function () {
    vaga.classList.remove('close');
    cardVagas.classList.remove('close');
    cardEmpresa.classList.add('close');
    empresa.classList.add('close');
})

const vagas = document.getElementById('vagasGroup');

function criaVaga() {
    const vaga = document.createElement('div');
    vaga.classList.add('card-body');
    vagas.appendChild(vaga);
    vaga.innerHTML = `
    <div class="vaga">
    <div class="header-vaga">
    <div class="nome-vaga">
        <h4>Nome da vaga</h4>
    </div>
    <div class="nome-empresa">
        <h4>Nome da empresa</h4>
    </div>
    <div class="info">
        <p>Um é pouco, dois é bom e três é ímpar.. O povo unido é gente pra
            caramba.. A
            vida é uma vai e vem que não tem volta.. Cemeteries are just garbage
            dumps
            filled with humans. Pobre só enche a barriga quando morre afogado..</p>
    </div>


</div>
<div class="body-vaga"></div>
<div class="footer-vaga">
    <div class="btn-verMais">
        <button type="button" class="btn btn-primary " data-bs-toggle="modal"
            data-bs-target="#exampleModal">
            Ver mais
        </button>
    </div>
    <div class="button">
        <div class="btn-aceitar">
            <button type="button" class="btn btn-success">Aceitar</button>
        </div>
        <div class="btn-recusar">
            <button type="button" class="btn btn-danger">Recusar</button>
        </div>
    </div>
</div>`
}
criaVaga();
criaVaga();

const empresas = document.getElementById('empresaGroup')
function criaEmpresa() {
    const empresa = document.createElement('div')
    empresa.classList.add('card-body');
    empresas.appendChild(empresa);
    empresa.innerHTML = `
    <div class="empresa">
    <div class="header-empresa">
        <div class="nome-empresa">
            <h4>Nome da Empresa</h4>
        </div>
        <div class="cnpj">
            <h4>CNPJ: 07.271.850/0001-73</h4>
        </div>
        <div class="descricao">
            <h5>Descrição:</h5>
            <p>Um é pouco, dois é bom e três é ímpar.. O povo unido é gente pra
                caramba.. A
                vida é uma vai e vem que não tem volta.. Cemeteries are just garbage
                dumps
                filled with humans. Pobre só enche a barriga quando morre afogado..
            </p>
        </div>


    </div>
    <div class="body-vaga"></div>
    <div class="footer-vaga">
        <div class="btn-verMais">
            <button type="button" class="btn btn-primary " data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                Ver mais
            </button>
        </div>
        <div class="button">
            <div class="btn-aceitar">
                <button type="button" class="btn btn-success">Aceitar</button>
            </div>
            <div class="btn-recusar">
                <button type="button" class="btn btn-danger">Recusar</button>
            </div>
        </div>
    </div>
</div>`

}
criaEmpresa();
criaEmpresa();
criaEmpresa();


const adiconaVaga = document.querySelectorAll('#adiconaVaga')

var addVaga = new bootstrap.Modal(document.getElementById('modalAddVaga1'));
var addVaga2 = new bootstrap.Modal(document.getElementById('modalAddVaga2'));

adiconaVaga.forEach(function (adiconaVaga) {
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
})

const adiconaEmpresa = document.querySelectorAll('#adiconaEmpresa')

var addEmpresa = new bootstrap.Modal(document.getElementById('modalAddEmpresa1'));
var addEmpresa2 = new bootstrap.Modal(document.getElementById('modalAddEmpresa2'));

adiconaEmpresa.forEach(function (adiconaEmpresa) {
    adiconaEmpresa.addEventListener('click', function () {
        addEmpresa.show();

        document.getElementById('proximoEmpresa').addEventListener('click', function () {
            addEmpresa.hide();
            addEmpresa2.show();
            document.getElementById('salvarEmpresa').addEventListener('click', function () {
                addEmpresa2.hide();
            /*     criaEmpresa();
 */            })
            document.getElementById('voltarEmpresa').addEventListener('click', function () {
                addEmpresa2.hide();
                addEmpresa.show();
            })
        })
    })
})


const InomeEmpresa = document.getElementById('nomeEmpresa');
const IemailEmpresa = document.getElementById('emailEmpresa');
const ItelEmpresa = document.getElementById('telEmpresa');
const IcnpjEmpresa = document.getElementById('cnpjEmpresa');
const IcepEmpresa = document.getElementById('cepEmpresa')
const Iendereco = document.getElementById('ruaEmpresa')
const IcidadeEmpresa = document.getElementById('cidadeEmpresa')
const IbairroEmpresa = document.getElementById('bairroEmpresa')
const IufEmpresa = document.getElementById('ufEmpresa')
const InEmpresa = document.getElementById('nEmpresa')
const IsenhaEmpresa = document.getElementById('senhaEmpresa');
const IconfSenhaEmpresa = document.getElementById('confSenhaEmpresa');
const salvarEmpresa = document.getElementById('salvarEmpresa');

url = 'http://localhost:8080/api/empresa    '
function cadEmpresa() {
   axios.post(url, {
        nome: InomeEmpresa.value,
        email: IemailEmpresa.value,
        telefone: ItelEmpresa.value,
        cnpj: IcnpjEmpresa.value,
        cep: IcepEmpresa.value,
        endereco: Iendereco.value,
        cidade: IcidadeEmpresa.value,
        bairro: IbairroEmpresa.value,
        uf: IufEmpresa.value,
        numero: InEmpresa.value,
        senha: IsenhaEmpresa.value,
        confSenha: IconfSenhaEmpresa.value


   })
   .then((response) => {
      console.log(JSON.stringify(response.data));
      msgErro(msgText = "Cadastrada com Sucesso !!", color = "green");
    })
    .catch((error) =>{ console.log(error) 
        msgErro(msgText = "Empresa não Cadastrada!", color = "red");
    });


}

salvarEmpresa.addEventListener('click', function(){
    cadEmpresa();
});







function msgErro(msgText, color) {
  
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
  }, 6000); // 6 segundos
    
  
  }
  
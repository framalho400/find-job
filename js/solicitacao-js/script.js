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
            document.getElementById('salvarVaga').addEventListener('click', function () {
                addEmpresa2.hide();
            /*     criaEmpresa();
 */            })
        })
    })
})

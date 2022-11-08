
//Paginação das vagas
const clickVaga = document.getElementById('vaga');
const clickEmpresa = document.getElementById('empresa');
const cardVagas = document.getElementById('cardVagas');
const cardEmpresa = document.getElementById('cardEmpresa');
clickEmpresa.addEventListener('click', function () {
    vaga.classList.add('close');
    cardVagas.classList.add('close');
    cardEmpresa.classList.remove('close');
    empresa.classList.remove('close');

})
clickVaga.addEventListener('click', function () {
    vaga.classList.remove('close');
    cardVagas.classList.remove('close');
    cardEmpresa.classList.add('close');
    empresa.classList.add('close');
})






const groupVagas = document.getElementById('vagasGroup');



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
            "desejaveis": "Desejaveis 1, Desejaveis 2, Desejaveis 3",
            "contratacao": "CLT",
            "descricao": "Descricao Descricao Descricao Descricao Descricao Descricao Descricao",
            "salario": "2.000",
            "periodo": "manhã",
            "contato": "Telefone 2",
            "email": "Email",
            "wpp": "wpp 2",
            "beneficios": "Beneficio 1, Beneficio 2, Beneficios 3, Beneficios 4"

        },
        {
            "id": 2,
            "vaga": "Vaga 2",
            "empresa": "Empresa 2",
            "endereco": "Rua roque soares",
            "n": "163",
            "cep": "06730-000",
            "cidade": "VGP",
            "data": "Data 2",
            "uf": "SP",
            "requisitos": "Requisitos 1, Requisitos 2, Requisitos 3",
            "desejaveis": "Desejaveis 1, Desejaveis 2, Desejaveis 3",
            "contratacao": "CLT",
            "descricao": "Descricao Descricao Descricao Descricao Descricao Descricao Descricao",
            "salario": "2.000",
            "periodo": "manhã",
            "contato": "Telefone 2",
            "email": "Email",
            "wpp": "wpp 2",
            "beneficios": "Beneficio 1, Beneficio 2, Beneficios 3, Beneficios 4"

        },
        {
            "id": 3,
            "vaga": "Vaga 3",
            "empresa": "Empresa 3",
            "endereco": "Rua roque soares",
            "n": "163",
            "cep": "06730-000",
            "cidade": "VGP",
            "data": "Data 2",
            "uf": "SP",
            "requisitos": "Requisitos 1, Requisitos 2, Requisitos 3",
            "desejaveis": "Desejaveis 1, Desejaveis 2, Desejaveis 3",
            "contratacao": "CLT",
            "descricao": "Descricao Descricao Descricao Descricao Descricao Descricao Descricao",
            "salario": "2.000",
            "periodo": "manhã",
            "contato": "Telefone 2",
            "email": "Email",
            "wpp": "wpp 2",
            "beneficios": "Beneficio 1, Beneficio 2, Beneficios 3, Beneficios 4"

        },
    ]
}

vagas = data.vagas;
vagas.sort(function (b, a) {
    return a.id - b.id;
});

vagas.forEach(vaga => {
    criaVaga(vaga.vaga, vaga.empresa, vaga.endereco, vaga.n, vaga.cep, vaga.cidade, vaga.uf, vaga.requisitos, vaga.desejaveis, vaga.contratacao, vaga.descricao, vaga.salario, vaga.beneficios, vaga.periodo, vaga.contato, vaga.wpp, vaga.email)


});
//Paginação das vagas
function criaVaga(vaga, empresa, endereco, n, cep, cidade, uf, requisitos, desejaveis, contratacao, descricao, salario, beneficios, periodo, contato, wpp, email,) {
    const sVaga = document.createElement('div');
    sVaga.classList.add('card-body');
    groupVagas.appendChild(sVaga);
    sVaga.innerHTML = `
    <div class="vaga">
    <div class="header-vaga">
    <div class="nome-vaga">
        <h4>Nome da vaga</h4>
    </div>
    <div class="nome-empresa">
        <h4>Nome da empresa</h4>
    </div>
    <div class="descircao">
        <h5>Descrição:</h5>
        <p>${descricao}</p>
    </div>


</div>
<div class="body-vaga"></div>
`
    const footerVaga = document.createElement('div')
    footerVaga.classList.add('footer-vaga')
    sVaga.appendChild(footerVaga)

    const divVerMais = document.createElement('div')
    divVerMais.classList.add('btn-verMais')
    footerVaga.appendChild(divVerMais)

    const verMais = document.createElement("button")
    verMais.classList.add('btn');
    verMais.classList.add('btn-primary');
    verMais.classList.add('btn-verMais');
    verMais.innerHTML = 'Ver Mais..';
    divVerMais.appendChild(verMais)
    


    const divbButton = document.createElement('div')
    divbButton.classList.add("button")
    footerVaga.appendChild(divbButton)

    const divAprovar = document.createElement('div')
    divAprovar.classList.add("btn-aceitar")
    divbButton.appendChild(divAprovar)

    const btnAprovar = document.createElement('button')
    btnAprovar.classList.add('btn')
    btnAprovar.classList.add('btn-success')
    btnAprovar.innerHTML ="Aprovar"
    divAprovar.appendChild(btnAprovar)
    btnAprovar.addEventListener('click', function () {
        msgErro(msgText="Vaga Aprovada", color="green")
        sVaga.remove()
        
    })

    const divRecusar = document.createElement('div')
    divRecusar.classList.add("btn-recusar")
    divbButton.appendChild(divRecusar)

    const btnRecusar = document.createElement('button')
    btnRecusar.classList.add('btn')
    btnRecusar.classList.add('btn-danger')
    btnRecusar.innerHTML ="Recusar"
    divRecusar.appendChild(btnRecusar) 

    btnRecusar.addEventListener('click', function () {
        msgErro(msgText="Vaga Recusada", color="green")
        sVaga.remove()
    })
    
    
    const closeModal = document.querySelectorAll('#closeModal')
    var modalV = new bootstrap.Modal(document.getElementById("modalVaga"));

    const conteudoModal = document.querySelector('#modalBody');


    verMais.addEventListener("click", function () {

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

                
                <span>
                <h5>Descriçao:</h5>
                <p>${descricao}</p>
            </span>
            </div>
           
        </div>
    </div>`
        modalV.show()
    })




    closeModal.forEach(close => {
        close.addEventListener("click", function () {
            modalV.hide()
        })
    })
/* 
    const aceitar = document.getElementById("aceitar")
    aceitar.addEventListener("click", function () {
    }) */
}


const adicionaVaga = document.querySelectorAll('#adiconaVaga')

var addVaga = new bootstrap.Modal(document.getElementById('modalAddVaga1'));
var addVaga2 = new bootstrap.Modal(document.getElementById('modalAddVaga2'));

adicionaVaga.forEach(function (adicionaVaga) {
    adicionaVaga.addEventListener('click', function () {
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







//================================================================ Empresa ==============================================================================================//

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

url = 'http://localhost:8080/api/empresa/vaga'
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
        senha: IsenhaEmpresa.value,



    })
        .then((response) => {
            console.log(JSON.stringify(response.data));
            msgErro(msgText = "Cadastrada com Sucesso !!", color = "green");
        })
        .catch((error) => {
            console.log(error)
            msgErro(msgText = "Empresa não Cadastrada!", color = "red");
        });


}

salvarEmpresa.addEventListener('click', function () {
    cadEmpresa();
});





//=========================================================== Menssagem de erro =============================================================================//

function msgErro(msgText, color) {
    
    const div = document.createElement('div');
    
    div.classList.add('msg');
    div.style.borderLeft = `solid 10px ${color}`;
    div.innerText = msgText;
    document.body.appendChild(div);
    
    
    setTimeout(function () {
        div.classList.add('close')
    }, 3000); // 5 segundos
    setTimeout(function () {
        div.remove();
    }, 6000); // 6 segundos

}
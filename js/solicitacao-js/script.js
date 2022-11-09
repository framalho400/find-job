
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

/* 

data = {
    "vagas": [
        {
            "id": 1,
            "tituloVaga": "Vaga 1",
            "cep": "12345678",
            "endereco": "Rua 1",
            "complemento": "Casa 1",
            "bairro": "Bairro 1",
            "cidade": "Cidade 1",
            "uf": "UF 1",
            "emailContato": "framalho400@gmail.com",
            "telefoneContato": "123456789",
            "exigencias": "Exigencia 1",
            "desejaveis": "Desejavel 1",
            "descricao": "Descrição 1",
            "requisitos": "Requisito 1",
            "cuidados": "Cuidado 1",
            "expiracao": "2021-09-01",
            "publicacao": "2021-08-01",
            "beneficios": "Beneficio 1",
            "site": "Site 1",
            "salario": "Salario 1",
            "ativo": true,
            "areaProfissional": "Area 1"
        },
        {
            "id": 2,
            "tituloVaga": "Vaga 2",
            "cep": "12345678",
            "endereco": "Rua 2",
            "complemento": "Casa 2",
            "bairro": "Bairro 2",
            "cidade": "Cidade 2",
            "uf": "UF 2",
            "emailContato": "",
            "telefoneContato": "123456789",
            "exigencias": "Exigencia 2",
            "desejaveis": "Desejavel 2",
            "descricao": "Descrição 2",
            "requisitos": "Requisito 2",
            "cuidados": "Cuidado 2",
            "expiracao": "2021-09-01",
            "publicacao": "2021-08-01",
            "beneficios": "Beneficio 2",
            "site": "Site 2",
            "salario": "Salario 2",
            "ativo": true,
            "areaProfissional": "Area 2"
        },
        ]
}
 */
const url = "http://localhost:8080/api/empresa/vaga";

function cadastraVagas() {
    const tituloVaga = document.getElementById('tituloVaga');
    const cep = document.getElementById('cep');
    const endereco = document.getElementById('endereco');
    /*    const complemento = document.getElementById('complemento').value; */
    const bairro = document.getElementById('bairro');
    const cidade = document.getElementById('cidade');
    const uf = document.getElementById('uf');
    const emailContato = document.getElementById('emailContato');
    const telefoneContato = document.getElementById('telefoneContato');
    /*     const exigencias = document.getElementById('exigencias').value; */
    const desejaveis = document.getElementById('desejaveis');
    const descricao = document.getElementById('descricao');
    const requisitos = document.getElementById('requisitos');
    const cuidados = document.getElementById('cuidados');
    const expiracao = document.getElementById('expiracao');
    const publicacao = document.getElementById('publicacao');
    const beneficios = document.getElementById('beneficios');
    const site = document.getElementById('site');
    const salario = document.getElementById('salario');
    /*     const ativo = document.getElementById('ativo').value; */
    const areaProfissional = document.getElementById('areaProfissional');

    axios.post(url, {
        tituloVaga: tituloVaga.value,
        cep: cep.value,
        endereco: endereco.value,
/*         complemento: complemento.value, */
        bairro: bairro.value,
        cidade: cidade.value,
        uf: uf.value,
        emailContato: emailContato.value,
        contato: telefoneContato.value,
/*         exigencias: exigencias.value, */
        desejaveis: desejaveis.value,
        descricao: descricao.value,
        requisitos: requisitos.value,
        cuidados: cuidados.value,
        expiracao: expiracao.value,
        publicacao: publicacao.value,
        beneficios: beneficios.value,
        site: site.value,
        salario: salario.value,
        ativo: false,
       
       
/*         ativo: ativo.value, */
        

    })
        .then(function (response) {
            console.log(response);
            location.reload();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getVagas() {
    axios.get(url)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            data = response.data;
          
            data.sort(function (b, a) {
                return a.id - b.id;
            });
            
            data.forEach(vaga => {
                if(vaga.ativo == true){
                criaVaga(vaga.id, vaga.tituloVaga, vaga.cep, vaga.endereco, vaga.complemento, vaga.bairro, vaga.cidade, vaga.uf, vaga.emailContato, vaga.whatsapp, vaga.contato, vaga.exigencias, vaga.desejaveis, vaga.descricao, vaga.requisitos, vaga.cuidados, vaga.expiracao, vaga.publicacao, vaga.beneficios, vaga.site, vaga.salario, vaga.ativo, vaga.areaProfissional);
                }else{
                    console.log("Vaga inativa");    
                }
                
            }); 
        }
        )
        .catch((error) => {
            console.log(error);
        })
            
}
    
getVagas();

//Aprovação de vagas
function aprovaVaga(id){
   
    axios.put(`http://localhost:8080/api/empresa/vaga/editavaga/${id}`, {ativo: false})

    .then(function (response) {
        console.log(JSON.stringify(response.data));
        
        
    })
    .catch(function (error) {
        console.log(error);
    });
}

//Reprovação de vagas 
function deleteVaga(id) {
    axios.put( `http://localhost:8080/api/empresa/vaga/excluir/${id}`)
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
            msgErro(msgText = "Aprovada com sucesso!!", color = "green");
        })
        .catch((error) => {
            msgErro(msgText = "Erro ao recusar!", color = "red")
            console.log(error)});
}



//Paginação das vagas
function criaVaga(id, tituloVaga, cep, endereco, complemento, bairro, cidade, uf, emailContato, whatsapp, contato, exigencias, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, ativo, areaProfissional) {
    const sVaga = document.createElement('div');
    sVaga.classList.add('card-body');
    groupVagas.appendChild(sVaga);
    sVaga.innerHTML = `
    <div class="vaga">
    <div class="header-vaga">
    <div class="nome-vaga">
        <h4>${tituloVaga}</h4>
    </div>
    <div class="nome-empresa">
        <h4></h4>
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
        console.log(id);
        aprovaVaga(id);
        
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
        console.log(id)
        deleteVaga(id)
        
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
                    <p></p>
                </span>    
            <span>
                    <h5>Local:</h5>
                    <p>${endereco},  ${cep},${cidade}, ${uf} </p>
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
                               </ul>
                </span>
                <span>
                    <h5>Regime de Contratação:</h5>
                    <p></p>
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
                    <p></p>
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
                cadastraVagas()
                addVaga2.hide();
                /*      criaVaga(); */
            })
        })
    })
})







//================================================================ Empresa ==============================================================================================//





function getEmpresa() {
    axios.get(url)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            data = response.data;
          
            data.sort(function (b, a) {
                return a.id - b.id;
            });
            
            data.forEach(empresa => {
                
                    criaEmpresa();
         

                
            }); 
        }
        )
        .catch((error) => {
            console.log(error);
        })
            
}
    
getVagas();


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



urlEmpresa = 'http://localhost:8080/api/empresa'
function cadEmpresa() {
    axios.post(urlEmpresa, {
        nome: InomeEmpresa.value,
        email: "framalho400@gmail.com",
        contato:/*  ItelEmpresa.value */ "123456789",
        cnpj: "",
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


//Paginação das vagas
const clickVaga = document.getElementById('vaga');
const clickEmpresa = document.getElementById('empresa');
const cardVagas = document.getElementById('cardVagas');
const cardEmpresa = document.getElementById('cardEmpresa');

function abaEmpresa() {
    vaga.classList.add('close');
    cardVagas.classList.add('close');
    cardEmpresa.classList.remove('close');
    empresa.classList.remove('close');


}
clickEmpresa.addEventListener('click', function () {
    abaEmpresa();
})

function abaVaga() {
    vaga.classList.remove('close');
    cardVagas.classList.remove('close');
    cardEmpresa.classList.add('close');
    empresa.classList.add('close');
}
clickVaga.addEventListener('click', function () {
    abaVaga();

})



const url = "http://10.92.198.40:8080/api/empresa/vaga";

function cadastraVagas() {
    const tituloVaga = document.getElementById('tituloVaga');

    const emailContato = document.getElementById('emailContato');
    const telefoneContato = document.getElementById('telefoneContato');
    const whatsapp = document.getElementById('wppVaga');
    const desejaveis = document.getElementById('desejaveis');
    const descricao = document.getElementById('descricao');
    const requisitos = document.getElementById('requisitos');
    const cuidados = document.getElementById('cuidados');
    const expiracao = document.getElementById('expiracao');
    const publicacao = document.getElementById('publicacao');
    const beneficios = document.getElementById('beneficios');
    const site = document.getElementById('site');
    const salario = document.getElementById('salario');
    /* const areaProfissional = document.getElementById('areaProfissional'); */

    var opcaoTextoAreaProfissional = areaProfissional.options[areaProfissional.selectedIndex].text;
    const contratacao = document.getElementById('contratacao');

    var opcaoTextoContratacao = contratacao.options[contratacao.selectedIndex].text;

    const periodo = document.getElementById('periodo');

    var opcaoTextoPeriodo = periodo.options[periodo.selectedIndex].text;

    axios.post(url, {
        tituloVaga: tituloVaga.value,
        emailContato: emailContato.value,
        whatsapp: whatsapp.value,
        contato: telefoneContato.value,
        desejaveis: desejaveis.value,
        descricao: descricao.value,
        requisitos: requisitos.value,
        cuidados: cuidados.value,
        expiracao: expiracao.value,
        publicacao: publicacao.value,
        beneficios: beneficios.value,
        site: site.value,
        salario: salario.value,
        contratacao: opcaoTextoContratacao,
        periodo: opcaoTextoPeriodo,
        ativo: false,




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
                if (vaga.ativo == false) {
                    criaVaga(vaga.id, vaga.tituloVaga, vaga.emailContato, vaga.contato, vaga.whatsapp, vaga.desejaveis, vaga.descricao, vaga.requisitos, vaga.cuidados, vaga.expiracao, vaga.publicacao, vaga.beneficios, vaga.site, vaga.salario, vaga.contratacao, vaga.periodo, vaga.ativo);
                } else {
                    console.log("Vaga inativa" + vaga.id);
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

//Reprovação de vagas 
function deleteVaga(id) {
    axios.delete(`http://10.92.198.40:8080/api/empresa/vaga/excluir/${id}`)
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
            msgErro(msgText = "Aprovada com sucesso!!", color = "green");
        })
        .catch((error) => {
            msgErro(msgText = "Erro ao recusar!", color = "red")
            console.log(error)
        });
}



function aprovaVaga(id, tituloVaga, emailContato, contato, whatsapp, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, contratacao, periodo, ativo) {
    urlAtivaVaga = "http://10.92.198.40:8080/api/empresa/vaga/editavaga/"
    axios.put(urlAtivaVaga + id, {
        id: id,
        tituloVaga: tituloVaga,
        emailContato: emailContato,
        contato: contato,
        whatsapp: whatsapp,
        desejaveis: desejaveis,
        descricao: descricao,
        requisitos: requisitos,
        cuidados: cuidados,
        expiracao: expiracao,
        publicacao: publicacao,
        beneficios: beneficios,
        site: site,
        salario: salario,
        contratacao: contratacao,
        periodo: periodo,
        ativo: true
    })

        .then(function (response) {
            console.log(JSON.stringify(response.data));
            location.reload();

        })
        .catch(function (error) {
            console.log(error);
        });
}

const groupVagas = document.getElementById('vagasGroup');

//Paginação das vagas
function criaVaga(id, tituloVaga, emailContato, contato, whatsapp, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, contratacao, periodo, ativo) {
    const sVaga = document.createElement('div');
    sVaga.classList.add('card-body');
    groupVagas.appendChild(sVaga);
    sVaga.innerHTML = `
<div class="vaga">
<div class="header-vaga">
    <div class="nome-vaga">
        <h4>${tituloVaga}</h4>
    </div>
</div>
<div class="body-vaga">
    <div class="descricao">
        <h5>Descrição:</h5>
        <p>${descricao}</p>
    </div>
    </div>
</div>
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
    btnAprovar.innerHTML = "Aprovar"
    divAprovar.appendChild(btnAprovar)
    btnAprovar.addEventListener('click', function () {

        aprovaVaga(id, tituloVaga, emailContato, contato, whatsapp, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, contratacao, periodo, ativo);
        console.log(id);

    })

    const divRecusar = document.createElement('div')
    divRecusar.classList.add("btn-recusar")
    divbButton.appendChild(divRecusar)

    const btnRecusar = document.createElement('button')
    btnRecusar.classList.add('btn')
    btnRecusar.classList.add('btn-danger')
    btnRecusar.innerHTML = "Recusar"
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
                    <p> </p>
                </span>
                <span>
                    <h5>Requisitos:</h5>
                    <ul> 
                    ${requisitos.split(",").map(requisito => `<p>${requisito}</p>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Desejavel:</h5>
                    <ul> </ul>
                </span>
                <span>
                    <h5>Regime de Contratação:</h5>
                    <p>${contratacao}</p>
                </span>
               

            </div>
            <div class="col-md-4 ms-auto" >
                <span>
                    <h5>Salario:</h5>
                    <p>${salario}R$</p>

                </span>
                <span>
                    <h5>Beneficios:</h5>
                    <ul>
                    ${beneficios.split(",").map(beneficio => `<p>${beneficio}</p>`).join('')}
                    </ul>
                </span>
                <span>
                    <h5>Periodo:</h5>
                    <p>${periodo}</p>
                </span>

                
                <span class="descricao">
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



urlEmpresa = 'http://10.92.198.40:8080/api/empresa'
function cadEmpresa() {
    axios.post(urlEmpresa, {
        nome: InomeEmpresa.value,
        cnpj: IcnpjEmpresa.value,
        email: IemailEmpresa.value,
        telefone: ItelEmpresa.value,
        endereco: Iendereco.value,
        cidade: IcidadeEmpresa.value,
        uf: IufEmpresa.value,
        cep: IcepEmpresa.value,
        numero: InEmpresa.value,
        bairro: IbairroEmpresa.value,
        senha: IsenhaEmpresa.value,
        ativo: false



    })
        .then((response) => {
            console.log(JSON.stringify(response.data));


        })
        .catch((error) => {
            console.log(error)

        });


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
                cadEmpresa()
                addEmpresa2.hide();
                location.reload();
            })
            document.getElementById('voltarEmpresa').addEventListener('click', function () {
                addEmpresa2.hide();
                addEmpresa.show();
            })
        })
    })
})


/*     criaEmpresa();
*/
const closeModal = document.querySelectorAll('#closeModal')
var modalV = new bootstrap.Modal(document.getElementById("modalVaga"));
closeModal.forEach(close => {
    close.addEventListener("click", function () {
        modalV.hide()
    })
})



urlEmpresa = "http://10.92.198.40:8080/api/empresa/"

function getEmpresa() {
    axios.get(urlEmpresa)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            data = response.data;

            data.sort(function (b, a) {
                return a.id - b.id;
            });

            data.forEach(empresa => {
                if (empresa.ativo ==
                    false) {

                    criaEmpresa(empresa.id, empresa.nome, empresa.cnpj, empresa.email, empresa.telefone, empresa.endereco, empresa.cidade, empresa.uf, empresa.cep, empresa.numero, empresa.bairro)
                }
                else {
                    console.log("Empresa ativa")
                }
            });

        }
        )
        .catch((error) => {
            console.log(error);
        })

}

getEmpresa();


function aprovaEmpresa(id, nome, cnpj, email, telefone, endereco, cidade, uf, cep, numero, bairro) {
    urlAprovaEmpresa = "http://10.92.198.40:8080/api/empresa/"
    axios.put(urlAprovaEmpresa + id, {
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        cnpj: cnpj,
        endereco: endereco,
        cidade: cidade,
        uf: uf,
        cep: cep,
        numero: numero,
        bairro: bairro,
        ativo: true


    })
        .then((response) => {
            console.log(JSON.stringify(response.data));
            location.reload();

            abaEmpresa();
        })
        .catch((error) => {
            console.log(error);
        })
}



function criaEmpresa(id, nome, cnpj, email, telefone, endereco, cidade, uf, cep, numero, bairro) {
    urlAprovaEmpresa = "http://10.92.198.40:8080/api/empresa/"
    axios.put(urlAprovaEmpresa + id, {  
        id: id,
        nome: nome,
        email: email,
        telefone: telefone,
        cnpj: cnpj,
        endereco: endereco,
        cidade: cidade,
        uf: uf,
        cep: cep,
        numero: numero,
        bairro: bairro,
        ativo: true

    })
        .then((response) => {
            console.log(JSON.stringify(response.data));
            location.reload();

            abaEmpresa();
        })
        .catch((error) => {
            console.log(error);
        })
}



function reprovaEmpresa(id) {
    urlReprovaEmpresa = "http://10.92.198.40:8080/api/empresa/excluirEmpresa/"
    axios.delete(urlReprovaEmpresa + id)

        .then((response) => {
            console.log(JSON.stringify(response.data));
            location.reload();

            vaga.classList.add('close');
            cardVagas.classList.add('close');
            cardEmpresa.classList.remove('close');
            empresa.classList.remove('close');


        })
        .catch((error) => {
            console.log(error);
        })
}
const groupEmpresa = document.getElementById('empresaGroup')

function criaEmpresa(id, nome, cnpj, email, telefone, endereco, cidade, uf, cep, numero, bairro) {
    const sEmpresa = document.createElement('div');
    sEmpresa.classList.add('card-body');
    groupEmpresa.appendChild(sEmpresa);

    sEmpresa.innerHTML = `
    <div class="empresa">
    <div class="header-empresa">
        <div class="nome-empresa">
            <h4>${nome}</h4>
        </div>
        <div class="cnpj">
            <h4>CNPJ: ${cnpj}</h4>
        </div>
       

</div>
<div class="body-vaga"></div>
`
    const footerEmpresa = document.createElement('div')
    footerEmpresa.classList.add('footer-empresa')
    sEmpresa.appendChild(footerEmpresa)

    const divVerMais = document.createElement('div')
    divVerMais.classList.add('btn-verMais')
    footerEmpresa.appendChild(divVerMais)

    const verMais = document.createElement("button")
    verMais.classList.add('btn');
    verMais.classList.add('btn-primary');
    verMais.classList.add('btn-verMais');
    verMais.innerHTML = 'Ver Mais..';
    divVerMais.appendChild(verMais)



    const divbButton = document.createElement('div')
    divbButton.classList.add("button")
    footerEmpresa.appendChild(divbButton)

    const divAprovar = document.createElement('div')
    divAprovar.classList.add("btn-aceitar")
    divbButton.appendChild(divAprovar)

    const btnAprovar = document.createElement('button')
    btnAprovar.classList.add('btn')
    btnAprovar.classList.add('btn-success')
    btnAprovar.innerHTML = "Aprovar"
    divAprovar.appendChild(btnAprovar)
    btnAprovar.addEventListener('click', function () {
        aprovaEmpresa(id, nome, cnpj, email, telefone, endereco, cidade, uf, cep, numero, bairro)
        console.log(id);


    })

    const divRecusar = document.createElement('div')
    divRecusar.classList.add("btn-recusar")
    divbButton.appendChild(divRecusar)

    const btnRecusar = document.createElement('button')
    btnRecusar.classList.add('btn')
    btnRecusar.classList.add('btn-danger')
    btnRecusar.innerHTML = "Recusar"
    divRecusar.appendChild(btnRecusar)

    btnRecusar.addEventListener('click', function () {
        reprovaEmpresa(id)
        console.log(id)


    })


    const conteudoModal = document.querySelector('#modalBody');


    verMais.addEventListener("click", function () {

        conteudoModal.innerHTML = `<div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            <span>
                    <h4>Empresa:</h4>
                    <p>${nome}</p>
                </span>    
            <span>
                    <h5>Local:</h5>
                    <p>${endereco}, ${bairro}, ${numero}, ${cep}</p>
                </span>
               

            </div>
            <div class="col-md-4 ms-auto">
                <span>
                    <h5>Email:</h5>
                    <p>${email}</p>

                </span>
                <span>
                    <h5>Telefone:</h5>
                    <p>${telefone}</p>
                </span>
              
            </div>
           
        </div>
    </div>`
        modalV.show()
    })


















    //=========================================================== Menssagem de erro =============================================================================//


}


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


function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('ruaEmpresa').value = ("");
    document.getElementById('bairroEmpresa').value = ("");
    document.getElementById('cidadeEmpresa').value = ("");
    document.getElementById('ufEmpresa').value = ("");
}



function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('ruaEmpresa').value = (conteudo.logradouro);
        document.getElementById('bairroEmpresa').value = (conteudo.bairro);
        document.getElementById('cidadeEmpresa').value = (conteudo.localidade);
        document.getElementById('ufEmpresa').value = (conteudo.uf);
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}



function pesquisacep(valor) {



    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');



    //Verifica se campo cep possui valor informado.
    if (cep != "") {



        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;



        //Valida o formato do CEP.
        if (validacep.test(cep)) {



            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('ruaEmpresa').value = "...";
            document.getElementById('bairroEmpresa').value = "...";
            document.getElementById('cidadeEmpresa').value = "...";
            document.getElementById('ufEmpresa').value = "...";



            //Cria um elemento javascript.
            var script = document.createElement('script');



            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';



            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);



        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }



};




// Formatar Salário



function formatarMoeda() {
    var elemento = document.getElementById('salario');
    var valor = elemento.value;



    valor = valor + '';
    valor = parseInt(valor.replace(/[\D]+/g, ''));
    valor = valor + '';
    valor = valor.replace(/([0-9]{2})$/g, ",$1");



    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }



    elemento.value = valor;
    if (valor == 'NaN') elemento.value = '';
}




// Formatar Telefone



function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}




// Formatar Dia



const dataPublicacao = document.getElementById('publicacao');
const dataExpiracao = document.getElementById('expiracao');



dataExpiracao.min = new Date().toISOString().split("T")[0];
dataPublicacao.min = new Date().toISOString().split("T")[0];






// JavaScript para que o input text receba apenas números



function onlynumber(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    //var regex = /^[0-9.,]+$/;
    var regex = /^[0-9.]+$/;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}







  var token = sessionStorage.getItem("token")

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  };
  
  const payload = parseJwt(token)
  
  if(payload.aprova == false || payload.ativo == false){
      window.location.replace('/../../../templates/login/login/login_empresa.html')
  }

const nomeEmpresa = document.querySelector('.nomeEmpresa');
const emailEmpresa = document.querySelector('.emailEmpresa');
const cnpjEmpresa = document.querySelector('.cnpjEmpresa');

nomeEmpresa.innerHTML = payload.name;
emailEmpresa.innerHTML = payload.email;
cnpjEmpresa.innerHTML = payload.CNPJ;


var modalEmpresa = new bootstrap.Modal(document.getElementById('modalEdit'));
document.querySelector('#editEmpresa').addEventListener('click', function () {
    modalEmpresa.show();
    document.getElementById('salvarEdit').addEventListener('click', function () {
        modalEmpresa.hide();
    });
}
)


    const url = "http://192.168.3.106:8080/api/empresa/vaga";

    function cadastraVagas() {
      
        const tituloVaga = document.getElementById('tituloVaga');
        const emailContato = document.getElementById('emailContato');
        const telefoneContato = document.getElementById('telefoneContato');
        const whatsapp = document.getElementById('wppVaga');
        const desejaveis = document.getElementById('desejaveis');
        const descricao = document.getElementById('descricao');
        const requisitos = document.getElementById('requisitos');
        const cuidados = document.getElementById('cuidados');
 
        const beneficios = document.getElementById('beneficios');
        const site = document.getElementById('site');
        const salario = document.getElementById('salario');
    
        const areaProfissional = document.getElementById('areaProfissional');
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
            desejavel: desejaveis.value,
            descricao: descricao.value,
            requisitos: requisitos.value,
            cuidados: cuidados.value,
            expiracao: "expiracao",
            publicacao: "publicacao",
            beneficios: beneficios.value,
            site: site.value,
            salario: salario.value,
            contratacao: opcaoTextoContratacao,
            periodo: opcaoTextoPeriodo,
            ativo: false,
            areaProfissional: opcaoTextoAreaProfissional,
    
            empresa: {
                id: payload.id,
                nome: payload.name,
            }})


            .then(function (response) {
                console.log(response);
                msgErro(msgText = "Cadastrado com sucesso!!", color = "green");
                location.reload();
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    const adicionaVaga = document.querySelector('#adiconaVaga')

    var addVaga = new bootstrap.Modal(document.getElementById('modalAddVaga1'));
    var addVaga2 = new bootstrap.Modal(document.getElementById('modalAddVaga2'));
    
    
        adicionaVaga.addEventListener('click', function () {
            addVaga.show();
    
            document.getElementById('proximoVaga').addEventListener('click', function () {
                addVaga.hide();
                addVaga2.show();
                document.getElementById('voltarVaga').addEventListener('click', function () {
                    addVaga2.hide();
                    addVaga.show();
                })
                document.getElementById('salvarVaga').addEventListener('click', function () {
                /*   if(tituloVaga.value == "" || emailContato.value == "" || telefoneContato.value == "" || whatsapp.value == "" || desejaveis.value == "" || descricao.value == "" || requisitos.value == "" || cuidados.value == "" || beneficios.value == "" || site.value == "" || salario.value == "" || areaProfissional.value == "" || contratacao.value == "" || periodo.value == ""){
                alert("Preencha todos os campos");
                
                  }
                  else{ */
                    cadastraVagas()
                    addVaga2.hide();
                /*   }
                }) */
                })
            })
        })

const nomeInput = document.querySelector('#nomeInput').value = payload.name;
const emailInput = document.querySelector('#emailInput').value = payload.email;
const telefoneInput = document.querySelector('#telInput').value = payload.telefone;
const cnpjIn = document.querySelector('#cnpjInput').value = payload.CNPJ;
const cepInput = document.querySelector('#cepInput').value = payload.cep;
const enderecoInput = document.querySelector('#enderecoInput').value = payload.endereco;
const nInput = document.querySelector('#nInput').value = payload.numero;
const complementoInput = document.querySelector('#complementoInput').value = payload.complemento;
const bairroInput = document.querySelector('#bairroInput').value = payload.bairro;
const cidadeInput = document.querySelector('#cidadeInput').value = payload.cidade;
const UfInput = document.querySelector('#UfInput').value = payload.uf; 
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
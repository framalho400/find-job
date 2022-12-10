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
console.log(payload.id);
console.log(payload.name);
console.log(payload.TipoUser);
const userText = document.querySelector('.user-text');
const userLogado = payload.name;
userText.innerHTML = `Olá, ${userLogado.split(' ')[0]}`;



const buscar = document.getElementById('buscar');

const getSearchedTodos = (search) => {
  const todos = document.querySelectorAll(".div");

  todos.forEach((todo) => {
    const todoTitle = todo.querySelector("h3").innerText.toLowerCase();

    todo.style.display = "flex";

    console.log(todoTitle);

    if (!todoTitle.includes(search)) {
      todo.style.display = "none";
    }
  });
};


buscar.addEventListener("keyup", (e) => {
  const search = e.target.value;

  getSearchedTodos(search);
});


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




function getVagas() {
  axios.get('http://localhost:8080/api/empresa/vaga')
    .then((response) => {
      console.log(JSON.stringify(response.data));
      data = response.data;

      data.sort(function (b, a) {
        return a.id - b.id;
      });


      data.forEach(vaga => {
        if(vaga.empresa.id == payload.id){
        if (vaga.ativo == true ) {
          criaVaga(vaga.id, vaga.tituloVaga, vaga.emailContato, vaga.contato, vaga.whatsapp, vaga.desejaveis, vaga.descricao, vaga.requisitos, vaga.cuidados, vaga.expiracao, vaga.publicacao, vaga.beneficios, vaga.site, vaga.salario, vaga.contratacao, vaga.periodo, vaga.ativo, vaga.empresa.id, vaga.empresa.nome, vaga.empresa.cnpj, vaga.empresa.email, vaga.empresa.telefone, vaga.empresa.whatsapp, vaga.empresa.site, vaga.empresa.endereco,vaga.empresa.numero, vaga.empresa.complemento,vaga.empresa.bairro, vaga.empresa.cidade, vaga.empresa.uf, vaga.empresa.cep, vaga.empresa.ativo,);
        }
      }


      });


      const aba = document.querySelectorAll('.aba');

      document.addEventListener('click', function (e) {
        const el = e.target;
        const parentEl = el.closest('div');

        if (el.classList.contains('contats')) {
          parentEl.classList.toggle('close');

        }

      });
    }
    )
    .catch((error) => {
      console.log(error);
    })

}



getVagas();


//função para criar vaga
function criaVaga(id, tituloVaga, emailContato, contato, whatsapp, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, contratacao, periodo, ativo, idEmpresa, nome, cnpj, email, telefone, whatsappEmpresa, siteEmpresa, endereco, numero, complemento, bairro, cidade, uf, cep, ativoEmpresa) {


  const principal = document.querySelector('.principal');
  const div = document.createElement('div');
  div.classList.add('div');
  div.innerHTML = `
    <div class="vaga">
        <h3>${tituloVaga}</h3>
    </div>
    <div class="empresa">
        <h4>${nome}</h4>
    </div>
    <div class="r">
    <div class="local">
        <h6>Local:</h6>
        <p></p>
    </div>
    </div>
    <div class="requisitos">
        <h6>Requisitos:</h6>
        <ul>
       ${requisitos.split(",").map(requisito => `<li>${requisito}</li>`).join('')}
        </ul>
    </div>`;


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

    document.getElementById('close').addEventListener('click', function () {
      modal.hide();
    })
    document.querySelector('.btn-close').addEventListener('click', function () {
      modal.hide();
    })
    const contatos = document.getElementById('contatos')

    var modalcontato = new bootstrap.Modal(document.getElementById('modalContato'));

    contatos.addEventListener('click', function () {
      modal.hide()
      modalcontato.show()
      document.getElementById('closeContato').addEventListener('click', function () {
        modalcontato.hide()
        modal.show()
      })

    })
    const conteudoContato = document.getElementById('conteudoContato');

    conteudoContato.innerHTML = `
    <div class="row g-1" >
    <div class="col-md-12">
        <label for="inputDate4" class="form-label">Contato:</label>
        <p>${contato}</p>
    </div>
    <div class="col-md-12">
    <label for="inputDate4" class="form-label">Whatsapp:</label>
    <p>${whatsapp}</p>
    </div>
<div class="col-md-12">
<label for="inputDate4" class="form-label">Email:</label>
<p>${emailContato}</p>

</div>
    </div>`


    const editVaga = document.getElementById('editVaga');



    editVaga.addEventListener('click', function () {
      addVaga.show();
      modal.hide();

      document.getElementById('proximoVaga').addEventListener('click', function () {
        addVaga.hide();
        addVaga2.show();
      })
      document.getElementById('salvarVaga').addEventListener('click', function () {
        addVaga2.hide();
        modal.show();
        /*      criaVaga(); */

      })

      document.getElementById('voltarVaga').addEventListener('click', function () {
        addVaga2.hide();
        addVaga.show();
      })
    })
  document.getElementById('nomeVaga').innerHTML = tituloVaga;

    conteudoModal.innerHTML = `<div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            <span>
                    <h4>Empresa:</h4>
                    <p>${nome}</p>
                </span>    
            <span>
                    <h5>Local:</h5>
                    <p>${endereco}, ${numero}, ${bairro}, ${cep}, ${uf}</p>
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
                    <p></p>
                </span>

                
                <span>
                <h5>Descriçao:</h5>
                <p>${descricao}</p>
            </span>
            </div>
           
        </div>
    </div>`
  })
  //função para abrir a aba da contatos


  principal.appendChild(div);
  const div2 = document.createElement('div');
  div2.classList.add('aba');
  div2.innerHTML = `
    <i class='bx bx-chevron-left contats ' ></i>
  <div class="contatos ">
    <h4>Entre em contato conosco:</h4>
    <span id="copia-contato">
        <label>Contato</label>
        <p id="copy-c">${contato}</p>
        
    </span>
    <span>
        <label>Whatsapp</label>
        <p>${whatsapp}</p>
        
    </span>
    <span>
        <label>Email</label>
        <p>${emailContato}</p>
        
    </span>
</div>`

  div.appendChild(div2);

  /*   const copy = document.querySelector('#copy-c');
    copy.select();
      document.execCommand('copy');
      alert('Copiado com sucesso!');
    const btnContato = document.getElementById('#copia-contato');
    btnContato.addEventListener('click', function () {
        alert("Contato copiado com sucesso!");
      
  
    })  */

  /* div.forEach((div) => {
    div.addEventListener('click', (e) => {
  
  
    })
  });
  
   */



  /*modal para criar vagas  */





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



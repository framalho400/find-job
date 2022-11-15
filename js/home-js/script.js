const user = document.getElementById('user');

const nome = localStorage.getItem('nome');

user.innerHTML = `Olá, ${nome.split(' ')[0]}`;


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



function getVagas() {
  axios.get('http://localhost:8080/api/empresa/vaga')
    .then((response) => {
      console.log(JSON.stringify(response.data));
      data = response.data;

      data.sort(function (b, a) {
        return a.id - b.id;
      });


      data.forEach(vaga => {
        if (vaga.ativo == false) {
          criaVaga(vaga.id, vaga.tituloVaga, vaga.emailContato, vaga.contato, vaga.whatsapp, vaga.desejaveis, vaga.descricao, vaga.requisitos, vaga.cuidados, vaga.expiracao, vaga.publicacao, vaga.beneficios, vaga.site, vaga.salario, vaga.contratacao, vaga.periodo, vaga.ativo);
        }
        else {
          console.log("Vaga inativa");
        }

      });


      const aba = document.querySelectorAll('.aba');

      document.addEventListener('click', function (e) {
        const el = e.target;
        const parentEl = el.closest('div');

        if (el.classList.contains('contats')) {
          parentEl.classList.toggle('close');
          localStorage.setItem('nome', "Felipe de jesus Ramalho");
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
function criaVaga(id, tituloVaga, emailContato, contato, whatsapp, desejaveis, descricao, requisitos, cuidados, expiracao, publicacao, beneficios, site, salario, contratacao, periodo, ativo) {


  const principal = document.querySelector('.principal');
  const div = document.createElement('div');
  div.classList.add('div');
  div.innerHTML = `
    <div class="vaga">
        <h3>${tituloVaga}</h3>
    </div>
    <div class="empresa">
        <h4></h4>
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

    document.getElementById('pdf').addEventListener('click', function () {

      var doc = new jsPDF()
      /* var imgData = "../../img/logo_principal.png" */
      
      doc.text(` ${tituloVaga}`, 10, 10)
    
    
      doc.save(`Vaga_${tituloVaga}.pdf`)
    /*   doc.addImage(imgData, 'JPEG', 15, 40, 180, 180); */
  
    })
    conteudoModal.innerHTML = `<div class="container-fluid">
        <div class="row">
            <div class="col-md-4">
            <span>
                    <h4>Empresa:</h4>
                    <p>${tituloVaga}</p>
                </span>    
            <span>
                    <h5>Local:</h5>
                    <p></p>
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
    <i class='bx bx-chevron-left contats ' id="contatos"></i>
  <div class="contatos ">
    <h4>Entre em contato conosco:</h4>
    <span>
        <label>Contato</label>
        <p>${contato}</p>
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



/* div.forEach((div) => {
  div.addEventListener('click', (e) => {


  })
});

 */



/*modal para criar vagas  */

const adiconaVaga = document.getElementById('adiconaVaga');
var modalVaga = new bootstrap.Modal(document.getElementById('modalVaga'))
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


const contatos = document.getElementById('contatos')

var modalcontato = new bootstrap.Modal(document.getElementById('modalContato'));

contatos.addEventListener('click', function () {
  modalVaga.hide()
  modalcontato.show()

})


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



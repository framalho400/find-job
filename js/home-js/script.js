const url = "http://localhost:8080/usuario/especifico/1";


//Essa função é responsável por fazer a requisição para o servidor
function getUser() {
  axios.get(url,{
    
  })
    .then((response) => {
      const data = response.data;
      const nome = data.nome;
      const email = data.email;
      //Aqui é onde você vai fazer o que quiser com os dados

      console.log(data);

      
      document.getElementById("user").innerHTML = JSON.stringify(data.nome);
      

    })
    .catch((error) => console.log(error));
}
//aqui estou chamando a função getUser() para que ela seja executada assim que a página for carregada
 getUser(); 

/* 

//função para abrir a aba da contatos 

/* aba = document.querySelector(".aba") 
aba.addEventListener("click", () => {
aba.classList.toggle('close')

;}) */
/* Função para copiar texto  */
/* 
function copiarTexto() {
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}
 */


//função para criar vaga
function CriaVaga(nome, email) {
 nome = "Casa de Massagem"; 
  local = 'Rua Algusta, 123';
  contato = '123456789';
  wpp = '123456789';
  /* email = '@gmail.com' */
  const principal = document.querySelector('.principal');
  const div = document.createElement('div');
  div.classList.add('div');
  div.innerHTML = `
    <div class="empresa">
        <h3>${nome}</h3>
    </div>
    <div class="local">
        <h4>Local:</h4>
        <p>${local}</p>
    </div>
    <div class="exigencias">
        <h4>Exigencias:</h4>
        <p> Lorem ipsum quis pretium morbi praesent nec integer sagittis curabitur, etiam euismod diam
            semper sit suspendisse nam fermentum quisque mattis, nec et torquent nunc eleifend semper
        </p>
    </div>
    <button type="button" class="btn btn-primary bVerMais" data-bs-toggle="modal"
        data-bs-target="#exampleModal">
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

//função para abrir a aba da contatos 

/* aba = document.querySelector(".aba") 
aba.addEventListener("click", () => {
aba.classList.toggle('close')

;}) */




/* Função para copiar texto  */

function copiarTexto() {
  let textoCopiado = document.getElementById("texto");
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999)
  document.execCommand("copy");
  alert("O texto é: " + textoCopiado.value);
}


/*  <div class="div">

 <div class="empresa">
     <h3>Nome de empresa</h3>
 </div>
 <div class="local">
     <h4>Local:</h4>
     <p>São paulo - SP</p>
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


 <!-- Aba Laterl esquerda -->
 <div class="aba">
     <i class='bx bx-chevron-left contats ' id="contats"></i>
     <div class="contatos ">
         <h4>Entre em contato conosco:</h4>
         <span>
             <label>Contato</label>
             <p>(11) 3003-2580</p>
         </span>
         <span>
             <label>Whatsapp</label>
             <p>(11) 3003-2580</p>


         </span>
         <span>
             <label>Email</label>
             <p>Emaiaqui@gmail.com</p>


         </span>


     </div>
 </div>
</div> */


add.addEventListener('click', () => {
  nome = "Felipe";
  var local = 'São Paulo - SP';
  const principal = document.querySelector('.principal');
  const div = document.createElement('div');
  div.classList.add('div');
  div.innerHTML = `
    <div class="empresa">
        <h3>${nome}</h3>
    </div>
    <div class="local">
        <h4>Local:</h4>
        <p>São paulo - SP</p>
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
    
    <div class="aba">
     <i class='bx bx-chevron-left contats ' id="contats"></i>
     <div class="contatos ">
         <h4>Entre em contato conosco:</h4>
         <span>
             <label>Contato</label>
             <p>(11) 3003-2580</p>
         </span>
         <span>
             <label>Whatsapp</label>
             <p>(11) 3003-2580</p>


         </span>
         <span>
             <label>Email</label>
             <p>Emaiaqui@gmail.com</p>


         </span>


     </div>
 </div>
    `

  principal.appendChild(div);
 const div2 = document.createElement('div');
  div2.classList.add('aba');
  div2.innerHTML = `
    <i class='bx bx-chevron-left contats ' id="contats"></i>
  <div class="contatos ">
    <h4>Entre em contato conosco:</h4>
    <span>
        <label>Contato</label>
        <p>(11) 3003-2580</p>
    </span>
    <span>
        <label>Whatsapp</label>
        <p>(11) 3003-2580</p>
    </span>
    <span>
        <label>Email</label>
        <p>Emaiaqui@gmail.com</p>
    </span>
</div>`
  div.appendChild(div2);

  
  
  const abas = document.querySelectorAll('.aba');
  
  abas.forEach((aba) =>
    aba.addEventListener('click', (event) => {
      aba.classList.toggle('close')
    })
  );
})

 
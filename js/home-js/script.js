
//função para abrir a aba da contatos 

/* aba = document.querySelector(".aba") 
aba.addEventListener("click", () => {
aba.classList.toggle('close')

;}) */
const abas = document.querySelectorAll('.aba');

abas.forEach((aba) =>
  aba.addEventListener('click', (event) => {
    aba.classList.toggle('close')
  }) 
);




    /* Função para copiar texto  */

    function copiarTexto() {
        let textoCopiado = document.getElementById("texto");
        textoCopiado.select();
        textoCopiado.setSelectionRange(0, 99999)
        document.execCommand("copy");
        alert("O texto é: " + textoCopiado.value);
    }



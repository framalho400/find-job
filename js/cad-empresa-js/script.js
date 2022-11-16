




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


//paginação
const proximo = document.querySelector("#proximo");
const proximo2 = document.querySelector("#proximo2");
const voltar = document.querySelector("#voltar");
const voltar2 = document.querySelector("#voltar2");
const cadastro_empresa = document.querySelector(".cadastro_empresa");
const cadastro_empresa2 = document.querySelector(".cadastro_empresa2");
const cadastro_empresa3 = document.querySelector(".cadastro_empresa3");









const formulario = document.querySelector('form');
const nome_Empresa = document.querySelector('#nome_Empresa');
const cnpj = document.querySelector('#cnpj');
const telefone_Empresa = document.querySelector('#telefone_Empresa');
const email_Empresa = document.querySelector('#email_Empresa');
const cep_Empresa = document.querySelector('#cep_Empresa');
const rua_Empresa = document.querySelector('#rua_Empresa');
const bairro_Empresa = document.querySelector('#bairro_Empresa');
const cidade_Empresa = document.querySelector('#cidade_Empresa');
const uf_Empresa = document.querySelector('#uf_Empresa');
const senha_Empresa = document.querySelector('#senha_Empresa');
const confirmarSenha_empresa = document.querySelector('#confirmarSenha_empresa');
const salvar = document.querySelector('#salvar');

const url = 'http://localhost:8080/api/empresa';

function cadastrar() {
  axios.post(url, {
    nome: nome_Empresa.value,
    cnpj: cnpj.value,
    telefone: telefone_Empresa.value,
    email: email_Empresa.value,
    cep: cep_Empresa.value,
    endereco: rua_Empresa.value,
    bairro: bairro_Empresa.value,
    cidade: cidade_Empresa.value,
    uf: uf_Empresa.value,
    senha : senha_Empresa.value,
    ativo: false,
    
  })
  .then((response) => {
    alert(JSON.stringify(response.data));
    msgErro('Cadastro realizado com sucesso!', '#00FF00');
})
.catch((error) => console.log(error));
};

function limpar() {
  nome_Empresa.value = '';
  cnpj.value = '';
  telefone_Empresa.value = '';
  email_Empresa.value = '';
  cep_Empresa.value = '';
  rua_Empresa.value = '';
  bairro_Empresa.value = '';
  cidade_Empresa.value = '';
  uf_Empresa.value = '';
  senha_Empresa.value = '';
  confirmarSenha_empresa.value = '';
}

 salvar.addEventListener('click', function (event) {
  event.preventDefault();
/*   if (nome_Empresa == '' || cnpj.value == '' || telefone_Empresa == '' || 
  email_Empresa == '' || cep_Empresa == '' || rua_Empresa == '' || 
  bairro_Empresa == '' || cidade_Empresa == '' || uf_Empresa == '' || 
  senha_Empresa == '') {
    let msgText = "Preencha todos os campos!";
    alert(msgText);    
  }
  else if (senha_Empresa != confirmarSenha_empresa.value) {
    let msgText = "As senhas não coincidem!";
    alert(msgText);
  }
  else {
    let msgText = "Cadastrado com sucesso!";
    let color = "green";
    alert(msgText, color);
    cadastrar();
    limpar();
  }
  alert(msgText); */
  cadastrar();

}); 







proximo.addEventListener("click", () => {
/*   if (
    nome_Empresa.value == "" ||
    cnpj.value == "" ||
    telefone_Empresa.value == "" ||
    email_Empresa.value == ""
  ) {
    alert(msgText = "Preencha todos os campos!")
  } else { */
    cadastro_empresa.classList.add("close");
    cadastro_empresa2.classList.remove("close");
/*   } */
});

proximo2.addEventListener("click", () => {
/*   if (
    cep_Empresa.value ==  "" ||
    rua_Empresa.value ==  "" ||
    bairro_Empresa.value == "" ||
    cidade_Empresa.value == "" ||
    uf_Empresa.value == ""
  ) { 
    alert(msgText = "Preencha todos os campos!")

  } else { */
    cadastro_empresa2.classList.add("close");
    cadastro_empresa3.classList.remove("close");
 /*  }  */ 
});

voltar.addEventListener("click", () => {
  cadastro_empresa.classList.remove("close");
  cadastro_empresa2.classList.add("close");
});

voltar2.addEventListener("click", () => {
  cadastro_empresa2.classList.remove("close");
  cadastro_empresa3.classList.add("close");
});

// Formatar e buscar CEP

function limpa_formulário_cep() {
  //Limpa valores do formulário de cep.
  document.getElementById("rua_Empresa").value = "";
  document.getElementById("bairro_Empresa").value = "";
  document.getElementById("cidade_Empresa").value = "";
  document.getElementById("uf_Empresa").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //Atualiza os campos com os valores.
    document.getElementById("rua_Empresa").value = conteudo.logradouro;
    document.getElementById("bairro_Empresa").value = conteudo.bairro;
    document.getElementById("cidade_Empresa").value = conteudo.localidade;
    document.getElementById("uf_Empresa").value = conteudo.uf;
  } //end if.
  else {
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, "");

  //Verifica se campo cep possui valor informado.
  if (cep != "") {
    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if (validacep.test(cep)) {
      //Preenche os campos com "..." enquanto consulta webservice.
      document.getElementById("rua_Empresa").value = "...";
      document.getElementById("bairro_Empresa").value = "...";
      document.getElementById("cidade_Empresa").value = "...";
      document.getElementById("uf_Empresa").value = "...";

      //Cria um elemento javascript.
      var script = document.createElement("script");

      //Sincroniza com o callback.
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

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
}

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

//Formatação do CNPJ
document.getElementById("cnpj").addEventListener("input", function (e) {
  var x = e.target.value
    .replace(/\D/g, "")
    .match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
  e.target.value = !x[2]
    ? x[1]
    : x[1] + "." + x[2] + "." + x[3] + "/" + x[4] + (x[5] ? "-" + x[5] : "");
});

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}
function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}
function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que não é dígito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}

// Formatar número de telefone
function id(el) {
  return document.getElementById(el);
}
window.onload = function () {
  id("telefone_Empresa").onkeyup = function () {
    mascara(this, mtel);
  };
};

// Validação de campos
// Primeiro form

nomeEmpresa = document.getElementById("nome_Empresa");
nomeEmpresa.addEventListener("keyup", function () {
  if (nomeEmpresa.value.length <= 3) {
    nomeEmpresa.style.borderBottom = "solid 5px red";
  } else {
    nomeEmpresa.style.borderBottom = "solid 5px green";
  }
});


cnpj.addEventListener("keyup", function () {
  if (cnpj.value.length < 18) {
    cnpj.style.borderBottom = "solid 5px red";
  } else {
    cnpj.style.borderBottom = "solid 5px green";
  }
});


telefone_Empresa.addEventListener("keyup", function () {
  if (telefone_Empresa.value.length <= 13) {
    telefone_Empresa.style.borderBottom = "solid 5px red";
  } else {
    telefone_Empresa.style.borderBottom = "solid 5px green";
  }
});

function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
   
    email_Empresa.style.borderBottom = "solid 5px green";
  } else {
   

    email_Empresa.style.borderBottom = "solid 5px red";
  }
}

// Segundo form


cep_Empresa.addEventListener("keyup", function () {
  if (cep_Empresa.value.length < 7) {
    cep_Empresa.style.borderBottom = "solid 5px red";
  } else {
    cep_Empresa.style.borderBottom = "solid 5px green";
  }
});


























function msgErro(msgText, color) {
  const msg = document.querySelector(".msg");
  msg.innerHTML = msgText;
  msg.classList.add("active");
  setTimeout(function () {
    msg.classList.remove("active");
    msg.style.borderLeft = `10px solid black ${color}`;
  }, 5000);
}

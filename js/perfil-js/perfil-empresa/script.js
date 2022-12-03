
  var token = sessionStorage.getItem("token")

  if (token == null) {
    window.location.replace('/../../templates/login/login/login_empresa.html')
 
   } 
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
  };
  
  const payload = parseJwt(token)

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


var newEmpresa = new bootstrap.Modal(document.getElementById('newAdm'));
document.querySelector('#addEmpresa').addEventListener('click', function () {
    newEmpresa.show();
    document.getElementById('salvaAdm').addEventListener('click', function () {
   
        newEmpresa.hide();
    });
})


/* 
const nomeEmpresa = document.querySelector('#nomeEmpresa').value = payload.name;
const emailEmpresa = document.querySelector('#emailEmpresa').value = payload.email;
const cnpjEmpresa = document.querySelector('#cnpjEmpresa').value = payload.CNPJ;
const cepEmpresa = document.querySelector('#cepEmpresa').value = payload.cep;
const enderecoEmpresa = document.querySelector('#enderecoEmpresa').value = payload.endereco;
const nEmpresa = document.querySelector('#nEmpresa').value = payload.numero;
const complementoEmpresa = document.querySelector('#complementoEmpresa').value = payload.complemento;
const bairroEmpresa = document.querySelector('#bairroEmpresa').value = payload.bairro;
const cidadeEmpresa = document.querySelector('#cidadeEmpresa').value = payload.cidade;
const UfEmpresa = document.querySelector('#UfEmpresa').value = payload.uf; */

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
  
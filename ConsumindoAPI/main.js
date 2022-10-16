const url = "http://localhost:8080/usuario/especifico/1";
const newUser = {
  nome: "João",
  email: "joao@gmail.com "
  }

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

        

      //aqui estou acessando o elemento com id "user" e inserindo o valor da variável data
      //que é o retorno da requisição
      //JSON é um formato de dados que é muito utilizado para troca de informações entre sistemas

      /* renderResults.textContent = JSON.stringify(data); */
      document.getElementById("user").innerHTML = JSON.stringify(data.nome);
      

    })
    .catch((error) => console.log(error));
}
//aqui estou chamando a função getUser() para que ela seja executada assim que a página for carregada
 getUser(); 

/* 
// Função para criar um novo usuário
function createUser() {
axios.post(url, newUser)

.then((response) => {
  alert(JSON.stringify(response.data));
})
.catch((error) => console.log(error));

}

 createUser();  */

const user = document.getElementById('user');
const adm = document.getElementById('adm');
const usuariosListagem = document.getElementById('usuariosListagem');
const administradoresListagem = document.getElementById('administradoresListagem');


adm.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.remove('close');
    adm.classList.remove('close');

})
user.addEventListener('click', function () {
    user.classList.remove('close');
    usuariosListagem.classList.remove('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
})

id = 0;
nome = "Felipe"
foto = "foto"
email = "framalho400@gmail.com"
celular = "11999999999"
button = ""
function criarlinha(id, nome, foto, email, celular) {
    const tbody = document.querySelector('#bodyUser');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdCelular = document.createElement('td');
    let tdExcluir = document.createElement('td');

    tdID.innerHTML = id;
    tdNome.innerHTML = nome;
    tdEmail.innerHTML = email;
    tdCelular.innerHTML = celular;
    tdExcluir.innerHTML = `<button type="button"><i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);


}





const url = "http://localhost:8080/usuario/especifico/";


//Essa função é responsável por fazer a requisição para o servidor
function getUser() {
    axios.get(url, {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                foto = data.foto;
                email = data.email;
                criarlinha(id, nome, foto, email);


            });

        
        })
        .catch((error) => console.log(error));
}

const state = getUser();
console.log(state);
/* 
}
/*  const data = getUser()
    let perPage = 5;
    const state ={
        page: 1,
        perPage,
        totalPage: Math.ceil(data.length / perPage)
    }
    const controles ={
    next(){
        state.page++;
        const lastPage = state.page > state.totalPage;
        if(lastPage){
            state.page--;
        }
    },
    prev(){
        state.page--;
        if(state.page < 1){
            state.page++;
        }
    },
    goTo(page){
        if(page < 1){
            page = 1;
        }
        state.page = +page;
        if(page > state.totalPage){
            state.page = state.totalPage;
        }
    },
    createListeners(){
        html.get('.first').addEventListener('click', () => {
            controles.goTo(1);
            update();
        })
        html.get('.last').addEventListener('click', () => {
            controles.goTo(state.totalPage);
            update();
        })
        html.get('.next').addEventListener('click', () => {
            controles.next();
            update();
        })
        html.get('.prev').addEventListener('click', () => {
            controles.prev();
            update();
        })

    }
 */

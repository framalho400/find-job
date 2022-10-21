
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


function criarlinha(id, nome, email, celular) {
    const tbody = document.querySelector('#bodyUser');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdCelular = document.createElement('td');
    let tdExcluir = document.createElement('td');
    let tdButton = document.createElement('button');



    tdID.innerHTML = id;
    tdNome.innerHTML = nome;
    tdEmail.innerHTML = email;
    tdCelular.innerHTML = celular;
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);

}





/* const url = "http://localhost:8080/usuario/especifico/";


//===== Essa função é responsável por fazer a requisição para o servidor e fazer a listagem dos usuários =====//
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
getUser();

 */


//============= Deletar Usuario ================== //
/* function deleteUser(id) {
    axios.delete(url + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}
 */






function criarlinhaAdm(id, nome, email, celular) {
    const tbody = document.querySelector('#bodyAdm');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdCelular = document.createElement('td');
    let tdExcluir = document.createElement('td');
    let tdButton = document.createElement('button');



    tdID.innerHTML = id;
    tdNome.innerHTML = nome;
    tdEmail.innerHTML = email;
    tdCelular.innerHTML = celular;
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);

}





function getAdm() {
    axios.get("http://10.92.198.21:8080/administrador", {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                foto = data.foto;
                email = data.email;
                
                criarlinhaAdm(id, nome, email);

                

            });


        })
        .catch((error) => console.log(error));
}


getAdm();



//================================================================================================== Paginação ==================================================================================================
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

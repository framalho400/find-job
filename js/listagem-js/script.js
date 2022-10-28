/* var token = sessionStorage.getItem("token")
if (token == null) {
    window.location.replace('../login/login/login.html')
} */

//paginação do user para o admin
const user = document.getElementById('user');
const adm = document.getElementById('adm');
const empresa = document.getElementById('empresa');
const usuariosListagem = document.getElementById('usuariosListagem');
const administradoresListagem = document.getElementById('administradoresListagem');
const empresasListagem = document.getElementById('empresasListagem');
adm.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.remove('close');
    adm.classList.remove('close');
    empresa.classList.add('close');
    empresasListagem.classList.add('close');
})
user.addEventListener('click', function () {
    user.classList.remove('close');
    usuariosListagem.classList.remove('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
    empresa.classList.add('close');
    empresasListagem.classList.add('close');
})
empresa.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
    empresa.classList.remove('close');
    empresasListagem.classList.remove('close');
})


//função para criar a linha da tabela de user
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

    //abre a modal de deletar
    var modalDelete = new bootstrap.Modal(document.querySelector('#deleteModal'));
    tdButton.addEventListener('click', function () {
        modalDelete.show(nome);
        const text = document.querySelector('#text');
        /*   text.innerHTML = `Deseja excluir o usuário ${nome}?`; */
        text.innerHTML = `<h4>Deseja mesmo excluir o usuário ${nome}?</h4>`;
        document.getElementById('deletConfirm').addEventListener('click', function () {
            deleteUser(id);
            modalDelete.hide();
        })
    })
    var cancel = document.querySelector('#cancelar');
    cancel.addEventListener('click', function () {
        modalDelete.hide();
    })

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

//Pega o usuario e chama a função para criar a linha da tabela
const url = "http://10.92.198.40:8080/api/usuario/";
function getUser() {
    axios.get(url, {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                email = data.email;
                criarlinha(id, nome, email);




            });


        })
        .catch((error) => console.log(error));
}
getUser();
const urlDel = "http://localhost:8080/api/usuario/excluir/";
function deleteUser(id) {
    axios.delete(urlDel + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}
deleteUser(id = 5)





/* função de listagem de adm */
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
    axios.get("http://10.92.198.40:8080/administrador", {

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




/* função de listagem de empresa */
function criarlinhaEmpresa(id, nome, email, celular) {
    const tbody = document.querySelector('#bodyEmpresa');
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
function getEmpresa() {
    axios.get("http://10.92.198.40:8080/api/empresa", {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                email = data.email;
                criarlinhaEmpresa(id, nome, email);

            });


        })
        .catch((error) => console.log(error));
}
getEmpresa();



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






function msgErro(msgText, color) {

    var div = document.querySelector('.msg');
    duv.classList.add('active');
    div.style.borderLeft = `solid 10px ${color}`;
    div.innerText = msgText;



    setTimeout(function () {
        div.classList.add('close')
    }, 3000); // 5 segundos
    setTimeout(function () {
        div.remove();
    }, 6000); // 6 segundos


}



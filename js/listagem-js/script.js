

function logado() {
   /*  var token = sessionStorage.getItem("token")
    if (token == null) {
        window.location.replace('../login/login/login.html')
    } */

    const nameUser = document.getElementById('nameUser');

    const nome = localStorage.getItem('nome');
    
    nameUser.innerHTML = `Olá, ${nome.split(' ')[0]}`;
}
logado();


//paginas do user para o admin e do empresa
const user = document.getElementById('user');
const adm = document.getElementById('adm');
const empresa = document.getElementById('empresa');
const vaga = document.getElementById('vaga');
const usuariosListagem = document.getElementById('usuariosListagem');
const administradoresListagem = document.getElementById('administradoresListagem');
const empresasListagem = document.getElementById('empresasListagem');
const vagasListagem = document.getElementById('vagasListagem');
adm.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.remove('close');
    adm.classList.remove('close');
    empresa.classList.add('close');
    empresasListagem.classList.add('close');
    vaga.classList.add('close');
    vagasListagem.classList.add('close');
})
user.addEventListener('click', function () {
    user.classList.remove('close');
    usuariosListagem.classList.remove('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
    empresa.classList.add('close');
    empresasListagem.classList.add('close');
    vaga.classList.add('close');
    vagasListagem.classList.add('close');
})
empresa.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
    empresa.classList.remove('close');
    empresasListagem.classList.remove('close');
    vaga.classList.add('close');
    vagasListagem.classList.add('close');
})
vaga.addEventListener('click', function () {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.add('close');
    adm.classList.add('close');
    empresa.classList.add('close');
    empresasListagem.classList.add('close');
    vaga.classList.remove('close');
    vagasListagem.classList.remove('close');
})



//================================================ Usuario ================================================= //
//função para criar a linha da tabela de user
function criarlinha(id, nome, email) {

    const tbody = document.querySelector('#bodyUser');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
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
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);

}

//Pega o usuario e chama a função para criar a linha da tabela
const url = "http://localhost:8080/api/usuario/";
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
            $(document).ready(function () {
                $('#tableUser').DataTable({
                    "language": {
                        "lengthMenu": "Exibir _MENU_ por pagina",
                        "zeroRecords": "Nada encontrado - desculpe",
                        "info": "Mostrando pagina _PAGE_ de _PAGES_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "Buscar:",
                        "paginate": {
                            "first": "First",
                            "last": "Last",
                            "next": "Proximo",
                            "previous": "Voltar"
                        }
                    }
                });
            });
        })
        .catch((error) => console.log(error));
}
getUser();

//função para deletar o usuario
const urlDel = "http://localhost:8080/api/usuario/excluir/";
function deleteUser(id) {
    axios.put(urlDel + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}



//================================================ Adminstrador ================================================= //




/* função de listagem de adm */
function criarlinhaAdm(id, nome, email) {
    const tbody = document.querySelector('#bodyAdm');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
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
            deleteAdm(id);
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
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);

}
function getAdm() {
    /* 10.92.198.40 */
    axios.get("http://localhost:8080/api/adm", {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                email = data.email;

                criarlinhaAdm(id, nome, email);



            });

            $(document).ready(function () {
                $('#tableAdm').DataTable({
                    "language": {
                        "lengthMenu": "Exibir _MENU_ por pagina",
                        "zeroRecords": "Nada encontrado - desculpe",
                        "info": "Mostrando pagina _PAGE_ de _PAGES_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "Buscar:",
                        "paginate": {
                            "first": "First",
                            "last": "Last",
                            "next": "Proximo",
                            "previous": "Voltar"
                        }
                    }
                });
            });
        })
        .catch((error) => console.log(error));
}
getAdm();
//função para deletar o adm
const urlDelAdm = "http://192.168.3.106/api/administrador/excluir/";
function deleteAdm(id) {
    axios.delete(urlDelAdm + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}






//================================================ Empresa ================================================= //


/* função de listagem de empresa */
function criarlinhaEmpresa(id, nome, email) {
    const tbody = document.querySelector('#bodyEmpresa');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
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
            console.log(id);
            desativaEmpresa(id);
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
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);

}
function getEmpresa() {
    /* 10.92.198.40 */
    axios.get("http://localhost:8080/api/empresa", {

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
            $(document).ready(function () {
                $('#tableEmpresa').DataTable({
                    "language": {
                        "lengthMenu": "Exibir _MENU_ por pagina",
                        "zeroRecords": "Nada encontrado - desculpe",
                        "info": "Mostrando pagina _PAGE_ de _PAGES_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "Buscar:",
                        "paginate": {
                            "first": "First",
                            "last": "Last",
                            "next": "Proximo",
                            "previous": "Voltar"
                        }
                    }
                });
            });

        })
        .catch((error) => console.log(error));
}
getEmpresa();
/* 
const urlDesativaEmpresa = "http://localhost:8080/api/empresa/desativar/id";
function deleteEmpresa(id) {
    axios.put(urlDesativaEmpresa + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
            msgErro(msgText = "Empresa deletada com sucesso", color = "green");
        })
        .catch((error) => {
            msgErro(msgText = "Erro !", color = "red")
            console.log(error)});
} */

function desativaEmpresa(id) {

    axios.put(`http://localhost:8080/api/empresa/desativar/${id}`, { ativo: false })

        .then(function (response) {
            console.log(JSON.stringify(response.data));


        })
        .catch(function (error) {
            console.log(error);
        });
}



/* const urlDelEmpresa = "http://localhost:8080/api/empresa/excluir/";
function deleteEmpresa(id) {
    axios.delete(urlDelEmpresa + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}

 */

//================================================ Vaga ================================================= //

/* função de listagem de vaga */
function criarlinhaVaga(id, nome, email) {
    const tbody = document.querySelector('#bodyVaga');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
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
            deleteVaga(id);
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
    tdButton.innerHTML = `<i class='bx bx-trash icon'></i>`;


    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdExcluir);
    tdExcluir.appendChild(tdButton);


}

function getVaga() {
    /* 10.92.198.40 */
    axios.get("http://localhost:8080/api/empresa/vaga", {

    })
        .then((response) => {
            const data = response.data;

            //popula a tabela com os dados do servidor
            data.map((data) => {
                nome = data.nome;
                id = data.id;
                email = data.email;
                criarlinhaVaga(id, nome, email);

            });

            $(document).ready(function () {
                $('#tableVaga').DataTable({
                    "language": {
                        "lengthMenu": "Exibir _MENU_ por pagina",
                        "zeroRecords": "Nada encontrado - desculpe",
                        "info": "Mostrando pagina _PAGE_ de _PAGES_",
                        "infoEmpty": "No records available",
                        "infoFiltered": "(filtered from _MAX_ total records)",
                        "search": "Buscar:",
                        "paginate": {
                            "first": "First",
                            "last": "Last",
                            "next": "Proximo",
                            "previous": "Voltar"
                        }
                    }
                });
            });
        })
        .catch((error) => console.log(error));
}
getVaga();

const urlDelVaga = "http://localhost:8080/api/vaga/excluir/";
function deleteVaga(id) {
    axios.delete(urlDelVaga + id, {

    })
        .then((response) => {
            const data = response.data;
            console.log(data);
            location.reload();
        })
        .catch((error) => console.log(error));
}




//================================================ Menssagem de Sucesso/Erro ================================================= //
function msgErro(msgText, color) {

    div = document.createElement('div');
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

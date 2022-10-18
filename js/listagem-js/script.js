
const user = document.getElementById('user');
const adm = document.getElementById('adm');
const usuariosListagem = document.getElementById('usuariosListagem');
const administradoresListagem = document.getElementById('administradoresListagem');
const url = "http://localhost:8080/usuario/especifico/11";

adm.addEventListener('click', function() {
    user.classList.add('close');
    usuariosListagem.classList.add('close');
    administradoresListagem.classList.remove('close');
    adm.classList.remove('close');

})
user.addEventListener('click', function() {
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
function criarlinha(id, nome, foto, email, celular ){
    const tbody = document.querySelector('#bodyUser');
    let tr = document.createElement('tr');
    tr.id = id;
    let tdID = document.createElement('td');
    let tdFoto = document.createElement('td');
    let tdNome = document.createElement('td');
    let tdEmail = document.createElement('td');
    let tdCelular = document.createElement('td');
    let tdButton = document.createElement('td');

    tdID.innerHTML = id;
    tdFoto.innerHTML = foto;
    tdNome.innerHTML = nome;
    tdEmail.innerHTML = email;
    tdCelular.innerHTML = celular;
    tdButton.innerHTML = "<button class='btn btn-danger'>Excluir</button>";

    
    tbody.appendChild(tr);
    tr.appendChild(tdID);
    tr.appendChild(tdFoto);
    tr.appendChild(tdNome);
    tr.appendChild(tdEmail);
    tr.appendChild(tdCelular);

 

}

criarlinha(id, nome, foto, email, celular);




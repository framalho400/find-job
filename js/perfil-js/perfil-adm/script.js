

var modalAdm = new bootstrap.Modal(document.getElementById('modalEdit'));
document.querySelector('#editAdm').addEventListener('click', function () {
    modalAdm.show();
    document.getElementById('salvarEdit').addEventListener('click', function () {
        modalAdm.hide();
    });
}
)


var newAdm = new bootstrap.Modal(document.getElementById('newAdm'));
document.querySelector('#addAdm').addEventListener('click', function () {
    newAdm.show();
    document.getElementById('salvaAdm').addEventListener('click', function () {
        newAdm.hide();
    });
})

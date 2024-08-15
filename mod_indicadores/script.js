function filtrarPorAsignatura() {
    var filtro = document.getElementById('filtroAsignatura').value.toUpperCase();
    var table = document.getElementById('indicadoresTable');
    var tr = table.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        var tdAsignatura = tr[i].getElementsByTagName('td')[1];
        if (tdAsignatura) {
            var txtValue = tdAsignatura.textContent || tdAsignatura.innerText;
            if (txtValue.toUpperCase().indexOf(filtro) > -1) {
                tr[i].style.display = '';
            } else {
                tr[i].style.display = 'none';
            }
        }
    }
}

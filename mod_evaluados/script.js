// mis_evaluados.js
function searchEvaluados() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('evaluadosTable');
    let tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td');
        let show = false;
        for (let j = 0; j < td.length; j++) {
            if (td[j]) {
                let textValue = td[j].textContent || td[j].innerText;
                if (textValue.toLowerCase().indexOf(filter) > -1) {
                    show = true;
                }
            }
        }
        if (show) {
            tr[i].style.display = '';
        } else {
            tr[i].style.display = 'none';
        }
    }
}

let res = document.getElementById("res");

function losango() {
    let D = parseInt(document.getElementById("D").value);
    let d = parseInt(document.getElementById("d").value);
    if(D > 0 && d > 0) {
        res.innerHTML = `O lado do losango é ${Math.sqrt(Math.pow(D, 2) + Math.pow(d, 2) / 4).toFixed(2)}.`;
    } else {
        alert("Valores Inválidos");
        location.reload();
    }
}

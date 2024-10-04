let res = document.getElementById("res");

function losango() {
    let D = parseInt(document.getElementById("D").value);
    let d = parseInt(document.getElementById("d").value);
    if(D > 0 && d > 0) {
        res.innerHTML = `A área do losango é ${(D * d) / 2}.`;
    } else {
        alert("Valores Inválidos");
        location.reload();
    }
}

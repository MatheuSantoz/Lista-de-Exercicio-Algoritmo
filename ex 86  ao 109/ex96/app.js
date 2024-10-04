let res = document.getElementById("res")
function f() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);
    let c = parseInt(document.getElementById("cod").value);
    if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0 || n3 > 10 || n3 < 0) {
        alert("digite uma nota válida entre 0 e 10");
        window.location.reload();
    } else {
        switch (c) {
            case 1:
                res.innerHTML += `Cód: 1<br>`;
                res.innerHTML += `Tipo: Aritmética<br>`;
                res.innerHTML += `n1: ${n1}, n2: ${n2} e n3: ${n3}<br>`;
                res.innerHTML += `Média: ${((n1 + n2 + n3) / 3).toFixed(1)}`;
                break;
            case 2:
                res.innerHTML += `Cód: 2<br>`;
                res.innerHTML += `Tipo: Ponderada<br>`;
                res.innerHTML += `n1: ${n1}, n2: ${n2} e n3: ${n3}<br>`;
                res.innerHTML += `Média: ${(((n1*3) + (n2*3) + (n3*4)) / 10).toFixed(1)}`;
                break;
            default:
                alert("digite um código válido");
                window.location.reload();
                break;
        }
    }
}
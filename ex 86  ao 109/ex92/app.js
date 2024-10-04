let res = document.getElementById("res");
function media() {
    let name = document.getElementById("name").value;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    if (n1 > 10 || n1 < 0 || n2 > 10 || n2 < 0) {
        alert("Erro nota inválida");
        window.location.reload();
    }
    if ((n1 + n2) / 2 > 7) {
        res.innerHTML += `Nome: ${name}<br>`;
        res.innerHTML += `Nota 1: ${n1} e Nota 2: ${n2}<br>`;
        res.innerHTML += `Média: ${(n1 + n2) / 2}<br>`;
        res.innerHTML += `Situação: Aprovado`;
    } else {
        res.innerHTML += `Nome: ${name}<br>`;
        res.innerHTML += `Nota 1: ${n1} e Nota 2: ${n2}<br>`;
        res.innerHTML += `Média: ${(n1 + n2) / 2}<br>`;
        res.innerHTML += `Situação: Reprovado`;
    }
}
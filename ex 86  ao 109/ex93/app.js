let res = document.getElementById("res");
function picole() {
    let t = parseInt(document.getElementById("tipo").value);
    let q = parseInt(document.getElementById("qntd").value);
    switch (t) {
        case 1:
            res.innerHTML += `Tipo: 1<br>`;
            res.innerHTML += `Preço: R$: 2.50<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(2.5 * q).toFixed(2)}`;
            break;
        case 2:
            res.innerHTML += `Tipo: 2<br>`;
            res.innerHTML += `Preço: R$: 5.60<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(5.6 * q).toFixed(2)}`;
            break;
        case 3:
            res.innerHTML += `Tipo: 3<br>`;
            res.innerHTML += `Preço: R$: 7.75<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(7.75 * q).toFixed(2)}`;
            break;
        default:
            alert("digite um tipo válido");
            window.location.reload();
            break;
    }
}
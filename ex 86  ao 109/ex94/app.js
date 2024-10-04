let res = document.getElementById("res");
function refeicao() {
    let c = parseInt(document.getElementById("cod").value);
    let q = parseInt(document.getElementById("qntd").value);
    switch (c) {
        case 100:
            res.innerHTML += `Código: 100<br>`;
            res.innerHTML += `Especificação: Cachorro quente<br>`;
            res.innerHTML += `Preço: R$10.00<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(10.00 * q).toFixed(2)}`;
            break;
        case 101:
            res.innerHTML += `Código: 101<br>`;
            res.innerHTML += `Especificação: Bauru simples<br>`;
            res.innerHTML += `Preço: R$11.50<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(11.50 * q).toFixed(2)}`;
            break;
        case 102:
            res.innerHTML += `Código: 102<br>`;
            res.innerHTML += `Especificação: Bauru c/ovo<br>`;
            res.innerHTML += `Preço: R$15.50<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(15.50 * q).toFixed(2)}`;
            break;
        case 103:
            res.innerHTML += `Código: 103<br>`;
            res.innerHTML += `Especificação: Hambúrguer<br>`;
            res.innerHTML += `Preço: R$16.50<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(10.00 * q).toFixed(2)}`;
            break;
        case 104:
            res.innerHTML += `Código: 104<br>`;
            res.innerHTML += `Especificação: Refrigerante<br>`;
            res.innerHTML += `Preço: R$5.50<br>`;
            res.innerHTML += `Quantidade: ${q}<br>`;
            res.innerHTML += `Total: R$ ${(5.50 * q).toFixed(2)}`;
            break;
        default:
            alert("Digite um número válido");
            window.location.reload();
            break;
    }
}
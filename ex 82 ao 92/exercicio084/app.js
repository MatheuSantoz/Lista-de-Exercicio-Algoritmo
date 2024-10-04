function desconto() {
    let valor = parseFloat(document.getElementById("valor").value)
    if (valor > 0) {
        let valorIni = valor;
        let desconto = valor * 0.09;
        document.getElementById("res").innerHTML = `Valor total da compra: R$${valorIni}<br>Valor com 9% de desconto: R$${valorIni - desconto}`;
    } else {
        alert("Total inválido!");
        location.reload();
    }
}
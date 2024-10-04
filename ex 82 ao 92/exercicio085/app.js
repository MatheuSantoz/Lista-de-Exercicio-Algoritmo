let valorUm = parseInt(prompt("Digite o valor 1:"));
let valorDo = parseInt(prompt("Digite o valor 2:"));
let res = document.getElementById("res")
let soma = valorUm + valorDo;
res.innerHTML += `Soma dos valores: ${soma}<br>`;
if (soma > 10) {
    res.innerHTML += `Valor da Raiz cúbica: ${Math.cbrt(soma).toFixed(2)}`;
}

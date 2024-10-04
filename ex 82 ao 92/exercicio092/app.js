let res = document.getElementById("res")
let name = prompt("Digite um nome");
let nota = 0;
let soma = 0;

for (let i = 1; i <= 2; i++) {
    nota = prompt(`Digite a ${i}º nota`);
    if(nota > 10) {
        alert("Uma das notas digitadas é maior que 10");
    }
    soma += nota / 2;
}

if(soma > 7) {
    res.innerHTML += `Nome: ${name}<br>Média: ${soma}<br>Situação: Aprovado!`;
        } else {
    res.innerHTML += `Nome: ${name}<br>Média: ${soma}<br>Situação: Reprovado!`;
}

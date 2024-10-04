let n1 = 0;
let n2 = 0;
let media = 0;
let apoio = true;
let res = document.getElementById("res")

let name = prompt(`Digite seu nome:`);

/* Executa o código uma vez */
do {
    n1 = parseFloat(prompt(`Digite a primeira nota`));
    /* Caso o usuario digite um valor maior que 10 ou menor que 0, a variavel apoio virará 'false' e entrará no looping
    até o usuario digitar um valor válido, mediante a condição dada.*/
    if (n1 > 10 || n1 < 0) {
        apoio = false;
    } else {
        apoio = true;
    }
} while (apoio == false);

/* Caso a condição for verdadeira, o looping acaba e pula pra próxima linha de código e executa outro looping */
do {
    n2 = parseFloat(prompt(`Primeira nota digitada: ${n1}\nDigite a segunda nota`));
    /* Se o usuario digitar um valor maior que 10 ou menor que 0, a condicão virará 'false' e entrará em looping novamente. OBS: O primeiro valor digitado já está armazenado, ou seja, não será pedido novamente. */
    if (n2 > 10 || n2 < 0) {
        apoio = false
    } else {
        apoio = true;
    }
} while (apoio == false);

/* Se todas as condições for verdadeiras, o usuário saíra do looping e o sistema fará a média das duas notas digitadas*/
media = (n1 + n2) / 2;
/* Se a média dos dois valores digitados for maior que '7' o usuário será aprovado, caso contrário, será reprovado.*/
if (media > 7) {
    res.innerHTML = `Aluno: ${name}<br>Média: ${media}<br>Situação: Aprovado`;
} else {
    res.innerHTML = `Aluno: ${name}<br>Média: ${media}<br>Situação: Reprovado`;
}


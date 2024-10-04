let n = parseInt(prompt("Digite um número"));

if (n > 0) {
do {
    for (let i = 0; i <= n; i++) {
        document.getElementById("res").innerHTML += `${i} `
    }
} while (i > 0) } else {
    alert("O numero deve ser maior que zero.")
    location.reload();
}
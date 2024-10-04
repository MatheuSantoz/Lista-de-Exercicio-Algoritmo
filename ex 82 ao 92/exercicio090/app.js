let soma = 0;
let a = 0;
let ns = parseInt(prompt("numero inicial"));
let ne = parseInt(prompt("numero final"));
if (ns > ne) {
    a = ns
    ns = ne
    ne = a
}
for (let i = ns; i <= ne; i++) {
    if (i % 2 == 0) {
    soma += i;
    document.getElementById("res").innerHTML += `${soma} `;
    }
}

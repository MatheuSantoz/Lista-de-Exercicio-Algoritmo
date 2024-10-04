function f() {
    let n = parseInt(document.getElementById("n").value);
    document.getElementById("res").innerHTML += `Quantos: ${n}<br> Saída: `;
    n *= 2;
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
        document.getElementById("res").innerHTML += `${i} `;
        }
    }
}
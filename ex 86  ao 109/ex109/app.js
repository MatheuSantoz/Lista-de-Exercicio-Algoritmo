let res = document.getElementById("res");
function n() {
    let n = parseInt(document.getElementById("n").value);
    res.innerHTML += `Número final: ${n}<br>`;
    res.innerHTML += `Saída: `;
    for (let i = 1; i < n; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            res.innerHTML += `${i} `;
        }
    }
}
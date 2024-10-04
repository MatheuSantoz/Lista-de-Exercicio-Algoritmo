let res = document.getElementById("res");
function n() {
    let l = parseInt(document.getElementById("l").value);
    let y = parseInt(document.getElementById("i").value);
    res.innerHTML += `Limite: ${l}<br>`;
    res.innerHTML += `Incremento: ${y}<br>`;
    res.innerHTML += `Saída: `;
    for (let i = 0; i <= l; i+=y) {
        res.innerHTML += `${i} `;
    }
}
let res = document.getElementById("res")
let xx = 0;
function f() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    res.innerHTML += `Limite inferior: ${n1}<br>`;
    res.innerHTML += `Limite superior: ${n2}<br>`;
    res.innerHTML += `Saída: `;
    if (n1 > n2) {
        xx = n1;
        n1 = n2;
        n2 = xx;
    }
    for (let i = n1; i <= n2; i++) {
        res.innerHTML += `${i} `;
    }
}
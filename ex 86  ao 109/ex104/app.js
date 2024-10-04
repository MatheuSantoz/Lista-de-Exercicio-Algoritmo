let res = document.getElementById("res")
let x = 0;
function f() {
    let n = parseInt(document.getElementById("n").value);
    res.innerHTML = `Quantos: ${n}<br>`;
    n*=2;
    res.innerHTML = `Número ímpares: `;
    for (let i = 1; i <= n; i++) {
        if(i % 2 == 1) {
            x+=i;
            res.innerHTML += `${i}, `;
        }
    }
    res.innerHTML += `<br>Saída: ${x}`;
}
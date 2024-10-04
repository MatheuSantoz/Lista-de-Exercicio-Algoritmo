let res = document.getElementById("res")
let x = 0;
let y = 0;
function f() {
    let n = parseInt(document.getElementById("n").value);
    res.innerHTML += `Limite superior: ${n}<br>`;
    res.innerHTML += `Multíplos de 5: `;
    for (let i = 1; i < n; i++) {
        if (i % 5 == 0) {
            y+=i;
            res.innerHTML += `${i} `;
        }
    }
    res.innerHTML += `<br>Saída: ${y}`;   
}
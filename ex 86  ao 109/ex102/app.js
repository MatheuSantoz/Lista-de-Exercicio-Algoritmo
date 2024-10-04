let res = document.getElementById("res");
let x = 0;
let y = 0;
function f() {
    let n = parseInt(document.getElementById("n").value);
    res.innerHTML += `Número: ${n}<br>`;
    res.innerHTML += `Saída: `;
    for (let i = 1; i <= n; i++) {
        y += i;
        res.innerHTML += `${i} `;
    }
    res.innerHTML += `- ${y}`;
}
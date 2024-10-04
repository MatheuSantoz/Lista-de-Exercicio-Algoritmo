let res = document.getElementById("res");
let y = 0;
let x = 0;
function n() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    res.innerHTML += `Limite inferior: ${n1}<br>`;
    res.innerHTML += `Limite superior: ${n2}<br>`;
    if ((n2 % n1) == 0) {
        for (let i = n1; i < n2; i++) {
            if ((n1 % i) == 0) {
                x += i;
            }
    }
    res.innerHTML += `Número: ${x}<br>`;
    res.innerHTML += `Saída: `;
    for (let t = n1 + x; t < n2; t+=x) { 
        res.innerHTML += `${t} `;
    }
    } else {
        console.log("ele NÃO é divisivel");
    }
   
}
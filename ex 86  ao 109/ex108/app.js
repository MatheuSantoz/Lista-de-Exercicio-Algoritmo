let res = document.getElementById("res")
let x = 0;
function n() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    res.innerHTML += `Limite inferior: ${n1}<br>`;
    n1+=1;
    res.innerHTML += `Limite superior: ${n2}<br>`;
    res.innerHTML += `Saída: `;
    for (let i = n1; i < n2; i++) {
        if(i % 2 == 0) {
            x+=i;
            res.innerHTML += `${i} `;
        }
    }
    res.innerHTML += `<br>Soma: ${x}`;
}
let res = document.getElementById("res");
let numeros = [];
let f;
let impar = [];
let par = [];
function n() {
    f = 0;
    let n1 = parseInt(document.getElementById("n1").value);
    numeros.push(n1);
    if(n1 % 2 == 0) {
        f = n1+5;
        par.push(f);
    } else {
        f = n1+8;
        impar.push(f);
    }
    res.innerHTML = `Números digitados: `;
    for (let i = 0; i < numeros.length; i++) {
        res.innerHTML += `${numeros[i]} `;
    }
    res.innerHTML += `<br>Par + 5 = ${par} `;
    res.innerHTML += `<br>ìmpar + 8 = ${impar} `;
}
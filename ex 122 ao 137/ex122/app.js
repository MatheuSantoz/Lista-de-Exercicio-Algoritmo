let res = document.getElementById("res");
let numeros = [];
let par = [];
let impar = [];
function n() {
    let n = parseInt(document.getElementById("n").value);
    numeros.push(n);
    if(n % 2 == 0) {
        par.push(n);
    } else {
        impar.push(n);
    }
    res.innerHTML = `Números digitados: `;
    for (let i = 0; i < numeros.length; i++) {
        res.innerHTML += `${numeros[i]} `;
        
    }
    res.innerHTML += `<br>Números pares: ${par}`;
    res.innerHTML += `<br>Números impares: ${impar} `;
}
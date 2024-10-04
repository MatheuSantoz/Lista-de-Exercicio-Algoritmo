let res = document.getElementById("res");
let numeros = [];
function n() {
    let n = parseInt(document.getElementById("n").value);
    numeros.push(n);
    res.innerHTML = `Número digitados: `;
    for (let i = 0; i < numeros.length; i++) {
        res.innerHTML += `${numeros[i]} `;
    }
    res.innerHTML += `<br>Maior número digitado: ${Math.max.apply(null, numeros)}`;
    res.innerHTML += `<br>Menor número digitado: ${Math.min.apply(null, numeros)}`;
    
}
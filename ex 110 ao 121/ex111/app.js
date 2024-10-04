let res = document.getElementById("res");
let numeros = [];
let x;
let y;
let z;
function n() {
    x = 0;
    y = 0;
    z = 0;
    let n = parseInt(document.getElementById("n").value);
    numeros.push(n);
    res.innerHTML = `Números digitados: `;
    for (let i = 0; i < numeros.length; i++) {
        res.innerHTML += `${numeros[i]} `;
        x+=numeros[i];
        if (numeros[i] % 2 == 0) {
            y+=numeros[i];
            z++;
        }
    }
    res.innerHTML += `<br>Soma dos números: ${x}`;
    res.innerHTML += `<br>Contagem dos números: ${numeros.length}`;
    res.innerHTML += `<br>Média dos números: ${x/numeros.length}`;
    res.innerHTML += `<br>Média dos números pares: ${y/z}`;
}
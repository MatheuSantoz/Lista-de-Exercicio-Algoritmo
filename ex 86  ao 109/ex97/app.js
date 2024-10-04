let res = document.getElementById("res");
function imc() {
    let kg = parseFloat(document.getElementById("kg").value);
    let alt = parseFloat(document.getElementById("alt").value);
    if(kg > 0 || alt > 0) {
        let imc = kg / (Math.pow(alt, 2));
        imc = imc.toFixed(2);
        console.log(imc);
        if (imc < 17) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Muito baixo do peso`;
        } else if (imc < 18.49) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Abaixo do peso`;
        } else if (imc < 24.99) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Peso normal`;
        } else if (imc < 34.99) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Obesidade I`;
        } else if (imc < 39.99) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Obesidade II (severa)`;
        } else if (imc > 40) {
            res.innerHTML += `Peso: ${kg}kg<br>`;
            res.innerHTML += `Altura: ${alt}m<br>`;
            res.innerHTML += `IMC: ${imc}<br>`;
            res.innerHTML += `Situação: Obesidade III (mórbida)`;
        }
    } else {
        alert("Insira um valor válido");
        window.location.reload();
    }
}

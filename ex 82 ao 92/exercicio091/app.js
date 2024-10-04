let res = document.getElementById("res");
function acao() {
    let n = parseInt(document.getElementById("n").value);
    res.innerHTML = ``;
    if (n > 0) {
        res.innerHTML = `O número digitado foi: ${n}<br>Sua raíz quadrada é ${Math.sqrt(n).toFixed(2)}.`;
    } else {
        res.innerHTML = `O número digitado foi: ${n}<br>Seu número elevado ao quadrado é ${Math.pow(n, 2)}.`;
    }
}
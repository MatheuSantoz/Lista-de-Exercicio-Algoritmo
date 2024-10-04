let res = document.getElementById("res");
function n() {
    let num = parseFloat(document.getElementById("num").value);
    res.innerHTML = ``;
    if (num > 0) {
        res.innerHTML += `O número digita é positivo e sua raíz quadrada é ${Math.sqrt(num)}`;
    } else {
        res.innerHTML += `O número digita é negativo e seu valor elevado ao quadrado é ${Math.pow(num, 2)}`;
    }
}
let res = document.getElementById("res");

function n() {
    let num = parseInt(document.getElementById("num").value);
    if (num <= 0) {
        alert("Digite um número válido");
        window.location.reload();
    }
    for (let i = 0; i <= num; i++) {
        res.innerHTML += `${i}<br>`;
    }
}
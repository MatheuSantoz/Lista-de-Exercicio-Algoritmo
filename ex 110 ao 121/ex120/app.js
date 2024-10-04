function n() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    if (n1 < 0 || n2 < 0 || n1 > 100 || n2 > 100) {
        alert("erro")
        window.location.reload();
    }
    document.getElementById("res").innerHTML = `Menor número digitado: ${Math.min(n1, n2)}`;
}
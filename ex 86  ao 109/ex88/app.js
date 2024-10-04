let res = document.getElementById("res");

function n() {
    let num = parseInt(document.getElementById("num").value)
    res.innerHTML = ``;
    
    if (num > 10) {
        alert("numero nao pode ser maior que 10");
        window.location.reload();
    } else {
        for (let i = 20; i >= num; i--) { 
        res.innerHTML += `${i}<br>`;
        }
    }
}
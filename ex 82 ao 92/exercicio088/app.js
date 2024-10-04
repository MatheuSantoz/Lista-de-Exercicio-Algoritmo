let n = parseInt(prompt("numero:"));

if (n < 10) {
    for (let i = 20; i >= n ; i--) {
        document.getElementById("res").innerHTML += `${i} ` 
    }
} else {
    alert("errado")
    location.reload()
}
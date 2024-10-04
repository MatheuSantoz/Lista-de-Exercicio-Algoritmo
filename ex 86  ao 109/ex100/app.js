function f() {
    let n = parseInt(document.getElementById("n").value);
    for (let i = 1; i < 15; i++) {
        if (i % 2 == 0) {
        } else {
            document.getElementById("res").innerHTML += `${i} `;
        }
    }
}
let res = document.getElementById("res");
let x = 0;
let y = 0;
function n() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    res.innerHTML = ``;
    if (n1 > n2) {
        y = n2;
        n2 = n1;
        n1 = y;
    }
    for (let i = n1; i <= n2; i++) {
        if (i % 2 == 0) {
            x += i;
            res.innerHTML += `${x}<br>`;
        }
    }
}
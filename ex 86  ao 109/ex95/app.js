let res = document.getElementById("res");
let x = 0;
function f() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    for (let i = n1 + 1; i < n2; i++) {
        res.innerHTML += `${i} `;
    }
}
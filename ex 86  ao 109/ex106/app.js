let res =  document.getElementById("res")
function f() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    
    for (let i = n1; i < n2; i++) {
        if (i % 6 == 0) {
            res.innerHTML += `${i} `;
        }
    }
}
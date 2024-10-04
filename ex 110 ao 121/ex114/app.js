let res = document.getElementById("res");
let x = 0;
function n() {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    if(n1 > n2) {
        n2 = x;
        n2 = n1;
        n1 = x; 
    }
    for (let i = n1; i < n2; i++) {
        if(i % 7 == 0) {
            document.getElementById("res").innerHTML += `${i} `;
        }  
    }
}
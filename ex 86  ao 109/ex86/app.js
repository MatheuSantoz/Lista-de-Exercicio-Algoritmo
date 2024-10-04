let res = document.getElementById("res");
let y = 0;

function soma() {

    for (let i = 0; i <= 100; i++) {
        // res.innerHTML += `${i} + `;
        y += i
        res.innerHTML += `${y}<br>`;
        console.log();
        
    }
    
}

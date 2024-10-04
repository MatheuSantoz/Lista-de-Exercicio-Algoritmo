let res = document.getElementById("res");
let y = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
        if (i % 5 == 0 && i % 7 == 0) {
            res.innerHTML += `${y+=i } `;
        }
    }
}

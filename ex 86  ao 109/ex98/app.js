let y = 0;
for (let i = 0 + 1; i <= 50; i++) {
    if (i % 2 == 0) {
        document.getElementById("res").innerHTML += `${y+=i} `;
    }
}
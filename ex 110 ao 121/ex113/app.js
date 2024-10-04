for (let i = 300; i > 30; i--) {
    if (i % 3 == 0 && i % 5 == 0) {
        document.getElementById("res").innerHTML += `${i} `;
    }
    
}
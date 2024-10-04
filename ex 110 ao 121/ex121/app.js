let res = document.getElementById("res")
for (let i = 0; i <= 10; i++) {
    res.innerHTML += `<br>${i}  `;
    if(i >= 9) {
        res.innerHTML += ` = GRAVE!!!!`;
    }
}
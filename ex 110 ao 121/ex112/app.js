let res = document.getElementById("res");
let soma = 0;
for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        res.innerHTML = `${soma+=i}`;
    }
}
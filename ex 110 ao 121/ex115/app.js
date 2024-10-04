let x = 0;
for (let i = 1; i < 200; i++) {
    if(i % 2 == 1){
        document.getElementById("res").innerHTML = `${x+=i}`;
    }
}
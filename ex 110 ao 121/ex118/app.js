let res = document.getElementById("res");
let array = []
function n() {
    let palavra = document.getElementById("palavra").value;
    array = palavra.split('');
    res.innerHTML = `${array.join("-")}`;
}
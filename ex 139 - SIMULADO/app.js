let res = document.getElementById("res");
let arrPalavra = [];
let contagemVogal = 0;
let contagemConsoante = 0;
let replaceVogal = "";
let replaceConsoante = "";
let apoio = [];
function palavra() {
    res.innerHTML = ``;
    let palavra = document.getElementById("matheus").value;
    res.innerHTML += `Palavra digitada: ${palavra}<br>`;
    arrPalavra = palavra.split("");
    res.innerHTML += `Palavra separada: ${arrPalavra.join("-")}<br>`;
    for (let i = 0; i < arrPalavra.length; i++) {
        apoio.push(arrPalavra[i]);
        if(arrPalavra[i].toUpperCase() == "A" || arrPalavra[i].toUpperCase() == "E" || arrPalavra[i].toUpperCase() == "I" || arrPalavra[i].toUpperCase() == "O" || arrPalavra[i].toUpperCase() == "U" ) {
            contagemVogal++;
            arrPalavra[i] = "@";

        } else {
            contagemConsoante++;
            apoio[i] = "#";
        }
    }
    replaceVogal = arrPalavra.join("");
    replaceConsoante = apoio.join("");
    res.innerHTML += `Quantidade de vogais: ${contagemVogal}<br>`;
    res.innerHTML += `Quantidade de consoantes: ${contagemConsoante}<br>`;
    res.innerHTML += `Substituindo vogais: ${replaceVogal}<br>`
    res.innerHTML += `Substituindo consoantes: ${replaceConsoante}`;
}
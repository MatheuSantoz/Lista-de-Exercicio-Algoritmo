document.getElementById("res").innerHTML += `
<tr>
    <td>POLEGADAS</td>
    <td>CENTIMETROS</td>
</tr>
`;
let x = 0;
for (let i = 1; i <= 20; i++) {
    x = 2.54 * i
    document.getElementById("res").innerHTML += `   
    <tr>
    <td>${i}</td>
    <td>${x}</td>
    </tr>`; 
}
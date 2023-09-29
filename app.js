function mostrarRelogio() {

let dataAtual = new Date();
console.log(dataAtual);

let dia = dataAtual.getDate().toString().padStart(2, '0');
let mes = dataAtual.getMonth().toString().padStart(2, '0');
let ano = dataAtual.getFullYear().toString().padStart(2, '0');

let hora = dataAtual.getHours().toString().padStart(2, '0');
console.log(hora);

let min = dataAtual.getMinutes().toString().padStart(2, '0')
console.log(min);

let seg = dataAtual.getSeconds().toString().padStart(2, '0')
console.log(seg);

document.getElementById('relogio').innerHTML = `${hora}:${min}:${seg}`
document.getElementById('data').innerHTML = `Data: ${dia}/${mes}/${ano}`

}

mostrarRelogio();

setInterval (
    mostrarRelogio, 1000
)
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

const inputAmigo = document.getElementById ("amigo");
const listaAmigos = [];
const alListaAmigos = document.getElementById("listaAmigos");
const alResultado = document.getElementById("resultado");
function agregarAmigo(){
    listaAmigos.push(inputAmigo.value);
    alListaAmigos.innerHTML += `<li>${inputAmigo.value}</li>`;
}

function sortearAmigo(){
    const random = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[random];
    alResultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
}
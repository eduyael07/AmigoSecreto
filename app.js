// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Definir el array de amigos
let amigos = [];

document.getElementById("agregar").addEventListener("click", agregarAmigo);
document.getElementById("sortear").addEventListener("click", sortearAmigo);

function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Cambié de "nombre" a "amigo"
    let nombre = inputNombre.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        amigos.push(nombre);
        inputNombre.value = "";
        actualizarLista();
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Cambié de "lista-amigos" a "listaAmigos"
    lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
    
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}


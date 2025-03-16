// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


document.addEventListener("DOMContentLoaded", function () {
    let amigos = [];

    document.getElementById("agregar").addEventListener("click", function () {
        let inputNombre = document.getElementById("nombre");
        let nombre = inputNombre.value.trim();

        if (nombre === "") {
            alert("Por favor, inserte un nombre.");
        } else {
            amigos.push(nombre);
            inputNombre.value = "";
            actualizarLista();
        }
    });

    document.getElementById("sortear").addEventListener("click", function () {
        if (amigos.length === 0) {
            alert("No hay amigos en la lista para sortear.");
            return;
        }
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = "Amigo sorteado: " + amigoSorteado;
    });

    function actualizarLista() {
        let lista = document.getElementById("lista-amigos");
        lista.innerHTML = ""; // Limpiar la lista antes de agregar nuevos elementos
        
        for (let i = 0; i < amigos.length; i++) {
            let elemento = document.createElement("li");
            elemento.textContent = amigos[i];
            lista.appendChild(elemento);
        }
    }
});

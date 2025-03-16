// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


document.addEventListener("DOMContentLoaded", function() {
    let amigos = []  //Inicializar lista para nombres

    document.getElementById("Agregar").addEventListener("click", function(){
        let inputNombre = document.getElementById("Nombre");
        let nombre = inputNombre.value.trim();

        if (nombre === ""){
            alert("Por favor, ingresa un nombre.");
        } else {
            amigos.push(nombre);
            inputNombre.value = "";
           actualizarLista();
        }
    });

    function actualizarLista() {
        let lista = document.getElementById("lista-amigos");
        lista.innerHTML = "";
        
        for (let i=0; i < amigos.length; i++) {
            let elemento = document.createElement("li");
            elemento.textContent = amigos[i];
            lista.appendChild(elemento);
        }
    }
}
);


console.log ("Hello World");

//Ejemplo de manipulación del DOM
//1. Traernos los elementos de HTML al JS

const titulo = document.getElementById("titulo");
const input = document.getElementById("entradaTexto")

//2. Modificar el contenido del título
function cambiarTexto() {

    console.log("Estoy dentro de la función cambiarTexto");
    console.log("título:", titulo.textContent);
    console.log("input:", input.value);

titulo.textContent = input.value;


}


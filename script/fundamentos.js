//Comentarios en línea
/* Comentarios en bloque */


//Imprimir mensajes en la consola
console.log("Hola mundo, desde JavaScript Fundamentos");


/* Ejercicio 1: Tabla de multiplicar con filtro de pares

Escribe un programa que le pida al usuario un número entero del 1 al 10. Luego muestra su tabla de multiplicar del 1 al 10, pero solo los resultados que sean pares. Al final, muestra cuántos resultados pares encontró. Todo debe aparecer en un solo alert(). */

// 1. Definir variables
// const PI = 3.1416; Ejemplo de variable constante
// const BULEANO = false; EJ: Booleanos
// let esCorrecto = false; EJ: Booleanos

let numeroEntero = 0;
let contadorPares = 0;
let mensaje = "";
let resultado = 0; // Variable auxiliar


// 2. El algoritmo
// 2.1 Solicitar número al usuario

numeroEntero = prompt("Ingrese un número entero del 1 al 10");
numeroEntero = parseInt(numeroEntero); // Convertir a entero
console.log(numeroEntero);

// 2.1 validación de número ingresado
// Condicional con operador lógico OR --> || --> si se cumple cualquiera de las condiciones, se ejecuta el bloque de código.
if (numeroEntero < 1 || numeroEntero > 10 || isNaN(numeroEntero)) {

    alert("Ingrese un número válido entre 1 y 10");
} else {

    // 2.3 Calcular tabla de multiplicar y filtrar pares
    // Concatenar -> \n -> salto de línea -> alt Gr + tecla después del 0
    mensaje = "La tabla de multiplicar del número " + numeroEntero + " con resultados pares es:\n";
    console.log(mensaje);

    for (let i = 1; i <= 10; i++) {
        resultado = numeroEntero * i;
        console.log(resultado);

        // filtrar resultados pares DENTRO del ciclo
        if (resultado % 2 === 0) {

            //acumular resultados pares
            mensaje += numeroEntero + " * " + i + " = " + resultado + "\n";
            contadorPares++;
        }
    }

console.log("Resultado final: " + resultado);
mensaje += "Total de resultados pares encontrados: " + contadorPares;

// 3. Imprimir resultados
alert (mensaje);

}


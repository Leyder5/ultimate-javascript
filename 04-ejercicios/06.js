// Ejercicio 6: función que devuelve la cantidad de números positivos de un array

function cantidadPositivos(arr) {
    let cantidad = 0;
    for (let elemento of arr) {
        if (elemento > 0) {
            cantidad++;
        }
    }
    return cantidad;
}

let arr = [1, -2, 3, 0, -5, 6, 7, -8, 9];
let resultado = cantidadPositivos(arr);
console.log(resultado);   // 5

// Ejercicio 3: función que recibe un arreglo y un índice
// y devuelve el elemento que está en ese índice

/**
 * indice validar que no sea menor a cero y que el elemento exista
 * en el array
 */


// function getbyIdx(arr, idx) {
//     if (idx < 0) {
//         return 'Elemento no existe';
//     }
//
//     if (arr.length <= idx) {
//         return 'Elemento no existe';
//     }
//
//     return arr[idx];
// }

// Versión final: como los dos if devuelven lo mismo, se juntan con ||
function getbyIdx(arr, idx) {
    if (idx < 0 || arr.length <= idx) {
        return 'Elemento no existe';
    }

    return arr[idx];
}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);                 // 2

console.log(getbyIdx([1, 2], 0));       // 1
console.log(getbyIdx([1, 2], 2));       // Elemento no existe
console.log(getbyIdx([1, 2], -1));      // Elemento no existe

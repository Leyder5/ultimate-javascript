// Ejercicio 01: paraAbsoluto
// función que recibe un array de números (negativos o positivos)
// y devuelve un array con sus valores absolutos

function paraAbsoluto(arr) {
    // map aplica la función a cada elemento
    return arr.map(n => Math.abs(n));
}

const numeros = [-2, 3, 3, 5, 5, -15];
console.log(paraAbsoluto(numeros));   // [ 2, 3, 3, 5, 5, 15 ]

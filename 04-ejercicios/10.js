// Ejercicio 10: función que crea un array de longitud n
// cuyos elementos son los números del 1 hasta n

function crearArray(n) {
    if (n <= 0) {
        return [];
    }

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    return arr;
}

let resultado = crearArray(8);
console.log(resultado);   // [ 1, 2, 3, 4, 5, 6, 7 ]

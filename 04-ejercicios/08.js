// Ejercicio 8: función toPairs
// recibe un array de objetos y devuelve un array de pares:
// un array de arrays donde cada par es [identificador, objeto completo]

function toPairs(arr) {
    let pairs = [];
    // for in devuelve el índice (idx), for of devolvería el elemento
    for (let idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let arr = [
    { id: 1, name: 'Chanchito feliz' },
    { id: 2, name: 'Chanchito triste' },
    { id: 3, name: 'Felipe' },
];

let resultado = toPairs(arr);
console.log(resultado);
// [
//   [ 1, { id: 1, name: 'Chanchito feliz' } ],
//   [ 2, { id: 2, name: 'Chanchito triste' } ],
//   [ 3, { id: 3, name: 'Felipe' } ]
// ]

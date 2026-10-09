// Ejercicio 9: la operación inversa del ejercicio 8
// recibe un array de pares y devuelve un array de objetos.


function toCollection(arr) {
    let collection = [];
    // for in porque necesitamos el índice para ir agregando a collection
    for (let idx in arr) {
        let elemento = arr[idx];
        // el objeto es el segundo elemento del par (índice 1)
        collection[idx] = elemento[1];
        // el id es el primer elemento del par (índice 0)
        collection[idx].id = elemento[0];
    }
    return collection;
}

let pairs = [
    [1, { name: 'Chanchito feliz' }],
    [2, { name: 'Chanchito triste' }],
    [3, { name: 'Felipe' }],
];

let resultado = toCollection(pairs);
console.log(resultado);
// [
//   { name: 'Chanchito feliz', id: 1 },
//   { name: 'Chanchito triste', id: 2 },
//   { name: 'Felipe', id: 3 }
// ]
// el id aparece después de name: JavaScript no asegura el orden de las propiedades

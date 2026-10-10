// Lección 81: Spread operator (...)
// Funcionalidad de ECMAScript 2015 (ES6): combina arrays de una forma
// más fácil de leer y más flexible que concat

const array1 = [1, 2];
const array2 = [5, 6];

// toma todos los elementos de los arrays y los coloca en el nuevo array
// se pueden agregar más elementos al comienzo, en medio o al final
const array3 = [0, ...array1, 3, 4, ...array2, 7, 8];
console.log(array3);   // [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

// también genera copias del array
const array4 = [...array3];   // lo mismo que array3.slice()
array3.pop();
console.log(array3, array4);
// [ 0, 1, 2, 3, 4, 5, 6, 7 ] [ 0, 1, 2, 3, 4, 5, 6, 7, 8 ]

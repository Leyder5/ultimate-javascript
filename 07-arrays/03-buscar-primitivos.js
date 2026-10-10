// Lección 76: Buscar primitivos

const letras = ['a', 'b', 1, 'c', 'd', 1];

// indexOf: devuelve el índice del PRIMER elemento que encuentra, o -1 si no está
console.log(letras.indexOf('c'));      // 3
console.log(letras.indexOf(1));        // 2

// lastIndexOf: busca desde el final hacia atrás
console.log(letras.lastIndexOf(1));    // 5

// forma antigua (fea) de saber si un elemento está en el array
console.log(letras.indexOf(1) !== -1);   // true

// includes: devuelve true o false
console.log(letras.includes('d'));     // true

// el tipo de dato importa: el string '1' no es el número 1
console.log(letras.indexOf('1'));      // -1

// segundo argumento: índice desde el que se comienza la búsqueda
// (lo reciben todos estos métodos)
console.log(letras.indexOf(1, 3));     // 5

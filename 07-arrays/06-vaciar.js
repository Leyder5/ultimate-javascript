// Lección 79: Vaciando arrays
// 4 formas de quitar todos los elementos de un array

// 1. reasignar a un array vacío (necesita let)
// PROBLEMA: si el array se asignó a otra variable, el contenido original sigue en memoria
let array = [1, 2];
let array2 = array;
array = [];
console.log(array, array2);   // [] [ 1, 2 ]

// 2. cambiar la longitud a cero (forma bastante común)
const arr2 = [1, 2];
arr2.length = 0;
console.log(arr2);   // []

// 3. splice desde 0 hasta la longitud del array (explícito y razonable)
const arr3 = [1, 2];
arr3.splice(0, arr3.length);
console.log(arr3);   // []

// 4. loop con pop: NO la utilices, es la más lenta y la que más recursos usa
// const arr4 = [1, 2];
// while (arr4.length > 0) {
//     arr4.pop();
// }

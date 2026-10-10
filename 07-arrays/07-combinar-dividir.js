// Lección 80: Combinando y dividiendo

const array1 = [1, 2];
const array2 = [3, 4];

// concat combina dos arrays y devuelve uno NUEVO (no modifica los originales)
const combinados = array1.concat(array2);
console.log(combinados, array1, array2);   // [ 1, 2, 3, 4 ] [ 1, 2 ] [ 3, 4 ]

// slice(índice inicio, índice final) el índice final no se incluye
const divididos = combinados.slice(1, 3);
console.log(divididos);   // [ 2, 3 ]

// sin el segundo argumento toma desde el índice hasta el final
console.log(combinados.slice(1));   // [ 2, 3, 4 ]

// sin argumentos genera una copia del array (no es una referencia)
const copia = combinados.slice();
console.log(copia, copia === combinados);   // [ 1, 2, 3, 4 ] false

// OJO: si el array contiene objetos, la copia sigue apuntando a los mismos objetos
const conObjetos = [{ name: 'Chanchito' }];
const copiaObjetos = conObjetos.slice();
copiaObjetos[0].name = 'Felipe';
console.log(conObjetos);   // [ { name: 'Felipe' } ]

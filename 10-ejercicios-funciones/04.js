// Ejercicio 04: suma con callback
// recibe una función y el resto de los parámetros; suma todos los parámetros
// y le pasa el resultado final a la función

function suma(fn, ...rest) {
    // rest es un array, así que podemos usar reduce
    const resultado = rest.reduce((acc, el) => acc + el);
    fn(resultado);
}

suma(r => {
    console.log(r);
}, 1, 2, 3, 4);   // 10

// Lección 16: Argumentos y parámetros
// a y b son PARÁMETROS (se definen en la función)
function suma(a, b) {
    console.log(arguments);  // todos los argumentos recibidos (forma antigua)
    return a + b;
}

// 5 y 6 son ARGUMENTOS (se pasan al llamar la función)
let resultado = suma(5, 6, 1, 2, 3);
console.log(resultado);      // 11

console.log(typeof suma);    // function

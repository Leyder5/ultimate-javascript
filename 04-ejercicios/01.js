// Ejercicio 1: función que recibe dos números y devuelve el mayor

// Solución con if / else
// function cualEsMayor(a, b) {
//     if (a > b) {
//         return a;
//     } else {
//         return b;
//     }
// }

// Solución más corta con operador ternario
function cualEsMayor(a, b) {
    return (a > b) ? a : b;
}

let mayor = cualEsMayor(10, 5);

console.log(mayor);   // 10

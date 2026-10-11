// Lección 102: Arguments

// function suma(a, b) {
//     return a + b;
// }
// console.log(suma(1, 2));         // 3
// console.log(suma(1));            // NaN (1 + undefined)
// console.log(suma());             // NaN (undefined + undefined)
// console.log(suma(1, 2, 3, 4));   // 3 (es válido: 3 y 4 quedan sin parámetro)

// arguments: palabra reservada con TODOS los argumentos que recibió la función
// parece un array pero NO lo es: es un objeto iterable { '0': 1, '1': 2, ... }
// (por eso no tiene map)

// forma "muy 2015" de sumar todos los argumentos
// function suma() {
//     let total = 0;
//     for (let valor of arguments) {
//         total += valor;
//     }
//     return total;
// }

// forma un poco mejor: Array.from convierte un iterable en array
function suma() {
    // si reduce no recibe valor inicial, usa el primer elemento como acumulador
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
}

console.log(suma(1, 2, 3, 4));   // 10

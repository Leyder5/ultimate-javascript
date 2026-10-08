// Lección 32: do while
// while evalúa la condición ANTES; do while la evalúa DESPUÉS
// (por eso do while siempre se ejecuta al menos una vez)
let i = 2;

// while (i < 2) {           // no imprime nada: 2 no es menor que 2
//     if (i % 2 === 0) {
//         console.log('Número par', i);
//     }
//     i++;
// }

do {
    if (i % 2 === 0) {
        console.log('Número par', i);   // imprime "Número par 2"
    }
    i++;
} while (i < 2);

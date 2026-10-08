// Lección 30: while
// Imprime los números pares menores que 10
let i = 0;

while (i < 10) {
    if (i % 2 === 0) {
        console.log('Número par', i);
    }
    i++;   // siempre fuera del if para no crear un loop infinito
}

console.log('Fuera del while');

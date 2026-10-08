// Lección 36: continue y break
let i = 0;

while (i < 6) {
    i++;

    if (i === 2) {
        continue;   // se salta el resto de esta iteración
    }

    if (i === 4) {
        break;      // sale del loop por completo
    }

    console.log(i); // imprime 1 y 3
}

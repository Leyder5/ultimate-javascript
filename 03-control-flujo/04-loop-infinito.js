// Lección 31: Loops infinitos
// Si se comenta la línea i++, la condición nunca deja de cumplirse
// y el navegador se queda colgado. ¡Cuidado!
let i = 0;

while (i < 10) {
    console.log(i);
    i++; // comentar esta línea para ver el loop infinito
}

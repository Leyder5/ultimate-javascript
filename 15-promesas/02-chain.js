let promesa1 = new Promise((res, rej) => {                           // por convención: res = resolve, rej = reject
    res(12);
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1.then(valor => {                                             // valor = 12; then también devuelve una promesa
    if (valor > 10) {
        return promesa2;                                             // si retornamos una promesa, su resultado (15)
    }                                                                // se inyecta en el siguiente then
}).then(valor2 => {                                                  // valor2 = 15 (si retornáramos un valor normal, llegaría ese)
    return valor2;                                                   // y así se pueden seguir encadenando
})

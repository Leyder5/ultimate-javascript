let promesa1 = new Promise((res, rej) => {
    res(5);                                                          // ahora la promesa 1 se resuelve con 5
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1
    .then(valor => {
        if (valor > 10) {
            return promesa2;
        }

        // return Promise.reject('Valor menor que 10');              // método estático: crea una promesa YA rechazada (salta al catch)
        return Promise.resolve(555);                                 // método estático: crea una promesa YA resuelta (sigue la cadena)
    })
    .then(valor2 => {
        console.log('segunda promesa', valor2);                      // segunda promesa 555
        return valor2;
    })
    .catch(e => console.log(e))
    .finally(() => console.log('acá estamos en finally!'));

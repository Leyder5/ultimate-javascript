let promesa1 = new Promise((res, rej) => {
    rej(12);                                                         // la promesa 1 es RECHAZADA
});

let promesa2 = new Promise((res, rej) => {
    res(15);
});

promesa1
    .then(valor => {                                                 // como promesa1 fue rechazada, se SALTAN todos los then...
        if (valor > 10) {
            return promesa2;
        }
    })
    .then(valor2 => {
        console.log('segunda promesa');
        return valor2;
    })
    .catch(e => console.log(e))                                      // ...y se va directo al catch: imprime 12 (solo se ejecuta si hay rechazo)
    .finally(() => console.log('acá estamos en finally!'))           // finally se ejecuta SIEMPRE y no recibe argumentos
                                                                     // (ej: quitar el ícono de "cargando" al terminar)

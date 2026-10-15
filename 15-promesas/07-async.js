let promesa1 = param1 => new Promise((res, rej) => {
    // calcular algo...
    const b = 'Hola Mundo';
    res(b);
});

let promesa2 = param2 => new Promise((res, rej) => {
    // calculamos algo...
    res(param2 + ', Hola Mundo');
});

let promesa3 = (param1, param2) => new Promise((res, rej) => {       // necesita a y b: con .then habría que anidar
    res('Chanchito feliz');                                          // (la "pirámide de la muerte", una mala práctica)
});

async function main() {                                              // async: permite usar await dentro de la función
    try {
        const a = await Promise.resolve('Primer valor');             // await: espera y devuelve el VALOR en que resuelve la promesa
        const b = await promesa1(a);                                 // el código se lee de arriba hacia abajo
        const _ = await promesa2(b);                                 // _ : el resultado no nos interesa por ahora
        promesa3(a, b);                                              // a y b disponibles sin anidar nada
    } catch (error) {                                                // si alguna promesa se rechaza, cae aquí (en vez de .catch)
        console.log({ error });
    }
}

main();

                                                                     // para pasarle argumentos a una promesa, se envuelve en una función
let promesa1 = user => new Promise((res, rej) => {                   // fat arrow function que RETORNA una promesa
    res(user);
});

let promesa2 = user => new Promise((res, rej) => {                   // también recibe datos (el resultado de la anterior)
    res(user + ', Hola Mundo');
});

promesa1('Chanchito feliz')                                          // se ejecuta como función pasándole el dato
    .then(user => promesa2(user))                                    // procesamiento en SERIE: lo que resuelve una se le pasa a la otra
    .then(dato => console.log(dato))                                 // Chanchito feliz, Hola Mundo

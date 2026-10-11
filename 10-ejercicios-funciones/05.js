// Ejercicio 05: ordenar
// recibe un string y una función; ordena todos los caracteres del string
// por orden alfabético (sin los espacios) y le pasa el resultado a la función

function ordenar(str, fn) {
    const resultado = str
        .toLowerCase()           // no importa conservar las mayúsculas
        .split('')               // separa cada letra en un array
        .filter(x => x !== ' ')  // quita los espacios en blanco
        .sort()
        .join('');
    fn(resultado);
}

ordenar('Hola mundo', console.log);   // adhlmnoou
// es lo mismo que: ordenar('Hola mundo', r => console.log(r));



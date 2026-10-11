// Lección 108: Try y catch

function sumaTodo(arr) {
    // validamos negando para no anidar todo el código dentro de un if
    if (!Array.isArray(arr)) {
        // lanzamos una excepción de forma manual
        throw new Error('El parámetro no es un array');
    }
    return arr.reduce((acc, el) => {
        // typeof NaN es 'number', por eso también hay que validar Number.isNaN
        if (typeof el !== 'number' || Number.isNaN(el)) {
            throw new Error(`El elemento ${el} no es número`);
        }
        return acc + el;
    });
}

console.log(sumaTodo([1, 2, 3, 4]));   // 10

// try intenta ejecutar el código; si se lanza una excepción, catch la captura
// (al error se le suele llamar e o error)
try {
    sumaTodo({ prop: 1 });
} catch (e) {
    console.log(e.message);   // El parámetro no es un array
}

try {
    // sin la validación del reduce esto devolvería 'NaNHola mundo'
    sumaTodo([1, 2, NaN, 'Hola mundo']);
} catch (e) {
    console.log(e.message);   // El elemento NaN no es número
}

// gracias al try catch la aplicación NO explota y sigue ejecutando el código
// (en el catch podrías mostrarle el error al usuario con algo como SweetAlert2
// o enviarlo a un servicio de errores como Sentry)
console.log('después del try catch');

// error: el objeto creado con new Error(...)
// excepción: cuando ese error se lanza con throw

// Lección 104: Operador rest

// ...rest agrupa en un ARRAY todos los argumentos que sobran
// (el nombre puede ser rest, args, argumentos o lo que quieras)
// también funciona con fat arrow functions
const suma = (a, b, ...rest) => {
    console.log(rest);   // [ 3, 4 ]
    return a + b;
};

console.log(suma(1, 2, 3, 4));   // 3

// el parámetro rest SIEMPRE tiene que ser el último
// function suma(a, b, ...rest, c) {}   // SyntaxError

// Aplicación real: imprimir mensajes indicando de dónde vienen
function logMsg(descripcion, ...msgs) {
    for (let msg of msgs) {
        console.log(descripcion, msg);
    }
}

logMsg('servidor', 'error 1', 'petición aceptada', 'socket activo');

// si los mensajes vienen en un array, usamos el spread operator al llamar la función
// y después del array todavía se pueden agregar más argumentos
const mensajes = ['error 1', 'petición aceptada', 'socket activo'];
logMsg('cliente móvil', ...mensajes, 'otro error');

// Lección 64: Template strings
// Se escriben con backticks ` `
// (teclado inglés: a la izquierda del 1 / español o latinoamericano: a la derecha de la P)

const nombre = 'Nicolas';
const apellido = 'Schurmann';

// los saltos de línea se escriben directamente, sin \n
// para usar variables (o expresiones) se escribe ${ }
const plantilla = `Hola ${nombre} ${apellido},
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico`;
console.log(plantilla);

// lo mismo concatenando strings con + (hay que agregar el espacio a mano)
const nombreCompleto = nombre + ' ' + apellido;
console.log(nombreCompleto);

// dentro de ${ } también se pueden poner expresiones o llamar funciones
console.log(`2 + 2 = ${2 + 2}`);

// convertir la plantilla en una función para reutilizarla
// (correos de bienvenida, promociones, textos para los usuarios...)
function plantillaSaludo(nombre) {
    return `Hola ${nombre},
Bienvenidos a "Ultimate JavaScript" :)
Cariños Nico`;
}

console.log(plantillaSaludo('Chanchito feliz'));

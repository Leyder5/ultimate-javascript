// Lección 77: Fat arrow functions

// función normal
// function hola() {
//     return 'Hola mundo';
// }
// const resultado = hola();

// fat arrow function: siempre son anónimas, por eso se asignan a una constante
// const hola = () => {
//     return 'Hola mundo';
// };

// return implícito: si es de una sola línea se quitan el return y las llaves
// const hola = () => 'Hola mundo';

// con un solo parámetro se pueden omitir los paréntesis
// (con más de uno hay que colocarlos: (mensaje, param2) => ...)
const hola = mensaje => mensaje + ' Hola mundo';

const resultado = hola('Chanchito feliz');
console.log(resultado);   // Chanchito feliz Hola mundo

// lo mismo escrito con la sintaxis anterior (llaves y return)
const hola2 = (mensaje) => {
    return mensaje + ' Hola mundo';
};

console.log(hola2('Chanchito feliz'));

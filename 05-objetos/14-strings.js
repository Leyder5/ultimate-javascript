// Lección 62: Strings

const saludo = 'Hola Mundo!';
const despedida = new String('Chao mundo!');

console.log(typeof saludo, typeof despedida);   // string object
// aunque saludo es un string literal, JavaScript lo envuelve en un objeto
// para que podamos acceder a sus métodos y propiedades

console.log(saludo.length);            // 11 largo del string (propiedad)
console.log(saludo.indexOf('Mu'));     // 5 índice donde empieza (base cero)
console.log(saludo.indexOf('Ho'));     // 0
console.log(saludo.indexOf('lala'));   // -1 si no lo encuentra

// para validar si un texto se encuentra dentro de otro
if (saludo.indexOf('M') >= 0) {
    console.log('encontrado');
}

console.log(saludo.includes(' Mundo'));   // true (devuelve true o false)

// replace devuelve un string NUEVO, no modifica el original
const nuevoSaludo = saludo.replace('Mundo', 'Nicolás');
console.log(nuevoSaludo, saludo);   // Hola Nicolás! Hola Mundo!

console.log(saludo.toLowerCase());   // hola mundo!
console.log(saludo.toUpperCase());   // HOLA MUNDO!

// substring(índice inicio, índice final) el índice final no se incluye
console.log(saludo.substring(0, 3));   // Hol
console.log(saludo.substring(0, 4));   // Hola

// substr(índice inicio, cantidad de caracteres) DEPRECADO, no usar
console.log(saludo.substr(2, 4));      // 'la M' (el espacio cuenta)

const espacios = '     Hola    Mundo!     ';
console.log(espacios.trim());        // quita los espacios de izquierda y derecha
console.log(espacios.trimEnd());     // solo los de la derecha
console.log(espacios.trimStart());   // solo los de la izquierda
// ninguno quita los espacios del centro

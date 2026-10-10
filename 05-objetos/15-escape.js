// Lección 63: Caracteres de escape
// Nos permiten escribir caracteres especiales dentro de los strings

// sin caracteres de escape:
// "Hola "mundo"" da error: la comilla interior cierra el string
// una forma es alternar comillas, pero sigue siendo limitado:
// "Hola 'mundo'"  o  'Hola "mundo"'

// Caracteres de escape (todos comienzan con backslash):
// \n  nueva línea
// \t  tabulación
// \'  comilla simple
// \"  comilla doble
// \\  backslash

const saludo = 'Hola \\Mundo,\nBienvenidos a\t"Ultimate JavaScript" :)';
console.log(saludo);
// Hola \Mundo,
// Bienvenidos a	"Ultimate JavaScript" :)

// existe una forma todavía mejor de formatear strings: los template strings

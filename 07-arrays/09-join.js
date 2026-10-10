// Lección 82: Join

const array1 = ['Nicolas', 'Chanchito', 'Felipe'];

// join une los elementos en un string usando un separador (opcional)
// sin separador quedan separados por coma sin espacio
const mensaje = array1.join(', ');
console.log(mensaje);   // Nicolas, Chanchito, Felipe

// split hace lo contrario: divide un string en un array
// aquí el separador es obligatorio
const saludo = 'Hola mundo desde NZ';
const dividido = saludo.split(' ');
console.log(dividido);   // [ 'Hola', 'mundo', 'desde', 'NZ' ]

// útil para crear URLs, que no pueden tener espacios en blanco
// (se puede juntar con guión, guión bajo o slash)
console.log(dividido.join('-'));   // Hola-mundo-desde-NZ

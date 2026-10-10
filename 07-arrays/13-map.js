// Lección 86: Array map
// Crea un array NUEVO a partir de uno existente:
// el valor que retorna la función es lo que se agrega al nuevo array

const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 15, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// la función recibe (elemento, índice, array), aquí solo usamos el elemento
// const nombres = usuarios.map(u => u.nombre);
// console.log(nombres);   // [ 'Nico', 'Chanchito', 'Felipe', 'Fernanda' ]

// crear elementos <li> con template strings
// const lista = usuarios.map(u => `<li>${u.nombre}</li>`);
// const html = `<ol>${lista.join('')}</ol>`;
// console.log(html);

// crear nuevos objetos: una copia del usuario + la propiedad mayor
// para retornar un objeto de forma implícita se envuelve en paréntesis,
// si no, JavaScript cree que las llaves son un bloque de código
const map = usuarios.map(u => ({
    ...u,
    mayor: u.edad > 17,
}));
console.log(map);

// map y filter devuelven arrays nuevos, así que se pueden ENCADENAR
// convención: cada método en una línea nueva con sangría
const lista = usuarios
    .filter(u => u.edad > 17)
    .map(u => `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join('')}</ol>`;
console.log(html);   // <ol><li>Felipe</li><li>Fernanda</li></ol>

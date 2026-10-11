// Ejercicio 09: caso de la vida real con dos fuentes de datos distintas
// (equipo en Latinoamérica con propiedades en español y equipo en Estados Unidos en inglés)
// 1. unificar las estructuras de usuarios y users
// 2. fusionar los arrays
// 3. ordenarlos por edad (de mayor a menor)
// 4. crear una plantilla HTML con nombre y edad
// 5. imprimir la lista en consola

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const users = [
    { age: 22, name: 'Kevin', membership: 'premium' },
    { age: 19, name: 'Michael', membership: 'free' },
];

// 1. pasar los users en inglés a la estructura en español
// (para retornar un objeto en una línea se envuelve en paréntesis)
const usersEspanol = users.map(u => ({
    edad: u.age,
    nombre: u.name,
    plan: u.membership,
}));

// 2. fusionar con el spread operator
const todos = [...usuarios, ...usersEspanol];

// 3. ordenar de mayor a menor edad
todos.sort((a, b) => {
    if (a.edad < b.edad) return 1;
    if (a.edad > b.edad) return -1;
    return 0;
});

// 4. plantilla HTML (el Enter después de la flecha también es válido)
const lista = todos.map(u =>
    `<li>Nombre: ${u.nombre} Edad: ${u.edad}</li>`);

const html = `<ul>
${lista.join(`
`)}
</ul>`;

// 5. imprimir
console.log(html);
// <ul>
// <li>Nombre: Fernanda Edad: 32</li>
// <li>Nombre: Felipe Edad: 25</li>
// <li>Nombre: Kevin Edad: 22</li>
// <li>Nombre: Michael Edad: 19</li>
// <li>Nombre: Nico Edad: 17</li>
// <li>Nombre: Chanchito Edad: 15</li>
// </ul>

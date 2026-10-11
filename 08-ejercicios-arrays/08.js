// Ejercicio 08:
// 1. obtener los usuarios pago (premium y gold)
// 2. ordenarlos de mayor a menor edad
// 3. obtener el nombre de cada usuario
// 4. crear una plantilla HTML (lista no ordenada)
// 5. imprimirla en consola

const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 15, nombre: 'Chanchito', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
];

const pagos = usuarios
    .filter(u => u.plan !== 'free')
    .sort((a, b) => {
        // de mayor a menor: si a es menor, va después (1)
        if (a.edad < b.edad) return 1;
        if (a.edad > b.edad) return -1;
        return 0;
    });

const lista = pagos.map(u => `<li>${u.nombre}</li>`);

// join con un salto de línea (template string con Enter) para que
// cada usuario quede en una línea separada
const html = `<ul>
${lista.join(`
`)}
</ul>`;

console.log(html);
// <ul>
// <li>Felipe</li>
// <li>Nico</li>
// </ul>

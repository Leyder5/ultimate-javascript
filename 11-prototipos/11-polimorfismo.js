// Lección 127: Polimorfismo (poli: muchas, morfo: formas)
// Objetos creados con funciones constructoras distintas comparten un mismo método,
// cada uno con su propia implementación

// un select: esos menús que al pinchar te dan varias opciones
function Select() {}

// render: nombre muy usado por librerías de JavaScript
Select.prototype.render = function () {
    console.log('renderizando select');
    // en la vida real podría generar HTML:
    // return `<select>...opciones...</select>`;
};

function Checkbox() {}

Checkbox.prototype.render = function () {
    console.log('renderizando checkbox');
};

// componente: una funcionalidad pequeña que se puede renderizar en un documento HTML
const componentes = [new Select(), new Checkbox()];

// gracias al polimorfismo, basta con llamar a render en cada uno
componentes.forEach(c => c.render());
// renderizando select
// renderizando checkbox

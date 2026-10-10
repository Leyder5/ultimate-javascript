// Lección 57: Listar propiedades
// Como los objetos son dinámicos, una propiedad podría haber sido eliminada

const punto = {
    x: 10,
    y: 15,
    // forma corta de definir métodos: sin los dos puntos ni function
    // (es lo mismo que dibujar: function () {})
    dibujar() {
        console.log('dibujando');
    },
};

// si alguien elimina el método, punto.dibujar() da error:
// TypeError: punto.dibujar is not a function
// delete punto.dibujar;

// con in verificamos si una propiedad o método existe en el objeto
if ('dibujar' in punto) {
    punto.dibujar();
}

// Object.keys devuelve un array con los nombres de las propiedades
console.log(Object.keys(punto));   // [ 'x', 'y', 'dibujar' ]

// como es un array se puede recorrer con for of
for (let llave of Object.keys(punto)) {
    console.log(llave, punto[llave]);
}

// Object.entries devuelve pares [propiedad, valor]
for (let entry of Object.entries(punto)) {
    console.log(entry);
}

// forma antigua (código viejo) con for in: hace lo mismo,
// pero es mejor preferir Object.keys / Object.entries
// for (let llave in punto) {
//     console.log(llave, punto[llave]);
// }

// keys y entries son métodos de clase o métodos estáticos del constructor Object

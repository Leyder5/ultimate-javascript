// Lección 58: Clonando objetos
// Para que dos variables no apunten necesariamente al mismo objeto

const punto = {
    x: 10,
    y: 15,
};

// Object.assign asigna las propiedades de los objetos de la derecha
// al objeto de la izquierda (primer argumento)
// Object.assign(punto, { z: 20 });
// console.log(punto);   // { x: 10, y: 15, z: 20 }

// clonar: el primer argumento es un objeto vacío y se usa el valor de retorno
// si una propiedad se repite, gana la del objeto que está más a la derecha
const clonePunto = Object.assign({}, punto, { z: 20, x: 1 });
console.log(clonePunto, punto);   // { x: 1, y: 15, z: 20 } { x: 10, y: 15 }

// esto NO es una copia, es una referencia al mismo objeto
// const referencia = Object.assign(punto);
// console.log(referencia);

// copia exacta con Object.assign (forma de 2015)
const copiaPunto = Object.assign({}, punto);
console.log(copiaPunto, punto);

// copia con el spread operator (...): las propiedades de punto
// se asignan al objeto literal
const copia3 = { ...punto };
console.log(copia3);

// forma antigua, no recomendada (pero la puedes ver en código viejo)
const copia4 = {};
for (let llave in punto) {
    copia4[llave] = punto[llave];
}
console.log(copia4);

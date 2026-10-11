// Lección 103: Fat arrow function

// el mismo código del video anterior, pero transformado a fat arrow function
const suma = () => {
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
};

// en el navegador (Chrome) da error:
// ReferenceError: arguments is not defined
// console.log(suma(1, 2, 3, 4));
// (ojo: en Node no da error, porque el archivo completo está envuelto en una
// función que sí tiene arguments, y la fat arrow function usa ESE arguments)

// Las fat arrow functions son una versión reducida de las funciones normales:
// - NO tienen arguments
// - NO tienen super
// - NO tienen su propio contexto de this
// Úsalas solamente para realizar cálculos; no cambies todas las funciones
// a fat arrow functions porque alguna podría usar arguments, this o super

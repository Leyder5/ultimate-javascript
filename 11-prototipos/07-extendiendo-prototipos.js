// Lección 123: Extendiendo prototipos
// Se puede extender el prototipo de las funciones constructoras de JavaScript...

Object.prototype.isEqual = function (obj) {
    // la lógica da lo mismo, lo importante es lo que viene después
    return this === obj;
};

const x = {};
console.log(x.isEqual({ a: 1 }));   // false
console.log(x.isEqual(x));          // true

// ...pero NO lo hagas (ni con Object, Array, Number, Boolean...), porque:
// - una librería de terceros podría agregar un método con el mismo nombre
//   y otra lógica, introduciendo errores muy silenciosos
// - JavaScript podría implementar en el futuro un método con ese nombre
//   que funcione distinto, y tendrías que refactorizar toda tu aplicación

delete Object.prototype.isEqual;   // lo quitamos para no afectar a otros archivos

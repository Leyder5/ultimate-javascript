// Lección 119: Herencia
// Usuario y Producto se guardan en la base de datos: ambos necesitan un id
// y un método guardar. Se ponen en una entidad superior y los dos la heredan.

// En otros lenguajes (con clases), al crear una instancia las propiedades
// y métodos de la clase padre se COPIAN al objeto:
// class Entidad { id; guardar() {} }
// class Usuario extends Entidad {}
// class Producto extends Entidad {}

// En JavaScript NO se copian: el objeto se VINCULA a otro objeto,
// llamado prototipo. Si el método no está en el objeto, JavaScript lo busca
// en su prototipo; si no está, en el prototipo del prototipo... hasta llegar
// a null, y ahí da error.

const entidad = {
    guardar() {
        console.log('guardando', this.id);
    },
};

// Object.create crea un objeto nuevo cuyo prototipo es entidad
const usuario = Object.create(entidad);
usuario.id = 1;

// usuario no tiene guardar: JavaScript sube a buscarlo a su prototipo (entidad)
usuario.guardar();   // guardando 1
console.log(Object.getPrototypeOf(usuario) === entidad);   // true

// usuario.listar();   // TypeError: no está en ningún prototipo de la cadena

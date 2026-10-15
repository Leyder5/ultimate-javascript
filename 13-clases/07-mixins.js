const Entidad = {                                 // funcionalidad pequeña: guardar
    save() {
        console.log('guardado de entidad')
    },
}

const Actualizar = {                              // funcionalidad pequeña: actualizar
    update() {
        console.log('actualizando entidad')
    },
}

class User {
    constructor(name) {
        this.name = name;
    }

    save() {                                      // method override del save de Entidad
        console.log('guardando en usuario');
    }
}
const nuevoProto = Object.assign({}, Entidad, Actualizar);   // compone ambas en un objeto NUEVO ({} para no modificar Entidad)
Object.setPrototypeOf(User.prototype, nuevoProto);           // lo vincula como prototipo padre (como hace extends)
                                                             // con Object.assign(User.prototype, Entidad) los métodos quedarían
const u = new User('chanchito');                             // directamente en User.prototype, sin la estructura de herencia
u.save();                                                    // guardando en usuario (y u.update() -> actualizando entidad)

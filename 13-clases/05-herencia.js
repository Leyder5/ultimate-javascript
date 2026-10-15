class Entidad {                                   // clase padre
    constructor(id) {
        this.id = id;                             // identificador único
        this.created_at = new Date();             // fecha de creación
    }

    save() {}                                     // método que heredarán las clases hijas
}

class User extends Entidad {                      // extends: User hereda de Entidad
    constructor(name) {
        super(1);                                 // OBLIGATORIO al usar extends: llama al constructor padre (le pasa el id)
        this.name = name;                         // después de super ya podemos usar this
    }
}

const u = new User('Chanchito feliz');            // User { id: 1, created_at: ..., name: 'Chanchito feliz' }
                                                  // save no está en User.prototype: está más arriba, en Entidad.prototype

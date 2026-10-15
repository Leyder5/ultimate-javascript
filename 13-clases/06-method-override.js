class Entidad {
    constructor(id) {
        this.id = id;
        this.created_at = new Date();
    }

    save() {
        console.log('save en Entidad');
    }
}

class User extends Entidad {
    constructor(name) {
        super(1);                                 // super(): llama al CONSTRUCTOR padre
        this.name = name;
    }

    save() {                                      // method override: mismo nombre que el save de Entidad
        super.save();                             // super.save(): reutiliza la lógica del save del PADRE (sin ejecutar el constructor)
        console.log('save en usuario');           // se ejecuta el save más cercano al objeto (el de User)
    }
}

const u = new User('Chanchito feliz');            // u.save() -> 'save en Entidad' y luego 'save en usuario'

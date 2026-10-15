// function User(a) {                            // en funciones constructoras, una variable local
//  let name = a;                                 // ya es privada: no se puede acceder desde afuera
//  this.getName = function() { return name; }    // solo a través de un método
// }

class User {
    #name;                                        // propiedad PRIVADA: se declara con # antes de usarla

    constructor(name) {
        this.#name = name;                        // dentro de la clase se accede con this.#name
    }

    #logger() {                                   // método PRIVADO: tampoco se puede llamar desde la instancia

    }

    getName() {                                   // método público para leer la propiedad privada
        this.#logger();                           // los privados solo se usan dentro de la misma clase
        return this.#name;
    }
}
                                                  // u.#name da error y u['#name'] devuelve undefined;
const u = new User('Chanchito feliz');            // u['#name'] = 'lala' crea OTRA propiedad: getName() sigue devolviendo 'Chanchito feliz'

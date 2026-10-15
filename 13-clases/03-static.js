class Restaurants {
    static cantidad = 12;                         // propiedad ESTÁTICA: pertenece a la clase (Restaurants.cantidad)
    constructor(name) {
        this.name = name;
    }

    getTimetable() { // obtener horario            // método de instancia: tiene sentido en cada restaurante
        console.log('horario restaurante')
    }

    static getRestaurant(id) {                    // método ESTÁTICO: se llama desde la clase, no desde la instancia
        return new Restaurants('BBQ');            // no tendría sentido que un restaurante traiga a otro restaurante
    }
}
                                                  // ya usamos métodos estáticos: Array.isArray(), Array.from(), Object.assign()
const r = Restaurants.getRestaurant(12);          // Restaurants { name: 'BBQ' } (sin crear antes una instancia)

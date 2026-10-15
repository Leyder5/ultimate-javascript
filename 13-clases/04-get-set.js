class Restaurants {
    #timetable;                                   // propiedad privada donde se guarda el dato (mismo nombre con #)
    constructor(name) {
        this.name = name;
    }

    get timetable() {                             // getter: se lee como r.timetable
        return this.#timetable;
    }

    set timetable(value) {                        // setter: se usa con r.timetable = ...; SIEMPRE recibe un valor
        let date = new Date(value);
        let time = date.getTime();                // si la fecha no es válida, getTime() devuelve NaN
        if (Number.isNaN(time)) {                 // así validamos antes de asignar (no se acepta false o 'Hola mundo')
            throw new Error('Fecha inválida');
        }
        this.#timetable = date;                   // solo se asigna si la fecha es válida
    }
}

const r = new Restaurants('BBQ');

r.timetable = '1 Apr 1923';                       // r.timetable = 'lala' -> Error: Fecha inválida (y no cambia la fecha)

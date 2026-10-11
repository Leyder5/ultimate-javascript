// Lección 125: Constructor padre
// Muy común al modelar el acceso a bases de datos: la generación de ids se repite

function Entidad(entidad) {
    // string aleatorio
    this.id = Math.random().toString(20);
    // a qué tabla apunta
    this.entidad = entidad;
}

// sin herencia habría que repetir id y entidad en cada función constructora:
// function User() {
//     this.id = Math.random().toString(20);
//     this.entidad = 'user';
//     this.attrs = { ... };
// }

function User() {
    // llamamos al constructor padre con call, pasándole el this del usuario:
    // así Entidad le agrega id y entidad al mismo usuario
    Entidad.call(this, 'user');
    // y ahora solo nos preocupamos de los atributos propios del usuario
    this.attrs = {
        nombre: 'Chanchito feliz',
        email: 'chanchito@holamundo.io',
    };
}

const user = new User();
console.log(user);
// User { id: '0.a3f...', entidad: 'user', attrs: { nombre: 'Chanchito feliz', email: '...' } }

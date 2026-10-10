// Lección 52: Constructor functions
// Convención: UpperCamelCase (PascalCase), la primera letra con mayúscula
// y el nombre es el del recurso que queremos crear

// Objeto que queremos crear:
// {
//     id: 1,
//     recuperarClave: function () {},
// }

function Usuario() {
    // con this.propiedad le asignamos propiedades al objeto
    this.id = 1;
    // una función asignada a una propiedad se llama método
    this.recuperarClave = function () {
        console.log('recuperando clave...');
    };
}

// sin new no se crea nada: Usuario no retorna nada
// let usuario = Usuario();
// console.log(usuario);   // undefined

let usuario = new Usuario();
console.log(usuario);   // Usuario { id: 1, recuperarClave: [Function] }

// Al usar new ocurren 4 cosas:
// 1. se crea un objeto literal vacío "del aire" {}
// 2. se vincula el prototipo de la función (Usuario) con ese objeto
// 3. a this se le asigna ese objeto vacío
// 4. si la función no retorna nada, retorna this automáticamente

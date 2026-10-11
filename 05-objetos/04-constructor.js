
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


let usuario = new Usuario();
console.log(usuario);   // Usuario { id: 1, recuperarClave: [Function] }

// Al usar new ocurren 4 cosas:
// 1. se crea un objeto literal vacío "del aire" {}
// 2. se vincula el prototipo de la función (Usuario) con ese objeto
// 3. a this se le asigna ese objeto vacío
// 4. si la función no retorna nada, retorna this automáticamente

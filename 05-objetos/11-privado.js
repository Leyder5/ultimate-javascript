// Lección 59: Privado vs público

// Problema: todo lo que se asigna a this es público,
// y otro desarrollador podría reemplazarlo por error
// function Usuario() {
//     this.name = 'Chanchito';
//     this.log = function () {
//         console.log('log in', this.name);
//     };
//     this.guardar = function () {
//         this.log();
//         console.log('guardando');
//     };
// }
// const usuario = new Usuario();
// usuario.log = function () {
//     console.log('lala');
// };
// usuario.guardar();   // lala / guardando

function Usuario() {
    // privados: variables declaradas dentro de la función (let / const)
    // no se pueden acceder desde fuera del objeto
    const id = 1;
    const log = function () {
        console.log('log in', id);
    };

    // públicos: todo lo que se asigna a this
    this.name = 'Chanchito';
    this.guardar = function () {
        log();
        console.log('guardando');
    };
}

const usuario = new Usuario();
// aunque le agreguemos un log desde fuera, no choca con el privado
usuario.log = function () {
    console.log('lala');
};
usuario.guardar();   // log in 1 / guardando
console.log(usuario.id);   // undefined

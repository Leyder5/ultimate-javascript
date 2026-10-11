// Lección 110: Contexto de this

const usuario = {
    nombre: 'Nicolas',
    ciudadanias: ['Chile', 'Colombia', 'New Zealand'],
    mostrarCiudadanias() {
        // forEach funciona igual que map, pero NO retorna nada
        // (solo sirve para iterar cada elemento)

        // con una función normal, this dentro de ella NO es el usuario
        // (en el navegador es window), por eso this.nombre es undefined
        // this.ciudadanias.forEach(function (ciudadania) {
        //     console.log(this.nombre, ciudadania);   // undefined 'Chile'...
        // });

        // las fat arrow functions no tienen contexto de this,
        // así que usan el de más arriba: el del método (el usuario)
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    },
};

usuario.mostrarCiudadanias();
// Nicolas Chile
// Nicolas Colombia
// Nicolas New Zealand

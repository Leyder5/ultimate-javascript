// Lección 129: Mixins
// Componer objetos con pequeñas funcionalidades y asignárselos a los prototipos

// mixin: esconde Object.assign detrás de una función
// Ctr con mayúscula: hace referencia a la función constructora
function mixin(Ctr, ...args) {
    // OJO: sin el spread operator (...args) se asignaría un objeto { 0, 1, 2... }
    Object.assign(Ctr.prototype, ...args);
}

function Pato() {
    this.name = 'patito';
}
function Perro() {}
function Pez() {}
function Avion() {}

// funcionalidades pequeñas (sin ñ en el código: bano en vez de baño)
const vuela = {
    vuela() {
        console.log('volando');
    },
};
const nada = {
    nada() {
        console.log('nadando');
    },
};
const bano = {
    bano() {
        console.log('yendo al baño');
    },
};
const camina = {
    camina() {
        console.log('caminando');
    },
};

// sin la función mixin sería: Object.assign(Avion.prototype, vuela);
// Object.assign modifica el primer argumento con las propiedades de los demás
mixin(Avion, vuela);
mixin(Pez, nada, bano);
mixin(Perro, nada, bano, camina);
mixin(Pato, nada, bano, camina, vuela);

const pato = new Pato();
console.log(Object.getPrototypeOf(pato));   // { nada, bano, camina, vuela } (constructor: Pato)
pato.vuela();
pato.nada();

const p = new Pez();
p.nada();
p.bano();
// p.camina();   // TypeError: el pez no camina

new Avion().vuela();

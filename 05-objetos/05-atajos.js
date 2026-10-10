// Lección 53: Atajos constructores
// {} es un atajo de JavaScript para llamar al constructor de objetos

const obj = {};
const obj2 = new Object();
// todos los objetos tienen la propiedad oculta constructor
console.log(obj.constructor);    // [Function: Object]
console.log(obj2.constructor);   // [Function: Object]

// Otros constructores y sus atajos (literales):
// new Array()    -> []
// new String()   -> "" '' ``
// new Number()   -> 1, 2, 3
// new Boolean()  -> true, false

function Usuario() {
    this.name = 'Chanchito feliz';
}

const user = new Usuario();
// muestra la función constructora con su código;
// Object, Array, String... están implementados con código nativo
console.log(user.constructor);

// literales vs constructores
console.log(typeof '');                 // string
console.log(typeof new String(''));     // object
console.log(typeof new Number(1));      // object
console.log(typeof new Boolean(true));  // object

// los literales también tienen métodos: JavaScript los envuelve
// en un objeto al acceder al método y luego los vuelve a sacar
let a = 4;
console.log(a.toString());   // '4'

// los literales y los creados con constructor se comportan distinto
const s1 = '1 + 1';
const s2 = new String('1 + 1');
console.log(s1, s2);
console.log(eval(s1));              // 2 (evalúa el string)
console.log(eval(s2));              // [String: '1 + 1'] (lo deja igual)
// para obtener el valor literal usamos valueOf
// (también existe en Number y Boolean)
console.log(eval(s2.valueOf()));    // 2

// conclusión: utiliza siempre los literales

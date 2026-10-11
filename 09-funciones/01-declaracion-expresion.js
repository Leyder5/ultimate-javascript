// Lección 99: Declaración vs expresión

// Hoisting: una función declarada se puede usar ANTES de declararla
console.log(suma);   // muestra el código de la función suma
// pero una expresión de función no:
// console.log(resta);   // ReferenceError: Cannot access 'resta' before initialization

// Declaración de función (function declaration)
// también se le llama función nombrada (named function)
function suma() {
    console.log('sumando');
}

// Función anónima (anonymous function): no tiene nombre.
// Sola da error ("Function statements require a function name"),
// se usa cuando se ejecuta inmediatamente, por ejemplo dentro de un map
// [1, 2].map(function () {
//     console.log('función anónima');
// });

// Expresión de función (function expression): se asigna a una variable (let o const)
// anonymous function expression
let resta = function () {
    console.log('restando');
};

// named function expression
let multiplica = function multi() {
    console.log('multiplicando');
};

// expresión de función con fat arrow function: SIEMPRE es anónima
const divide = () => {
    console.log('dividiendo');
};

suma();
resta();
multiplica();
divide();

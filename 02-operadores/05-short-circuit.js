// Lección 23: Short circuit
// Valores falsy: false, 0, '', null, undefined, NaN (todo lo demás es truthy)

// OR devuelve el primer valor truthy
let nombre = 'Chanchito feliz';   // prueba también con ''
let username = nombre || 'Anónimo';
console.log(username);

// AND ejecuta lo de la derecha solo si lo de la izquierda es truthy
function fn1() {
    console.log('Soy función 1');
    return false;  // con true también se ejecutaría fn2
}

function fn2() {
    console.log('Soy función 2');
    return true;
}

let x = fn1() && fn2();

// Ejercicio 5: función que recibe un array devuelve con el número menor y el número mayor

function getMenorMayor(arr) {
    // el valor inicial es el primer elemento del array,
    let menor = arr[0];
    let mayor = arr[0];

    // for of devuelve el valor, for in devolvería el índice
    for (let numero of arr) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }

    return [menor, mayor];
}

let arr = [2, 5, 7, 15, -5, -100, 55, 3];
let resultado = getMenorMayor(arr);
console.log(resultado);   // [ -100, 55 ]

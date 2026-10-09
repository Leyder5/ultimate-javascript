// Ejercicio 7: calculadora de impuestos
// función que devuelve el precio del producto 
// más el impuesto (precio completo)

function calcularImpuesto(precio, impuesto) {
    // al precio se le suma el mismo precio multiplicado por el impuesto
    return precio + precio * impuesto;
}

let total = calcularImpuesto(19.90, 0.15);   // impuesto del 15%
console.log(total);   // 22.884999999999998 

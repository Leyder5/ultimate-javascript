// Lección 84: Every y some
// Ambos reciben un predicate (función que retorna true o false)

let usuarios = [
    { id: 1, activo: true },
    { id: 2, activo: false },
    { id: 3, activo: false },
];

// every: ¿TODOS cumplen la condición?
// se detiene apenas encuentra un false (por eso no evalúa el id 3)
const todosActivos = usuarios.every(usuario => {
    console.log('todos activos', usuario.id);
    return usuario.activo;
});
console.log(todosActivos);   // false
// todos activos 1
// todos activos 2

// some: ¿por lo menos UNO cumple la condición?
// se detiene apenas encuentra un true (por eso solo evalúa el id 1)
const algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
});
console.log(algunoActivo);   // true

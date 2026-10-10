// Lección 74: Agregar elementos

const letras = ['a', 'b'];
// con const no se puede reasignar la variable:
// letras = 'c';   // TypeError: Assignment to constant variable.
// pero sí se puede modificar su contenido

// push: agrega al final (uno o varios elementos)
letras.push('c', 'd');

// unshift: agrega al comienzo
letras.unshift('y', 'z');

console.log(letras);   // [ 'y', 'z', 'a', 'b', 'c', 'd' ]

// splice(índice de inicio, cuántos eliminar, ...elementos a agregar)
// agrega desde ese índice, por eso para quedar entre 'a' (índice 2) y 'b' usamos 3
letras.splice(3, 0, 1, 2);

console.log(letras);   // [ 'y', 'z', 'a', 1, 2, 'b', 'c', 'd' ]

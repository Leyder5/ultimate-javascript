// Lección 85: Filter
// Filtra un array y devuelve uno NUEVO solo con los elementos
// para los que la función retorna true

const usuarios = [
    { edad: 17, nombre: 'Nico' },
    { edad: 15, nombre: 'Chanchito' },
    { edad: 25, nombre: 'Felipe' },
    { edad: 32, nombre: 'Fernanda' },
];

// la función recibe (elemento, índice, array), pero aquí solo usamos el elemento
// u se refiere a usuario (el nombre del array lo deja claro)
const mayores = usuarios.filter(u => u.edad > 17);
console.log(mayores);   // Felipe y Fernanda

// en JavaScript no existe el método opuesto reject
// const menores = usuarios.reject(u => u.edad > 17);   // TypeError
// hay que seguir usando filter y cambiar la lógica
const menores = usuarios.filter(u => u.edad < 18);
console.log(menores);   // Nico y Chanchito

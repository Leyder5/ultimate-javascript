// Lección 37: switch
let accion = 'actualizar';   // prueba con 'listar' o 'guardar'

switch (accion) {
    case 'listar':
        console.log('Acción de listar');
        break;   // sin break se ejecutan también los case siguientes
    case 'guardar':
        console.log('Acción de guardar');
        break;
    default:
        console.log('Acción no reconocida');
}

// Lección 29: else / else if
// Se evalúa de arriba hacia abajo y solo se ejecuta la primera condición que se cumpla
let edad = 10;   // prueba con 28, 17 y 10

if (edad > 17) {
    console.log('Usuario mayor de edad');
} else if (edad > 13) {
    console.log('Usuario necesita estar acompañado de sus padres');
} else {
    console.log('No puede ingresar');
}

# Video 2 — Guion corregido

Ejercicios de la sección 4 (`04-ejercicios/01.js` a `10.js`) y lecciones 49 a 51 de objetos.

Cada parte tiene:
- **Qué pasó en el video**: los problemas concretos de la transcripción.
- **Guion**: el texto para leer o adaptar al grabar.

---

## Introducción

**Qué pasó en el video:** "retomando y los ejercicios pendientes". No dices qué vas a mostrar.

**Guion:**
> En este video resuelvo los ejercicios de la sección 4: comparar números, clasificar resoluciones de pantalla, buscar elementos en un array, recorrer números con un ciclo y calcular impuestos. Al final empiezo con objetos: qué son, cómo se modifican y qué son las factory functions.

---

## Ejercicio 1 — Cuál es mayor (`01.js`)

**Qué pasó en el video:** "una de las maneras de solucionarlas con el y el", "analizamos de manera iniciamos con el y hacemos la consulta de que si es mayor que". Faltan los nombres: `if`, `else`, `a`, `b`, `return`.

**Guion:**
> El ejercicio pide una función que reciba dos números y devuelva el mayor.
>
> La función se llama `cualEsMayor` y recibe dos parámetros: `a` y `b`.
>
> **Primera solución, con `if` y `else`:** si `a > b` es verdadero, la función devuelve `a` con `return`. Si es falso, entra al `else` y devuelve `b`.
>
> **Segunda solución, con el operador ternario:** hace lo mismo en una sola línea. La sintaxis es `condición ? valorSiEsVerdadero : valorSiEsFalso`. Escribo `return (a > b) ? a : b;`. Si `a > b` es verdadero devuelve `a`; si es falso devuelve `b`.
>
> Llamo a la función con `cualEsMayor(10, 5)`. Como 10 es mayor que 5, la consola muestra `10`.

---

## Ejercicio 2 — Nombre de la resolución (`02.js`)

**Qué pasó en el video:** te corregiste varias veces leyendo las medidas ("Si es 4K tiene 3840. Si es eh perdón eh por 2160"). Usaste "este de acá" y "esto" para señalar resultados. Dijiste "elif" y "el sell" (en JavaScript es `else if`). Dijiste "también 920" en vez de 1920.

**Consejo:** no leas la tabla de medidas en voz alta número por número. Muéstrala en pantalla y explica la regla.

**Guion:**
> El ejercicio pide una función que reciba el ancho y el alto de una pantalla y devuelva el nombre de su resolución. En el comentario del archivo está la tabla: 8K, 4K, WQHD, Full HD y HD, cada una con su ancho y alto mínimos.
>
> La regla es esta: una pantalla pertenece a una categoría si su ancho **y** su alto son mayores o iguales a los de esa categoría. Por ejemplo, una pantalla de 1366 × 768 no llega a Full HD, porque Full HD necesita 1920 de ancho, pero sí supera HD, que necesita 1280 × 720. Entonces el resultado es `HD`.
>
> La función `nombreResolucion` recibe `ancho` y `alto` y usa una cadena de `if` y `else if`. Cada condición usa `&&`, que exige que las dos comparaciones sean verdaderas al mismo tiempo.
>
> El orden importa: reviso de la resolución **más grande a la más chica**. Si revisara HD primero, una pantalla 4K también cumpliría `ancho >= 1280 && alto >= 720` y la función devolvería `HD`, que es incorrecto. Con este orden, la primera condición que se cumple es la correcta y `return` termina la función.
>
> Si ninguna condición se cumple, el `else` final devuelve `false`.
>
> Resultados en consola:
> - `nombreResolucion(3840, 2160)` → `4K`
> - `nombreResolucion(1366, 768)` → `HD`
> - `nombreResolucion(800, 600)` → `false`, porque no alcanza el mínimo de HD.

---

## Ejercicio 3 — Elemento por índice (`03.js`)

**Qué pasó en el video:** "una función de arreglo para poder verificar eh y eh que al momento de pasarle un dato este esté dentro de la regla". "Regla", "red", "la raí" y "la ray" son errores de dicción de "arreglo" o "array". "getp by índice" es `getbyIdx`. "el retorno que sea el índice como tal" es incorrecto: no devuelve el índice, devuelve el **elemento** en ese índice. En los resultados dijiste "No se está devolviendo el dos" cuando sí lo devuelve.

**Consejo:** elige una palabra y úsala todo el video: **array** o **arreglo**, no las dos.

**Guion:**
> El ejercicio pide una función que reciba un array y un índice, y devuelva el elemento que está en esa posición.
>
> Recuerda que los índices empiezan en 0. En el array `[1, 2]`, el índice 0 tiene el valor `1` y el índice 1 tiene el valor `2`. El índice 2 no existe.
>
> La función se llama `getbyIdx` y recibe `arr` e `idx`. Hay dos casos inválidos:
> 1. `idx < 0`: no existen índices negativos.
> 2. `arr.length <= idx`: el índice es igual o mayor que la cantidad de elementos. Si el array tiene 2 elementos, el índice más alto es 1.
>
> **Primera versión:** un `if` por cada caso, y los dos devuelven el texto `'Elemento no existe'`.
>
> **Versión final:** como los dos `if` devuelven lo mismo, los junto en uno solo con `||`, que significa "o": si se cumple cualquiera de las dos condiciones, devuelve `'Elemento no existe'`. Si no se cumple ninguna, la función devuelve `arr[idx]`, el elemento en esa posición.
>
> Resultados:
> - `getbyIdx([1, 2], 1)` → `2`
> - `getbyIdx([1, 2], 0)` → `1`
> - `getbyIdx([1, 2], 2)` → `Elemento no existe`, porque el índice 2 no existe
> - `getbyIdx([1, 2], -1)` → `Elemento no existe`, porque el índice es negativo

---

## Ejercicio 4 — Números impares (`04.js`)

**Qué pasó en el video:** dijiste "imprimir solo los números iguales del 1 al 10". El ejercicio es de números **impares** del **0** al 10. "utilizamos y dentro le decimos": falta decir `while`. "vamos a sacar el modul" sin explicar qué es el módulo.

**Guion:**
> El ejercicio pide imprimir los números impares del 0 al 10.
>
> Declaro la variable `i` con valor `0` y uso un ciclo `while` con la condición `i <= 10`. El ciclo se repite mientras esa condición sea verdadera.
>
> Para saber si un número es impar uso el operador módulo `%`, que devuelve el **residuo** de una división. `i % 2` es el residuo de dividir `i` entre 2. Si el residuo es 0, el número es par. Si es distinto de 0, es impar. Por eso la condición es `i % 2 !== 0`, y en ese caso imprimo `'impar'` y el número.
>
> Al final de cada vuelta escribo `i++`, que suma 1 a `i`. Sin esta línea, `i` siempre valdría 0, la condición `i <= 10` nunca sería falsa y el ciclo no terminaría: sería un ciclo infinito.
>
> La consola muestra `impar 1`, `impar 3`, `impar 5`, `impar 7` e `impar 9`.

---

## Ejercicio 5 — Menor y mayor de un array (`05.js`)

**Qué pasó en el video:** "number of" es `for of`. "con el off menor es igual a menor y menor que número" no se entiende. Al final dijiste "el número menor sería 100"; el resultado es **-100**. También dijiste "el valor designado como tal".

**Guion:**
> El ejercicio pide una función que reciba un array de números y devuelva el menor y el mayor.
>
> La función `getMenorMayor` recibe `arr`. Primero creo dos variables, `menor` y `mayor`, y a las dos les asigno `arr[0]`, el primer elemento. Uso el primer elemento como punto de partida porque es un valor real del array. Si empezara con 0, por ejemplo, y todos los números fueran positivos, `menor` quedaría en 0 aunque el 0 no esté en el array.
>
> Después recorro el array con `for of`, que en cada vuelta me da el **valor** del elemento en la variable `numero`. (`for in` me daría el índice, no el valor.)
>
> En cada vuelta hago dos comparaciones con el operador ternario:
> - `menor = menor < numero ? menor : numero;` → si `menor` sigue siendo más chico, se queda igual; si no, `numero` pasa a ser el nuevo menor.
> - `mayor = mayor > numero ? mayor : numero;` → lo mismo para el mayor.
>
> Por ejemplo, con `[2, 5, 7, ...]`: empiezo con `menor = 2` y `mayor = 2`. Llega el 5: 2 sigue siendo el menor, y 5 pasa a ser el mayor. Llega el 7: el menor sigue en 2, y el mayor cambia a 7. Así hasta terminar el array.
>
> La función devuelve `[menor, mayor]`. Con el array `[2, 5, 7, 15, -5, -100, 55, 3]` el resultado es `[-100, 55]`: el menor es **menos cien** y el mayor es 55.

---

## Ejercicio 6 — Cantidad de positivos (`06.js`)

**Qué pasó en el video:** "declaramos la nueva variable que iniciar hacer nuevamente vamos a utilizar un": faltan los nombres `cantidad` y `for of`. "que nos hagan conjo, o sea, un contador": usa la palabra correcta desde el inicio.

**Guion:**
> El ejercicio pide una función que cuente cuántos números positivos hay en un array.
>
> La función `cantidadPositivos` recibe `arr`. Creo un contador llamado `cantidad` que empieza en 0.
>
> Recorro el array con `for of`. En cada vuelta, la variable `elemento` tiene el número actual. Si `elemento > 0`, sumo 1 al contador con `cantidad++`. El 0 no cuenta porque no es positivo.
>
> Al terminar el ciclo, la función devuelve `cantidad`.
>
> Con el array `[1, -2, 3, 0, -5, 6, 7, -8, 9]` los positivos son 1, 3, 6, 7 y 9, así que el resultado es `5`.

---

## Ejercicio 7 — Calculadora de impuestos (`07.js`)

**Qué pasó en el video:** el resultado lo leíste como "22.88.8 889 999". Además dijiste que el ejercicio es complejo y que lo vas a estudiar más, pero en el video esa parte corresponde a los ejercicios 8 y 9, no al 7. Aclara de qué ejercicio hablas.

**Guion:**
> El ejercicio pide una función que reciba un precio y un porcentaje de impuesto, y devuelva el precio final con el impuesto incluido.
>
> La función `calcularImpuesto` recibe `precio` e `impuesto`. El impuesto lo paso como decimal: 15 % se escribe `0.15`.
>
> La fórmula es `precio + precio * impuesto`. Primero se calcula la multiplicación: `19.90 * 0.15 = 2.985`, que es el monto del impuesto. Después se suma al precio: `19.90 + 2.985 = 22.885`.
>
> La consola muestra `22.884999999999998` en vez de `22.885`. Esto no es un error de mi código: JavaScript guarda los decimales en binario y algunos números, como 19.90, no se pueden representar de forma exacta. Para mostrar un precio se redondea con `total.toFixed(2)`, que devuelve `'22.88'`.

> **Nota:** `toFixed(2)` da `'22.88'` y no `'22.89'` justamente porque el valor guardado es 22.88499…, un poco menos de 22.885.

---

## Ejercicios 8 y 9 — toPairs y toCollection (`08.js`, `09.js`)

**Qué pasó en el video:** dijiste que no entiendes la lógica todavía. Es válido decirlo, pero dilo una vez y en una frase. Aquí está la explicación por si quieres incluirlos en otro video.

**Guion ejercicio 8:**
> El ejercicio 8 recibe un array de objetos y devuelve un array de **pares**. Cada par es un array de dos elementos: el `id` del objeto y el objeto completo.
>
> Entrada: `{ id: 1, name: 'Felipe' }` → salida: `[1, { id: 1, name: 'Felipe' }]`.
>
> La función `toPairs` crea un array vacío `pairs`. Recorre `arr` con `for in`, que da el índice `idx`. En cada vuelta toma el objeto con `arr[idx]` y guarda en `pairs[idx]` el par `[elemento.id, elemento]`. Al final devuelve `pairs`.

**Guion ejercicio 9:**
> El ejercicio 9 hace lo contrario: recibe pares y devuelve objetos.
>
> En cada par, la posición 0 es el `id` y la posición 1 es el objeto. La función `toCollection` guarda el objeto en `collection[idx]` con `elemento[1]` y luego le agrega la propiedad `id` con `elemento[0]`.
>
> En la consola el `id` aparece después de `name` porque se agregó al final.

---

## Ejercicio 10 — Crear array de 1 a n (`10.js`)

**Qué pasó en el video:** "raíz de longito de n", "en la raí no tenga ningún elemento negativo", "reg una raí vacío". Dijiste "vamos a utilizar un Word" pero el código usa `for`. Explicaste el ciclo sin decir `i < n`, `arr[i] = i + 1` ni `i++`. Dijiste que el resultado es 7 y luego cambiaste a 8 sin explicar el cambio.

**Guion:**
> El ejercicio pide una función que reciba un número `n` y devuelva un array de longitud `n` con los números del 1 hasta `n`. Por ejemplo, `crearArray(3)` devuelve `[1, 2, 3]`.
>
> La función `crearArray` recibe `n`. Primero valido la entrada: si `n <= 0` devuelvo un array vacío `[]`, porque no puede existir un array con longitud negativa o cero elementos que llenar.
>
> Después creo el array vacío `arr` y uso un ciclo `for` con tres partes:
> - `let i = 0`: el contador empieza en 0, que es el primer índice.
> - `i < n`: el ciclo se repite mientras `i` sea menor que `n`, así hace exactamente `n` vueltas.
> - `i++`: suma 1 a `i` al final de cada vuelta.
>
> Dentro del ciclo escribo `arr[i] = i + 1`. Sumo 1 porque los índices empiezan en 0 pero los valores empiezan en 1: en el índice 0 va el 1, en el índice 1 va el 2, y así.
>
> Al terminar devuelvo `arr`. Con `crearArray(7)` el resultado es `[1, 2, 3, 4, 5, 6, 7]`. Si cambio el argumento a 8, el array tiene 8 elementos, del 1 al 8.

---

## Lección 49 — Introducción a objetos (`05-objetos/01-intro.js`)

**Qué pasó en el video:** "los objetos pueden continuar objetos entre objetos y una función dentro de sí" (es *contener*). "esta propiedad que es bu" (es booleano). La idea de por qué existen los objetos no quedó clara.

**Guion:**
> Un objeto agrupa datos relacionados en una sola variable. En vez de tener `email`, `name` y `direccion` como variables sueltas, los guardo como propiedades del objeto `user`.
>
> Cada propiedad tiene un nombre y un valor, separados por dos puntos. Los valores pueden ser de cualquier tipo:
> - `email` y `name` son strings.
> - `direccion` es otro objeto, con `calle` y `numero`.
> - `activo` es un booleano: `true`.
> - `recuperarClave` es una función. Cuando una función es propiedad de un objeto se llama **método**, y se ejecuta con `user.recuperarClave()`.
>
> Agrupar datos y comportamientos relacionados dentro de un objeto es la base de la programación orientada a objetos.

---

## Lección 50 — Dinamismo (`05-objetos/02-dinamico.js`)

**Qué pasó en el video:** aquí está el "bloquea como tal" que te señalaron: "lo que hace este es un definitivamente pues un bloquea como tal". También "pasamos el object por un sig" (es `Object.seal`) y "aquí me dice que lo agrega y esto dice que se lo permite": no queda claro qué se agrega ni qué se permite. Además dijiste que el objeto no se puede cambiar porque es constante, lo cual es incorrecto.

**Guion:**
> En JavaScript los objetos son dinámicos: puedo agregar propiedades, eliminarlas y cambiar sus valores después de crearlos.
>
> Declaro `const user = { id: 1 }`. Aunque `user` es `const`, puedo hacer `user.name = 'Nicolás'` y también agregar el método `user.guardar`. Esto funciona porque `const` solo impide **reasignar la variable**: no puedo escribir `user = 1`, eso da `TypeError: Assignment to constant variable`. Pero el objeto al que apunta la variable sí se puede modificar.
>
> Con `delete user.name` y `delete user.guardar` elimino esas propiedades. El objeto vuelve a ser `{ id: 1 }`.
>
> Si necesito que un objeto no se modifique, hay dos métodos:
>
> **`Object.freeze`** impide tres cosas: agregar propiedades, eliminar propiedades y cambiar sus valores. Con `user1 = Object.freeze({ id: 1 })`, la línea `user1.name = 'Nico'` no agrega la propiedad y `user1.id = 2` no cambia el valor. JavaScript ignora esos cambios sin mostrar error. El objeto sigue siendo `{ id: 1 }`.
>
> **`Object.seal`** impide agregar y eliminar propiedades, pero **sí permite cambiar el valor** de las que ya existen. Con `user1 = Object.seal({ id: 1 })`, `user1.name = 'Nico'` no se agrega, pero `user1.id = 2` sí cambia el valor. El resultado es `{ id: 2 }`.
>
> Resumen:
>
> | | Agregar | Eliminar | Cambiar valor |
> |---|---|---|---|
> | Objeto normal | ✅ | ✅ | ✅ |
> | `Object.seal` | ❌ | ❌ | ✅ |
> | `Object.freeze` | ❌ | ❌ | ❌ |

---

## Lección 51 — Factory functions (`05-objetos/03-factory.js`)

**Qué pasó en el video:** "de una manera sencilla en lo repetitiva" (es *no repetitiva*). "colocamos el retent pues yaían eh las variables de almacenamiento". No se explica qué problema resuelve ni la forma corta `email` en vez de `email: email`.

**Guion:**
> Una factory function es una función que crea y devuelve objetos.
>
> El problema que resuelve: si necesito diez usuarios, sin una factory tengo que copiar y pegar el objeto diez veces, con las mismas propiedades y el mismo método `recuperarClave`. Si después quiero cambiar ese método, tengo que cambiarlo en diez lugares.
>
> La función `crearUsuario` recibe `name` y `email`, y devuelve un objeto con `return`. Por convención, estas funciones empiezan con `crear` o `create` y se escriben en camelCase.
>
> Dentro del objeto escribo solo `email` en vez de `email: email`. Es una forma corta que funciona cuando la variable tiene el mismo nombre que la propiedad.
>
> `crearUsuario('Nicolas', 'nico@holamundo.io')` y `crearUsuario('Felipe', 'felipe@holamundo.io')` devuelven dos objetos con la misma estructura y valores distintos. Si quiero cambiar `recuperarClave`, lo cambio una sola vez dentro de la función.

---

## Patrones a corregir en el próximo video

| Lo que dijiste | Cuántas veces aprox. | Qué hacer |
|---|---|---|
| "como tal" | 12 | Borrar. La frase queda igual. |
| "eh" | más de 60 | Hacer una pausa en silencio. |
| "acá", "aquí", "este de acá", "esto" | más de 30 | Decir el nombre: la variable, la función o la línea. |
| "si en dado caso" | 8 | Decir "si" o "si no". |
| "pues", "prácticamente", "o sea" | más de 15 | Borrar. |
| "regla", "raí", "la ray", "red" | más de 15 | Pronunciar "array" o "arreglo", y usar siempre la misma. |
| Leer el código sin decir la palabra clave (`if`, `while`, `for of`) | constante | Nombrar la estructura antes de explicarla. |

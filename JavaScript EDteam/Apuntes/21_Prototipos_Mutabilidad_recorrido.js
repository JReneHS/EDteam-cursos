/* TODOS LOS DATOS BIENEN DE UN OBJETO EN JS (Tambien Java  y Kotlin) */
/* Con la funcion Object.getPrototypeOf() te indica de que Objeto deriva */
let amigo = 'Joke'
typeof(amigo) /* String */
console.log(amigo) /* Joke */
Object.getPrototypeOf(amigo) /* String {"", constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …} */
/* Realmente TODOS los datos de JS son Objetos */
let amigo2 = new String('Jose') /* Objeto Constructor */
typeof(amigo2) /* Object */
console.log(amigo2) /* String {Jose} */
/* Por varios motivos no es bueno que hagas constructores de los datos basicos o nucleares por algo llamado "Cadena de prototipos" */
/* Todos los prototipos empiezan por MAYUSCULAS */
/* Accediendo a los prototipos puedes modificar el comportamiento de las clases ya que se heredan en la cadena de prototipos, inclusive agregarle nuevas propiedades y metodos a las clases usuales como String, Number,Boolean, etc... */
String.prototype.length2 = 'Tu mamá' /* Ahora TODOS los Strings tienen una propiedad llamada length2 que devuelve 'Tu mamá' */
/* El problema con agregar o heredar nuevas propiedades o metodos a los prototipos es que serán tomadas en cuenta por varios metodos de clase, por ejemplo el ciclo "for in" o el operador "in".

Así que si declaras un Prototipo con 5 propiedades, creas varios objetos y despues modificas el prototipo, todos, absolutamente TODOS los objetos habidos y por haber tendrán esas modificaciones.
*/

/* 
TODOS LOS OBJETOS SON MUTABLES 
Los datos o valores primitivos son INMUTABLES
    NO ES LO MISMO ASIGNAR VALORES QUE SER MUTABLE
        Inclusive no estas "modificando" valores, estás asignando o cabiando nuevos valores
Todos los objetos son pasados POR REFERENCIA (arrays tambien)
*/

/* Crear copia de objeto que no modifique el original */
let perro = {
    nombre: 'grut',
    edad: 3,
    color: 'abigarrado',
    sexo: 'macho',
    vacunas: true,
    correr(){
        console.log(`${this.nombre} está corriendo`)
    }
}

let perro2 = Object.assign({},perro) /* Se pueden fusionar 2 objetos */

/* RECORRIDO DE OBJETOS */

/*
For in
    devuelve los nombres de las propiedades de un Objeto,
    pero devuelve tambien las propiedades de la herencia de la cadena de prototipos
        Si quieres solo las  propiedades personales del objeto, es decir sin su herencia, usa la funcion .hasOwnPropert()
        <ver clase 20 para un ejemplo>
 */

/* 
For of
    NO RECORRE UN OBJETO SIN ALGUNA AYUDA, ya que un Objeto No tiene Indices
    En jerga de JS: Un objeto no es un elemento iterable, por eso For of no funciona por si solo en un Objeto.

    Si deseas usarle tendras que echar mano de alguno de estos 3 metodos:
        Object.entries()
            Devuelve como arrays cada una de las entradas del objeto, es decir la pareja de "propiedad : valor"
        Object.keys()
            Devuelve en un "Array like" con todas las propiedades (es decir los nombres)
                Se dice que es "Array like" porque parece Array pero no lo es
                Es un Objeto tipo Array donde las propiedades son los indices y los valores son los nombres de las propiedades. (Ejemplo mas adelante)
        Object.values()
            Exactamente que Object.key() pero devuelve los VALORES no las propiedades.
*/
Object.keys(perro)
/* 
(6) ["nombre", "edad", "color", "sexo", "vacunas", "correr"]
    0: "nombre"
    1: "edad"
    2: "color"
    3: "sexo"
    4: "vacunas"
    5: "correr"
length: 6
__proto__: Array(0)
*/
/* 
CIUDADANO DE PRIMERA CLASE ->
    las funciones son un valor en JS es decir:
        + Pueden ser almacenadas en varaibles o constantes
            funciones por expresion
        + Pueden ser pasadar como argumentos de otra funcion
            callbacks
        + Pueden ser retornadas por otra funcion
            closures
        + Pueden tener metodos o propiedades
            POO
*/

/* Funciones por expresion */
const c = console.log /* Estoy copiando el funcionamiento de console.log en una constante c
console.log SIN PARENTESIS se comporta como VALOR no como funcion, por eso puedo
mandarla a alguna variable o a alguna constante */
const multiplicar = (a,b) => a*b
c(multiplicar(3,4)) /* Ahora puedo invocar a c en vez de console.log */
c(c) /* Esto es equivalente a decir:
    console.log(c) <==> console.log(console.log)
    console.log() =/= console.log
    console.log() -> es una FUNCION
    console.log -> es un VALOR */

console.log(console.log) /* ƒ log() { [native code] } */
console.log(console.log()) /* Undefined */

/* CallBacks */
let edad = multiplicar(5,4)
c(edad)
let edad2 = multiplicar(multiplicar(5,4),2) /* Muy util para recursividad */
c(edad2)

/* Closures */
function sumar(x) {
    return function(y) {
        return x + y
    }
}

c(sumar(5)) /* En este ejemplo se queda hasta el primer return
ya que solo se imboca una vez la funcion
ƒ (y) {
    return x + y
} */

c(sumar(5)(2)) /* <7> ya que se manda el segundo valor */

/* Sumar con operador flecha */
const sumar2 = x => y => x + y
c(sumar2(5)(2))

/* Cosa LOCAA */
const doSomething = x => y => x * y
const a = doSomething(2)(2) // a = 4
const b = doSomething(3) // b = f (y) => 3 * y
/* Realmente b es una funcion en espera */
c(doSomething(a)(b(3))) // 4 * 3*3 = 4 * 9 = 36
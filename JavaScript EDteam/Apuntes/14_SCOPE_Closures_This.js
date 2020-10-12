/* 
SCOPE
    es el contexto del que una variable EXISTE
    el ejemplo mas sencillo es el grupo interno de  un bloque {}
    NO PUEDES METERTE DENTRO DE UN BLOQUE
    pero...
    si estás dentro de un bloque SI PUEDES LEER LO QUE ESTÁ FUERA DE EL
*/
let c = console.log
{
    let profesor = 'Gio'
    c(profesor)
}
c(profesor) /* Profesor is not defined */

{
    let edad = 23
    {
        c(edad) /* SI puedes leer de adentro hacia a fuera */
    }
}
c(edad) /* NO puedes leer de afuera hacia adentro */

/* 
CLOSURES
    son como a travez de funciones internaspodemos llegar a valores externos
    pueden ser funciones normales o con flecha
*/

function aumentar() {
    let numero = 0
    return function() {
        numero++
        c(numero)
    }
}

aumentar() /* No imprime nada porque solo genera numero = 0 */
c(aumentar()) /* Aqui se ve que realmente es una funcion en espera */
aumentar()() /* aquí se ejecuta la segunda funcion */
aumentar()()
aumentar()()
aumentar()()
aumentar()()
aumentar()()
/* No hay aumento porque en cada invocacion se renueva numero = 0 */
const incrementar = aumentar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
incrementar()
/* 
En este caso SI hay incremento porque realmente:
aumentar() = ƒ () {
    numero++
    c(numero)
}
En este caso Incrementar esta accediendo al SCOPE de aumentar() y está
ejecutando la funcion interna anonima
*/
c(numero)
/* En cambio con console.log() no le es posible acceder al SCOPE de aumentar() */

/* 
THIS
    representa AL OBJETO del cual se ejecuta la funcion (igual que java)
*/
let user = {
    nombre: 'René',
    edad: 24,
    getEdad(){
        c(this.edad)
    }
}
let edad = 15
user.getEdad()
let perona = {
    nombre: 'René',
    edad: 24,
    getEdad(){
        c(edad)
    }
}
perona.getEdad() /* Cuando NO hay this, busca en el SCOPE mas alto, al objeto global*/
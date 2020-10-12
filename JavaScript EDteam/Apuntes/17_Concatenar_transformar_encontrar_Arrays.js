let c = console.log
let numeros1 = [1,2,3,4,5,6,7,8,9,1000]
let numeros2 = [300,250,21,7,57,691000]
let string1 = numeros1.join(' ') /* Crea un string separando los valores con ' ' */
c(string1)
let string2 = numeros1.join(',') /* Crea un string separando los valores con ',' */
c(string2)
let array1 =  numeros1.concat(numeros2) /* Concatena 2 arrays: "numeros1" y "numeros2" */
c(array1)
/*
La diferencia entre push y concat es que
push() MODIFICA EL ARRAY
concat() CREA UN NUEVO ARRAY
*/

/* ENCONTRAR UN VALOR EN EL ARRAY */
numeros1.indexOf(2)
/* Te devuelve la posicion del dato en caso de no encontrar devuelve -1 */
numeros1.find((numeros1) => numeros1 > 100)
/* .find(callback) lee una funcion de condicion y
te devuelve el primer valor que la cumple
(argumentos) => cumplimiento
*/

/* Eliminar elementos repetidos*/
/* No existe un metodo directo que lo haga pero hay un buen truco
usando la funcion Set:
    si haces: 
        new Set(array)
            te devuelve UN OBJETO, no un array
            (6) {10, 100, 23, 57, 27, 107}
    con el OPERADOR SPREAD:
        ...new Set(array)
            genera un error
    EMPERO
        [... new Set(array)]
            contiene los datos del objeto en un array
            (6) [10, 100, 23, 57, 27, 107]
*/
let itero = [10,100,23,10,23,57,57,27,107,100]
c(itero)
let novo = [...new Set(itero)]
c(novo)
/* Inclusive se puede hacer una funcion */
const removeDoppelganger = (array) => [...new Set(array)]

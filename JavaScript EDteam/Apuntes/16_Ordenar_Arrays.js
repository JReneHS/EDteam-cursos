/* 
Existen metodos NAIVOS para ordenar un array
*/
/* Reverse */
let c = console.log
let nombre = 'Julio Verne'
let array1 = nombre.split('')
c(nombre)
c(array1)
array1.reverse() /* Voltea el Array (de atras para adelante) */
c(array1)
let erbmon = array1.join('') /* Lo contrario a .split() */
c(erbmon)
/* Todo lo anterior se puede hacer en una sola linea
    nombre.split('').reverse().join('')
    Inclusive hacer una funcion:->
*/
const reverseText = string => string.split('').reverse().join('')

/* Sort */
let letras = ['Z','B','D','F','f','A']
c(letras.sort()) /* (6) ["A", "B", "D", "F", "Z", "f"] */

/* Aunque sort SOLO FUNCIONA CON LETRAS
YA QUE USA STRINGS COMO ORDENAMIENTO */
let num = [1,2,30,32,200,1000,1234]
c(num.sort()) /* (7) [1, 1000, 1234, 2, 200, 30, 32] */

/* para ordenar numeros se usa un callback */
c(num.sort((a,b) => a - b))
/* Aqui esta funcion está comparando por parejas
si a > b  ->  a-b = +
si a < b  ->  a-b = -
y así los ordena
*/
/* La función de comparación "(a,b) => a - b" no devuelve true ni false,
el método sort espera un valor positivo, un cero o un valor negativo para hacer
intercambio de posiciones en el arreglo conforme vaya recorriendolo 
Actuaría como una especie de BubleSort
*/
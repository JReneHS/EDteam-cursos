/* 
Normalmente se recorre con estos bucles:
    for
    for of
    .forEach(callBack(elemento,indice,array))
    .some(callBack(elemento,indice,array))
    .every(callBack(elemento,indice,array))

    Super Especiales
        .map(callBack(elemento,indice,array))
        .filter(callBack(elemento,indice,array))
        .reduce(callBack(previousValue,currentValue,indice,array)
*/
let c = console.log
let array = ['a','b','c','d','e','f','g','h']
let teachers = ['Juan','Pedro','Pablo','Lucas']
let numbers = [5,6,7,8,10,12,15]
// for
for (let i = 0; i < array.length; i++) {
    c(array[i])
}

// for of
for (const element of array) {
    c(element)
}

// .forEach()
/* Se aplica cuando queremos aplicar una funcion a cada elemento */
array.forEach((element,i) => {
    c(element)
    c(i)
})

teachers.forEach((element,i,arr) => {
    c(element + ' [' + i + '] <' + arr + '>')
})

numbers.forEach((element,i,arr) => {
    c(numbers[i] *=element)
    c(arr)
})

// .some(callBack)
// .every(callBack)
/* 
Si quieres saber si alguno de los elementos cumple con alguna condicion 
retorna un boolean

Some sería como un or ||
    ya que ve Si Alguno cumple con esa condicion
Every sería como un and &&
    ya que vi Si Todos cumplen con la condicion
*/
teachers.some(el => el === 'Pedro') /* true */
teachers.some(el => el === 'Alan') /* false */
teachers.some(el => el.includes('a')) /* true */
teachers.some(el => el.length >= 3) /* true */

teachers.every(el => el.includes('a')) /* false */
teachers.every(el => el.length >= 3) /* true */


/* ESTAS TRES FUNCIONES O METODOS GENERAN UN NUEVO ARRAY 
NUNCA MODIFICAN EL ARRAY ORIGINAL... SALVO:
    en el DOM (API del ordenador)
        pero ya son cosas del DOM no de JS
*/

// .map(callBack)
/* Transforma TODOS los elementos del array segun el CallBack */
/* Lo que hace es aplicar el callBack a Todos los elementos del array */
numbers.map(el => el*el) /* (7) [25, 36, 49, 64, 100, 144, 225] */


// .filter(callBack)
/* Filtra los elementos que coincidan con la condicion del CallBack */
numbers.filter(el => el > 5) /* (6) [6, 7, 8, 10, 12, 15] */
numbers.filter(el => el % 5 === 0) /* (3) [5, 10, 15] */

// .reduce(callBack)
/* Reduce TODOS los elementos a un unico valor */
/* Al igual que sort() compara de 2 en 2 */
numbers.reduce((a,b) => a + b)
/* 
Type Coertion
    Es la forma en que Js intenta interpretar los tipos de dato
*/

let numero = 5
let nombre = 'Juan'
let edad = '25'
let cargo = 'estudiante'

console.log(numero + numero)
console.log(numero + nombre)
console.log('hola' + ' mundo')
console.log(nombre+' '+'tiene'+' '+edad+' '+'años')
console.log('hola'*10)/* NaN */
console.log('2'*20)/* 40 */
console.log('2a'*20)/* NaN */
console.log(true+'hola')/* truehola */
console.log(true+1)/* 2 */
console.log(false+1)/* 1 */
console.log(false=='')/* true */
//Podemos usar un dato por valor o por referencia
//Todos los datos primitivos se pasan solo por valor
//Todos los datos compuestos se pasan por referencia
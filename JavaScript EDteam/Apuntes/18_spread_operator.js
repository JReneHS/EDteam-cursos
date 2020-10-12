/* SPREAD OPERATOS*/
/* Estos son solo algunos usos del operador "..." */
/*
De una forma simple lo que hace es "expandir" o
desempaquetar los datos o valores de "algo".
Es como si abrieras de forma explosiva un paquete de galletas
y salieran todas volando, por ende deberían estar contenidas en algo
*/
let itero = [10,100,23,10,23,57,57,27,107,100]
/* desempaqueta TODOS los datos del Objeto Set y se almacenan en un array */
let novo = [...new Set(itero)]

/* 
Se usa para mandar infinidad de argumentos
ya que expande todos los datos que mandas y los anexas
a los argumentos de una funcion
*/
const sumarTodo = (...numeros) => {
    console.log(numeros)
    let res = 0
    for (let i = 0; i < numeros.length; i++) {
        res += numeros[i]
    }
    return res
}
let sum = sumarTodo(1,2,3,4,5,6,7,8,9,10)

/* USAR SPREAD OPERATOR CON LA LIBRERIA (Objeto) MATH */
/* 
Las funciones Math.min() y Math.max() no reciben arrays:
    Math.min() -> devuelve el valor MENOR de un conjunto
    Math.max() -> devuelve el valor MAYOR de un conjunto
*/
/* Para que estas funciones acepten arrays tienes que usar
el spread operator (...) ya que así se desempaquetan */
c(Math.min(novo)) /* NaN */
c(Math.max(novo)) /* NaN */
c(Math.min(...novo)) /* 10 */
c(Math.max(...novo)) /* 107 */
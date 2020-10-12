/* OPERADORES */
/* 
operaores de asignacion
    =
    +=
    -=
    /=
    *=
*/

/* 
operadores de comparacion
    == compara valores (incluyendo el type Coertion)
    === compara valor mas tipo de dato
    != diferencia
    !== diferencia contando tipo de dato
    >
    <
    (se pueden comparar letras o cadenas por orden alfabetico)
    >=
    <=
*/
/* 
Operadores unarios
    Comparacion
        typeof
        !
    Aritmeticos
        +
        -
        *
        /
        %
        ++
        --
*/
/* 
Operador Ternario
    expresion ? si es verdad : si es falso (?:)
*/

let edad = prompt('dime tu edad')
let pais =(edad >= 18) ? 'Eres mayor de edad' : 'Aun eres un niño'
alert(pais)

/*
Operador de corto circuito (no es lo mismo que los operadores logicos)
    || evalua el primer valor, si es null o falso asigna el segundo de lo contrario se queda con el primero
    && si el primer valor es null o false se queda con ese valor, de lo contrario va al segundo
*/
let a,b,c,d
a = b || 23 /* null || 23 -> 23 */
console.log(a) /* a = 23 */
d = b && a /* null && 23 -> null */
console.log(d) /* d = null */
b = 14 || 15 /* 14 || 15 -> 14 */
console.log(b) /* b = 14 */
c = b && a /* 14 && 23 -> 23 */
console.log(c) /* c = 23 */

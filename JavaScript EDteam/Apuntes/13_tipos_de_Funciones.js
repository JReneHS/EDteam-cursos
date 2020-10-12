/* 
FUNCIONES PURAS
    es aquella que no causa un efecto secundario
        es decir no modifica NADA de afuera
            es una de las bases de la programacion funcional
    siempre devuelve los mismos valores para los mismos parametros
*/
let c = console.log
let a = 'Hola'
/* Esta funcion NO modifica nada del exterior */
const saludar = (saludo,persona) => `${saludo} ${persona}` 
c(saludar(a,'René'))

/* 
FUNCIONES AUTOINVOCADAS
    son aquellas que no necesitan invocarse es decir invocar con parentesis
*/
/* Cuando se encierra entre parentesis una funcion se transforma en una expresion */
/* Realmente este tipo de patron ya no se usa en JS6 en adelante */
const saludoAutoinvocado = ((saludo,persona) => `${saludo} ${persona}`)(a,'Luis')
c(saludoAutoinvocado)

/* 
FUNCIONES NOMBRADAS Y ANONIMAS
    las funciones nombradas son todas las que tienen nombre
    las funciones anonimas NO tienen nombre
        normalmente se encuentran dentro de los CallBacks
        () => {} es una funcion anonima
*/
setTimeout(() => {
    alert('Hola BEBE, tardé 3000 ms (3seg)')
},3000) 
/* setTimeout es un metodo del objeto global
    espera cierto tiempo para ejecutar ALGO */
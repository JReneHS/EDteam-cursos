/* Para hacer comentarios en VSC es Shift + Alt + A */
/* Para duplicar lineas en con Shift + Alt + arriba || abajo */
/* Con Ctrl + Alt + up/down hago lineas multiples de seleccion*/
/* Con Alt muevo lineas de pocision */
/* Ctrl + izq/der se mueve por espacion en vez de caracter */
/* Ctrl + D selecciona la siguiente palabra que esté resaltada */
/* Ctrl * Shift * L selecciona TODAS las palabras resaltadas */
/* Ctrl + Up/Down mueve la vista de la  pantalla */
/* Alt + z ajusta las lineas al tamaño de la pantalla */
/* Para no andar escribiendo let en cada declaracion de la variable se separa con comas y si es necesario puedes no instanciarlas es decir darles valor SCOPE (?) */
/* JS usa CamelCase */
let numero = 18,
    nombre = 'Juan',
    empresa = 'Nintendo',
    edad, cargo, pais

const eso = 30
//eso = 20 
/*No puedes modificar las constantes*/ 
console.log(numero)
console.log(numero +1)
console.log(numero * 2)
console.log(numero / 3)
console.log(typeof numero)
console.log(typeof nombre)
console.log(typeof empresa)
console.log(typeof edad)
if (5 > numero) {
    console.log(numero)
}else{
    console.log(numero + ' Es mayor a 5')
}
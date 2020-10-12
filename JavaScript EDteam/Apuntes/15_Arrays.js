/* 
ARRAYS
    es una lista de valores separados por comas y encerrados en corchetes
    tiene la propiedad length
*/
let c = console.log
let array = ['hola',2,true,undefined,[1,2,3,4,5],{}]
c(array)
let largo = array.length -1

/* Se pueden asignar varaibles a cada uno de los elementos del array */
/* DESESTRUCTURACION
    es decir: dividir estructuras en partes */
let [s1,s2,s3,s4,s5,s6] = array
/* Se hace un array de VARIABLES y se asignan a cada valor del array */

/* METODOS */
/* 
    array.push(dato) -> agrega un dato al FINAL del array
    array.pop() -> elimina y retorna el ULTIMO valor del array

    array.unshift(dato) -> agrega un dato al INICIO del array
    array.shift() -> elimina y retorna el PRIMER valor del array

    array.splice(indiceInicio,cantidadBorrar,valor1,valor2,valor3,...)
        Esto lo que hace es eliminar y agregar datos desde una posicion especifica
            array.splice(2,0,'a','b','c')
                En Posicion 2
                elimina 0 datos
                agrega en esa posicion los datos 'a' , 'b' , 'c'
            array.splice(2,2)
                En Posicion 2
                elimina 2 datos (es decir el dato 2 y dato 3)
    array.slice(inicio,fin-1)
        Crea un NUEVO ARRAY a partir de los datos de otro 
        y NO MODIFICA el array original
*/

let lista = [1,2,3,4,5,6,7,8,9]
lista.push('Beto') /* (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
lista.push('DEDO') /* (11) [1, 2, 3, 4, 5, 6, 7, 8, 9, "Beto", "DEDO"] */
lista.pop() /* DEDO */
lista.unshift('Coral') /* (11) ["Coral", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
lista.unshift('Cabra') /* (12) ["Cabra", "Coral", 1, 2, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
lista.shift() /* Cabra */
lista.splice(3,0,{}) /* (12) ["Coral", 1, 2, {…}, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
lista.splice(1,2) /* (10) ["Coral", {…}, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
let nuevaLista = lista.slice(2,8)
c(lista) /* (10) ["Coral", {…}, 3, 4, 5, 6, 7, 8, 9, "Beto"] */
c(nuevaLista) /* (6) [3, 4, 5, 6, 7, 8] */
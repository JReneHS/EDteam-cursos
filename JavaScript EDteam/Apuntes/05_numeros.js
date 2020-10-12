/* 
siempre que hay parentesis es metodo o funcion
    toFixed() -> especifica en numero de decimales
        edad.toFixed(2)
            -> 23.00
    parseInt() -> convierte texto a numero
        variable = parseInt(texto,baseNumerica)
        variable = parseInt('25',10)
            -> 25
    parseFloat() -> convierte texto a numero flotante
        variable = parseFloat('23.3456',10)
            -> 23.3456
    objeto Math
        Math.floor() -> redondea siempre hacia abajo
        Math.ceil() -> redondea siempre hacia arriba
        Math.round() -> redondea segun el valor
        Math.random() -> devuelve un numero entre 0 - 1
    
    Si queremos numeros aleatorios entre 0 y 10
        Math.raund(Math.random*10)
*/
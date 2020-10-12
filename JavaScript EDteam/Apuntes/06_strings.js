/* 
STRINGS
Aqui se siguen respetando las estructuras basicas de string [0][1][2][3][4][5]...[n]
                                                        ->  [H  O  L  A ...]
    tiene propiedad
        .length -> longitud de la cadena
    Metodos
    sin parametros
    .trim() -> quita los espacios en blanco delante y detras
    .toUpperCase() -> convierte todo a mayusculas
            .toLoweCase() -> convierte todo en minusculas

        Encontrar Caracteres
            De Posicion
                .indexOf(string) -> busca un array dentro de otro y devuelve la posicion
                    'Hola'.indexOf('o') -> 1
                tambien puedes restringir la busqueda
                    .indexOf(string,posicion)
                .lastIndexOf(String) -> lo mismo pero desde el final
            De Booleanos
            .includes(String) -> igual que indexOf pero devuelve un Boolean
                'Hola'.includes('o') -> true
            .startsWith(String) -> Busca Prefijos y devuelve un Boolean
            .endsWith(String) -> Busca sufijos y devuelve un Boolean
            
        Metodos de Manipulacion
            .replace(String-original,String-nuevo) -> reemplaza un texto
                'Hola mundo'.raplace('mundo','René') -> 'Hola René'
            .split(string de separacion) -> separa la cadena y las acomoda en un array
                si deseas separa una cadena por sus caracteres ingresa una cadena vacia
                    'Hola mundo'.split(' ') -> ['Hola','mundo']
                    'Hola mundo'.split('') -> ['H','o','l','a',' ','m','u','n','d','o']
                    'Hola mundo'.split('o') -> ['H','la mund','']
            .substring(inicio,final) -> nos regresa el substring que empieza en la pocision inicio
                                        El final es opcional (no incluye en la cadena el caracter final)
                                        Si el final es nigativo extrae hacia atras
            .substr(inicio,numero de caracteres a tomar) -> nos regresa la cadena que empieza en la pocision de inicio y 
                                                            regresa la cantidad de caracteres que indicas.
                                                            Si el inicio es negativo extrae hacia atras
                'Hola mundo'.substr(2,5) -> 'la mu'
            .slice(inicio,final) -> acepta numeros negativos y corta el texto ya sea contando adelante o atras. 
*/
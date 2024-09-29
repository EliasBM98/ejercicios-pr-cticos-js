//EJERCICIO 2 - Crea un objeto que represente un producto con las propiedades nombre, precio, y disponible (un booleano). Escribe una función que imprima la información del producto solo si está disponible.

/*Pseudocodigo
    INICIO
        crear objeto
        Inicio Funcion
            SI se cumple la condicion de booleano 
            Imprimir objeto
        Fin Funcion
    FIN*/

const objProducto = {
    nombre: "Ipad",
    precio: 800,
    disponible: true
}

const mostrar=()=>{
        if(disponible = true){
            console.log(objProducto)
        }
    }

mostrar()


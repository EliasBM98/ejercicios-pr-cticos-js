//EJERCICIO 4 - Crea un array de objetos que representen productos, con propiedades nombre, precio, y categoria. Escribe una función que devuelva todos los productos de una categoría específica.

/*Pseudocodigo
    INICIO
        crear array de objetos
        
        Inicio funcion
        Leer objetos del array
        SI los objetos cumplen con la condicion de una categoria
        Escribir productos que cumplen
        Fin funcion
    FIN*/

const productos=[
    objProducto1 ={ 
        nombre: "Ordenador",
        precio: 1000,
        categoria: "electronica"
    },

    objProducto2 ={ 
        nombre: "Mesa",
        precio: 100,
        categoria: "Muebles"
    },
    objProducto1 ={ 
        nombre: "Telefono",
        precio: 500,
        categoria: "electronica"
    },
]

const filtrar = ()=> {
    productos.forEach(elemento=>{
        if (elemento.categoria == 'electronica')
            console.log(elemento)
    })
}

filtrar()
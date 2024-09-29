//EJERCICIO 3 -Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.

/*Pesudocodigo 

1 INICIO
2 Leer libros
3 si anio > 2000
4   mostrar libro
fin
*/


const objLibro1={
    titulo: "Cocina",
    autor: "Cocinero",
    anio: 1980
}

const objLibro2={
    titulo: "Pintura",
    autor: "Pintor",
    anio: 2010
}

const objLibro3={
    titulo: "Ingenieria",
    autor: "Ingeniero",
    anio: 2020
}

let arrayLibros = [objLibro1, objLibro2, objLibro3]

const librosNuevos=()=>{
    arrayLibros.forEach(item=>{
       
        if(item.anio>2000){
            console.log (item)
        }
    })

}
librosNuevos()
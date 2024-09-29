//EJERCICIO 7 – Solicite al usuario que escriba un color. Si ese color existe que lo traduzca al inglés, sino que muestre un mensaje de error.

/*Pseudocodigo
    INICIO
        crear objeto con traducciones de todos los colores

        pedir al usuario que introduzca un color

        si el color introducido existe 
            mostrar traduccion del color
        
        sino existe
            mostrar mensaje de error
*/




const traducciones ={
    rojo: "Red",
    verde: "Green",
    azul: "Blue",
    cian: "Cyan",
    magenta: "Magenta",
    amarillo: "Yellow",
    negro: "Black",
    blanck: "White"
}

//Solicitud de color al usuario
let colorUsuario = prompt("Introduce un color").toLowerCase();

//Funcion 
const traduccion=()=>{
    if (colorUsuario[traducciones]){
        console.log(`${colorUsuario} en inglés se dice ${colorUsuario[traducciones]}`)
    
    } else if (){
        console.log("Error: tu color no existe")
    }
}

traduccion()



//NO ME SALE
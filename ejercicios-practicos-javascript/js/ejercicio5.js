/*EJERCICIO 5 – Hacer un programa que:

1 Solicite al usuario el ingreso por teclado de 3 notas.
2 Saque la media de las notas.
3 Muestre por pantalla
si la nota es menor que 5 'SUSPENSO'
si la nota es mayor o igual 5 y menor que 7 'APROBADO'
si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'*/

/*Pseudocodigo
INICIO
    leer notas (array) 
    inicio funcion1
        sumar todas y dividirlas / 3
        almacenar resultado en una variable (media)
    fin funcion 1

    inicio funcion 2
        leer media 
        media <5
            mostrar suspenso
        media >= 5 && media<7
            mostrar aprobado
        media >=7 && media==10 
            mostrar sobresaliente
    fin suncion 2
FIN*/



//Funcion1
let notas=[6, 7, 8];
const calcularMedia=()=>{

    let calculo = notas.reduce(function (acumulador, num) {
    return acumulador + num / 3
    }, 0);
}
calcularMedia()



//Funcion 2
const mostrarMedia =()=>{
    if (resultado < 5){
        console.log("Suspenso")

    } else if (resultado>=5 && resultado<7){
        console.log("Aprobado")

    } else if (resultado>=7 && resultado<=10){
        console.log("Sobresaliente")
    }
}
mostrarMedia()

//no me sale
//Consigo que cada funcion haga su tarea por separado pero no se como declarar la variable obtenida desde la funcion 1 para poder meterla en la 2 y trabajar los condicionales 
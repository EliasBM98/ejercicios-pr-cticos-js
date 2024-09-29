/*EJERCICIO 6 – Hacer un programa que:
Ingreso de un numero por teclado
Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras.*/


/*pseudocodigo:
    INICIO
            solicitar introducir numero
    
        INICIO Funcion1
            Leer numero
            Si numero >=-9 && <=9
                Mostrar "Numero de una cifra"
            Si numero >=-99 && <=99
                Mostrar "Numero de dos cifras"
            Si numero >=-999 && <=999
                Mostrar "Numero de tres cifras"
        FIN Funcion1
    FIN*/



let numeroIntroducido = prompt ("Introduce un número");

const averiguarNumero=()=>{
    if (numeroIntroducido >=-9 && numeroIntroducido<=9){
        console.log("Numero de 1 cifra")
    } else if (numeroIntroducido>=-99 && numeroIntroducido<=99){
        console.log("Numero de 2 cifras")
    }else if (numeroIntroducido>=-999 && numeroIntroducido<=999)
        console.log("Numero de 3 cifras")

}
averiguarNumero()


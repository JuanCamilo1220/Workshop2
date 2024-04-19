const destino = prompt("Escriba su lugar de destino")
let cantidadDias = prompt("Escriba la cantidad de dias que desea viajar")
let presupuesto = prompt("Ingrese su presupuesto inicial")

gastosComida = 50000
gastosActividades =100000

const i = 0

do{

    presupuestoDiario = presupuesto/cantidadDias

    if (presupuestoDiario >= (gastosComida+gastosActividades)){
        alert ("Su presupuestoes suficiente para el viaje")
        const i = 1
        break
    }
    else {
        alert("Su presupuesto no fue suficiente para el viaje")
        cantidadDias = prompt("Escriba un nuevo numero de dias")
        presupuesto = prompt("Ingrese su nuevo presupuesto")
    }
}while (i == 0)
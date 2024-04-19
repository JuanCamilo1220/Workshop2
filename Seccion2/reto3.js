do{
    var clima = confirm("¿Hará sol donde irás (ok), o llovera (cancel)?")
    var pesoMax = Number(prompt("¿Cual es el peso maximo permitido?"))
    var peso = Number(prompt("¿Cuanto peso lleva tu maleta?"))
    var espacio = Number(prompt("¿Cuantos objetos entran en la maleta?"))
    if (isNaN(pesoMax) && isNaN(peso) && isNaN(espacio)){
        alert("Por favor, ingresa un valor valido")
    } else{
        break
    }
}while(true)

if(clima){
    alert("Lleva objetos para sol")
}else {
    alert("Lleva objetos para lluvia")
}
if(peso >= pesoMax - 10 && peso <= pesoMax){
    alert("Lleva objetos livianos")
}
else{
    alert("Puedes llevar objetos pesados")
}
if (espacio > 5){
    alert=("Puedes llevar bastantes objetos")
}
else{
    alert("Lleva pocos objetos")
}

while(true){
    let opcion = confirm("¿Deseas agregar un objeto?")
    if (opcion){
        objeto = prompt("Nombre del obeto")
        pesoObj = Number(prompt("¿Cuanto pesa del objeto?"))
        espacioObj = Number(prompt("¿Cuanto espacio ocupa el objeto"))

        nuevoPeso = peso += pesoObj
        if (nuevoPeso > pesoMax){
            alert("No puedes llevar mas objetos")
        }

        nuevoEscapcio = espacio +=1

        if (nuevoEscapcio > espacio){
            alert("No puedes llevarmas espacios")
        }
    }else{
        break
    }
 }
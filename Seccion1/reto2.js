listaSouvenirs = []

const presupuesto = Number(prompt("Ingrese su presupuesto"))

let valorTotal = 0;

do{
    opcion = prompt("¿Desea agregar un souvenir?").toUpperCase()
    if (opcion == "SI"){
        const nombre = prompt("Ingrese el nombre del souvenir")
        const precio = Number(prompt("Ingrese el precio del souvenir"))
        const disponible = confirm("Oprima 'OK' si esta disponible")
        
        if (typeof(nombre) == "string" && typeof(precio) == "number" && !isNaN (precio)){
            alert("Los datos han sido ingresados correctamente")
            const souvenir = {
                nombre,
                precio,
                disponible,
            }
            listaSouvenirs.push(souvenir)
            if (disponible == true ){
                valorTotal = valorTotal + precio

                console.log(valorTotal)
            }
        }
        else{
                alert("Los datos han sido mal ingresados")
            }
    }
    else{
        break
    }

}while (true)

if( valorTotal >= presupuesto){
    alert ("El valor supera su presupuesto")
}
else{
    alert ("Su presupuesto es suficiente")
}

console.log(listaSouvenirs)

console.log(disponible)


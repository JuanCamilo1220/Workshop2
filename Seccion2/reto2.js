const presupuesto = Number(prompt("Ingresa tu presupuesto diario"))
const gastoComer = Number(prompt("Ingrese sus gastos estimados al comer"))
const gastoLibro = Number(prompt("Ingrese sus gastos estimados en libros"))
const ahorro = Number(prompt("Ingrese cuanto desea ahorrar"))

let gastoTotal = gastoComer + gastoLibro

if (presupuesto >= gastoTotal + ahorro){
    alert("Tu presupuesto es mayor o igual a todos tus gastos")
} else if (presupuesto >= gastoComer + ahorro || presupuesto >= gastoLibro + ahorro){
    while (true){
        alert ("Tu presupuesto te permite solo uno de las gastos y ahorrar")
        let opcion = prompt("¿Que quieres hacer? 1:Comer afuera 2:Comprar un libro")

        if (opcion == 1){
            alert("Puedes salir a comer y ahorrar")
        }
        if (opcion == 2){
            alert("Puedes comprar un libro y ahorrar")
        }
        if (opcion != 1 && opcion != 2){
            alert("Elige una opcion correcta")
            break
        }
        break
    }
}
if (presupuesto < gastoTotal + ahorro){
    alert("Reduce tus gastos, estas sobrepasando tu presupuesto y no puedes ahorrar")
}





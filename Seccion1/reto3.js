const presupuestoInicial = Number(prompt("Ingrese su presupuesto inicial"))
const gastos = Number(prompt("Ingrese sus gastos"))
 
presupuestoFinal = presupuestoInicial - gastos;

const umbral = Number(prompt("Ingrese su umbral de gatos extras"))

if (presupuestoFinal >= umbral){
    listaNombresProd = []
    listaPreciosProd = []
    do{
        let opcion = confirm("¿Desea agregar un articulo?")
        if (opcion == "OK"){
            let articulo = prompt("Ingrese el nombre del articulo")
            let precio = Number(prompt("Ingrese el precio del articulo"))
        }
        listaNombresProd.push(articulo)
        listaPreciosProd.push(precio)
    } while (true)
    prodCostoBarato = Math.min(...listaPreciosProd)
    prodCostoMin = listaPreciosProd.indexof(string(prodCostoBarato))
    prodAComprar = listaNombresProd[prodCostoMin]
    alert(`Puede llevar el producto ${prodAComprar}`)
}
else{
    alert("No puede llevar nada porque no tiene más plata")
}



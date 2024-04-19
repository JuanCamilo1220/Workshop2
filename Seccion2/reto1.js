let energia = confirm("¿Tienes Suficiente energia?")
let clima = confirm("¿Esta haciendo un buen clima?")

if (energia && clima){
    alert("Puedes salir a correr")
}

if (energia && !clima){
    alert("Quedate en casa a trabajar")
}

if (!energia && !clima){
    alert("Tomate el dia para descansar")
}
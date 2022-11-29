const receta = {

}
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({ nombre: "pan", cantidad: 2 });
receta.ingredientes.push({ nombre: "queso", cantidad: 1 });
//console.log(receta.ingredientes)
console.log(receta.ingredientes[0].nombre)

let resultado = 0;
for (let i = 0; i < receta.ingredientes.length; i++) {
    resultado += receta.ingredientes[i].cantidad;
}
console.log(resultado)



//console.log(receta.ingredientes[1].cantidad + receta.ingredientes[1].cantidad)

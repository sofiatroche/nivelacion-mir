let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"],
    estatura: 1.8
  }
console.log(pedro.edad);
delete pedro.activo; 
console.log(pedro.activo);

for (let key in pedro) {
    console.log(key,":", pedro[key]);
}
/* function saluda(){
    return ("Hola, me llamo " + pedro.nombre); 
} */

const saluda = () => {
    return ("Hola, me llamo " + pedro.nombre); 
}

console.log(saluda(pedro))


/* let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave,":",pedro[llave]);
}  */
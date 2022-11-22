function join(arg){
    var texto = "";
    for(let i = 0; i < arg.length; i++){
        texto = texto + " " + arg[i];
    }
    return texto
}
//console.log(join(["Hola","Mundo"]))
console.log(join(["Make","It","Real"]))
//console.log(join([""]))
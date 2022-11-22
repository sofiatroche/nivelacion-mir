function sum(arg){
    suma = 0;
    for (let i = 0; i < arg.length; i++) {
        suma += arg[i];
    }
    return suma
}
console.log(sum([1,2,3]))
function maxIndex(arreglo){
    var maximo = 0;
    var indiceMax = 0;
    for(let i = 0; i < arreglo.length; i++){
        if(maximo < arreglo[i]){
            maximo = arreglo[i];
            //indiceMax=i+1;
            indiceMax = arreglo.indexOf(maximo)
        }
    }
    if(indiceMax == 0){
        indiceMax = -1;
    }
    return indiceMax;
}
console.log(maxIndex([0,0,4]))
//console.log(max([10,9,8,7,6,5,4]))
//console.log(max([]))

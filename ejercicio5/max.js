function max(arg){
    var maximo = 0;
    for(let i = 0; i < arg.length; i++){
        if(maximo < arg[i]){
            maximo = arg[i];
        }
    }
     if(maximo == 0){
        maximo ="undefined";
    } 
    return maximo;
}
console.log(max([1,2,3]))
//console.log(max([10,9,8,7,6,5,4]))
//console.log(max([]))

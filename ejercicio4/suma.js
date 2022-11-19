function suma(num) {
    if (num > 0) {
        var result = num;
        for (let i = 1; i < num; i++) {
            result += i;
        }
    }
    return result;
 }
console.log(suma(2))
/*
Escribe una función llamada suma que reciba un número positivo
y retorne la suma de todos los números desde 1 hasta ese número:
*/
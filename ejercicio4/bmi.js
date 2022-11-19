function bmi(peso, altura) {
  return peso / altura ** 2
}
console.log("Tu IMC es: " + bmi(53, 1.6));
/*
El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente fórmula: peso / altura^2.
Escribe una función llamada bmi que reciba dos argumentos: peso y altura.
Utiliza la formula para retornar el BMI correspondiente.
*/
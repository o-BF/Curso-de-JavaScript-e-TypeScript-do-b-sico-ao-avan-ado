let num1 = 5  
let num2 = 10.99847

console.log(num1.toString() +  num2); //converter number para strinh
console.log(num1.toString(2)); // converser number para string binario
console.log(num2.toFixed(3)); // fixando um number em X casas decimais
console.log(Number.isInteger(num1));  // retorna true para n inteiro, false ao contrario


let num3 = 0.7
let num4 = 0.1

/* num3 += num4;  // 0.8
num3 += num4;  // 0.9
num3 += num4;  // 1.0
*/


// arrumando matematicamente as imprecisões
num3 = ((num3 * 100)  +  (num4 * 100)) / 100;
num3 = ((num3 * 100)  +  (num4 * 100)) / 100;
num3 = ((num3 * 100)  +  (num4 * 100)) / 100;




console.log(num3)
console.log(Number.isInteger(num3));
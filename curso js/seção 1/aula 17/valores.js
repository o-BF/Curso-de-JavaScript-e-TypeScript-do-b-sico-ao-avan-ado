/* 
Primitivos (imutáveis) - string, number, boolean, 
undefined, null, bigint, symbol


Referência (mutaveis) - array, object, function

let a = [ 1, 2, 3, 4]
let b = a
let c = b

todos apontam para o mesmo lugar na memoria


let a = [ 1, 2, 3, 4]
let b = [...a]
let c = b

b agora copia o valor de a, mas aponta para outro lugar na memoria
*/




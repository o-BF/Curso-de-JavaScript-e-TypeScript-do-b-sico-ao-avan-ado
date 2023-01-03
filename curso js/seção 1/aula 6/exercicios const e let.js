const nome = 'Felipe'
const sobrenome = 'Gonçalves'
const idade = 25;
const peso = 72;
const altura = 1.80;
let imc = peso / ( altura * altura);
let dataNascimento = 2022 - idade;



console.log ( 'Meu nome é', nome, sobrenome, 'tenho', idade, 'anos, peso', peso, 'kg, e tenho', altura, 'de altura')
console.log ('Meu IMC é', imc , 'e nasci em', dataNascimento)


console.log ( 'Meu nome é '+ nome + ' '+ sobrenome +' tenho ' + idade + ' anos, peso ' + peso +'kg, e tenho ' + altura + ' de altura')
console.log (`Meu IMC é ${imc} e nasci em ${dataNascimento}`)
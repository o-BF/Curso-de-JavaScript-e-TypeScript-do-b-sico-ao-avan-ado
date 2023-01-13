/*
const pessoa1 = {
    nome: 'Felipe',
    sobrenome: 'gonçalves',
    idade: 25,
};

console.log(pessoa1.nome)
*/
/*
function criaPessoa1(nome, sobrenome, idade) {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}
const pessoa1 = criaPessoa1('Felipe', 'Gonçalves', 25);
const pessoa2 = criaPessoa1('Joao', 'Go', 20);
const pessoa3 = criaPessoa1('Maria', 'asda', 23);
const pessoa4 = criaPessoa1('Lara', 'Gonçaldwqves', 66);
const pessoa5 = criaPessoa1('Troxa', 'dqdqdqd', 21);


console.log(pessoa2.idade, pessoa3.nome, pessoa5.sobrenome);
*/

const pessoa1 = {
        nome: 'felipe',
        sobrenome: 'gonçalves',
        idade: 22,

        fala() {
            console.log(`${this.nome} ${this.sobrenome} esta fazendo ${this.idade} anos hoje`);
        },
        incrementoidade() {
            this.idade++;
        }
    }

    pessoa1.fala();
    pessoa1.incrementoidade();
    pessoa1.fala();
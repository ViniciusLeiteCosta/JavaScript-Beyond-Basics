/*

Ao trabalharmos com muitas variáveis, podemos colocar estas dentro dos
nossos objetos!

*/

//AO INVÉS DE
let nome1 = 'Vinicius';
let idade1 = 21;

/*

São chamadas de keys, ou chaves em JS.
Podemos colocar valores-chave dentro de um objeto!

*/

//PODEMOS UTILIZAR
let pessoa = {
    nome: 'Vinicius',
    idade: 21
};

//Formas de adicionar as nossas variáveis são:

//Notação com ponto - Dot Notation
pessoa.nome = 'Fulano';

//Notação com colchetes - Bracket Notation
pessoa['nome'] = 'Fulano Bracket';

console.log(pessoa.nome);

//Por padrão é interessante utilizar a notação com ponto.
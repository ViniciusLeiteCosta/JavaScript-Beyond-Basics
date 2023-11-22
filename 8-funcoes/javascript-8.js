/*

Com as funções nós conseguimos fazer a mágica acontecer.
Imagine as funções como coisas que você pode utilizar no seu código,
chamando a mesma depois.

*/

let pessoaAcena = true;
let acenarParaEla = ' Você diz olá e com um sorriso no rosto acena! ';
let naoAcenarParaEla = ' * Você fica quieto(a)... * ';

function acenarParaAlguem (){
    if (pessoaAcena = true){
        console.log(acenarParaEla);
    } else {
        console.log(naoAcenarParaEla);
    }
}

acenarParaAlguem();


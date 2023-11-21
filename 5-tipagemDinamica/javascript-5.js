/*

Em JavaScript tudo funciona com tipagem dinâmica, o que isto significa?
Se entrar no console de navegador perceberá que é possível checar o tipo 
de todos os tipos primitivos, isto é possível digitando:

typeof "nome da variável"

Vamos fazer um exemplo melhor com isto:

------------------------------
Imagine a seguinte variável abaixo
let idade = 30;

Agora no console de navegador digite
typeof idade

O retorno será: "number"

E se atualizarmos o valor desta variável pelo console?
idade = 30.5;

Após atualizar se checar novamente o tipo 
typeof idade

O retorno será: "number"
------------------------------

Isto significa que ao contrário de outras línguagens de programação,
em JavaScript para números nós temos apenas o tipo "number"!

*/
/* 
Valor de uma constante não pode mudar!
Ex: constante = 1;
Se for necessário mudar o valor, use let!
*/


//ERRADO
const constante = 0.5;
constante = 1;
console.log(constante);

//CERTO
let constanteLet = 0.5;
constanteLet = 1;
console.log(constanteLet);
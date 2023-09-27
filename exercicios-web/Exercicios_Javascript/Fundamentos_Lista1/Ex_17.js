/*Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
 A     10%
 B     15%
 C     20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido */

function aumento (plano, salario) {
    this.salarioAtual = function(){
        switch(plano){
            case 'A': salario *= 1.1;
            break;
            case 'B': salario *= 1.15;
            break;
            case 'C': salario *= 1.2;
            break;
            default: return console.log(`O plano ${plano} é inexistente.`);
        }
        return console.log(` O salário atual é: R$${salario.toFixed(2).replace('.', ',')}`);
    }
}

const P1 = new aumento('A', 1000);
P1.salarioAtual();

const P2 = new aumento('B', 1000);
P2.salarioAtual();

const P3 = new aumento('C', 1000);
P3.salarioAtual();

const P4 = new aumento('D', 1000);
P4.salarioAtual();
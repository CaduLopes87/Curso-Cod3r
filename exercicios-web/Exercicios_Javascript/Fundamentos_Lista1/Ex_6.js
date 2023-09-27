/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

const calculoJuros = function (CapIn, taxaJuros, tempoAplicado){

    this.MontanteSimples = function(){
        
        const Montante = CapIn + (CapIn * taxaJuros * tempoAplicado)
        console.log('O montante aplicado a juros simples é: R$' + Montante.toFixed(2).replace('.', ','));
    }

    this.MontanteComposto = function(){
        const Montante = CapIn * ( Math.pow(1 + taxaJuros, tempoAplicado))
        console.log(`O montate aplicado a juros compostos é: R$${Montante.toFixed(2). replace('.', ',')}`)
    }
}

const investimento1 = new calculoJuros(10000, 0.1, 10);
investimento1.MontanteSimples();
investimento1.MontanteComposto();

// J = C i t        M = C + J  M = C + (C i t) 

//M = C (1 + i)^t
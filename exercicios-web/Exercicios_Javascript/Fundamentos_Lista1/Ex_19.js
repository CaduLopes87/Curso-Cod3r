/* O cardápio de uma lanchonete é o seguinte:
Código| Descrição do Produto | Preço
 100  | Cachorro Quente      | R$ 3,00
 200  | Hambúrguer Simples   | R$ 4,00
 300  | Cheeseburguer        | R$ 5,50
 400  | Bauru                | R$ 7,50
 500  | Refrigerante         | R$ 3,50
 600  | Suco                 | R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

class calculaLanche {
    constructor (codigo, quantidade){
        let preco = 0;
        let valorTotal = 0;
        let produto = '';

        this.totalLanche = function(){
            switch(codigo){
                case 100: 
                    preco = 3;
                    if(quantidade > 1){
                        produto = 'Cachorros Quente';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Cachorro Quente';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                case 200:
                    preco = 4;
                    if(quantidade > 1){
                        produto = 'Hambúrgueres Simples';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Hambúrguer Simples';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                case 300:                    
                    preco = 5.5;
                    if(quantidade > 1){
                        produto = 'Cheeseburgueres';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Cheeseburguer';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                case 400:
                    preco = 7.5;
                    if(quantidade > 1){
                        produto = 'Baurus';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Bauru';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                case 500:
                    preco = 3.5;
                    if(quantidade > 1){
                        produto = 'Refrigerantes';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Refrigerante';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                case 600:
                    preco = 2.8;
                    if(quantidade > 1){
                        produto = 'Sucos';
                    }else if (quantidade == 0 || quantidade == 1){
                        produto = 'Suco';
                    }else {
                        return console.log('Quantidade Inválida');
                    }
                    break;
                default: return console.log(`Não temos esse produto aqui :(`);
            }
            valorTotal = (quantidade*preco).toFixed(2).replace('.', ',');
            return console.log(`${quantidade} ${produto}: R$${valorTotal}`);
        }
    }
}

const Lanche1 = new calculaLanche(100, 3);
Lanche1.totalLanche();
const Lanche11 = new calculaLanche(100, 1);
Lanche11.totalLanche();
const Lanche111 = new calculaLanche(100, -1);
Lanche111.totalLanche();

const lanche2 = new calculaLanche(200, 3);
lanche2.totalLanche();

const lanche3 = new calculaLanche(300, 3);
lanche3.totalLanche();

const lanche4 = new calculaLanche(400, 3);
lanche4.totalLanche();

const lanche5 = new calculaLanche(500, 3);
lanche5.totalLanche();

const lanche6 = new calculaLanche(600, 3);
lanche6.totalLanche();

const lanche7 = new calculaLanche(700, 3);
lanche7.totalLanche();


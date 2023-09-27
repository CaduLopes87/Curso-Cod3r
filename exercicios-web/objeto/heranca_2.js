const avo = {attr1: 'A'};
const pai = {__proto__: avo, attr2: 'B', attr3: '3'};
const filho = {__proto__: pai, attr3: 'C'};

console.log(filho.attr1);
console.log(filho.attr0);

Object.prototype.attr0 = 'Z' //Não fazer isso

console.log(filho.attr0);//filho buscou em pai, que buscou em avo e que buscou no prototype maior e encontrou Z

console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3);//encontrou o attr3 no próprio objeto, então não  procura em outros

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    },
    status(){
        return `${this.velAtual}km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 //shadowing => sombreia a variável mais abrangente
}

const volvo = {
    __proto__: carro, //tem duas formas de referenciar o protótipo
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro); //cria relação de protótipo
//Object.setPrototypeOf(volvo, carro);

console.log(ferrari);//Mostra os atributos apenas do objeto referenciado

volvo.acelerarMais(20);
console.log(volvo.status());

ferrari.acelerarMais(50);
console.log(ferrari.status());
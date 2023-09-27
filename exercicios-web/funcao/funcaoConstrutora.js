function carro (velocidadeMaxima = 200, delta = 5){
    //Atributo privado
    let velocidadeAtual = 0;

    //Método público
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        }else{
            velocidadeAtual = velocidadeMaxima;
        }

    //método público
    this.getVelocidadeAtual = function (){
        return velocidadeAtual;
    }
    }
}

const Uno = new carro

Uno.acelerar();
console.log(Uno.getVelocidadeAtual())

const Ferrari = new carro (350, 20)

Ferrari.acelerar();
console.log('Ferrari:', Ferrari.getVelocidadeAtual());

Ferrari.acelerar();
console.log('Ferrari:', Ferrari.getVelocidadeAtual());


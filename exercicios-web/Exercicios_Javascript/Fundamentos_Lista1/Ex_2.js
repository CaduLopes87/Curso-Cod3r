/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo).*/

 const classificaTriangulo = function (lado1, lado2, lado3){
    
    console.log(lado1, lado2, lado3)
   
    this.verificarTriangulo = function (){
        if(lado1 == lado2 && lado2 == lado3){
            console.log('Este é um triângulo Equilátero')
        }else if(lado1 != lado2 && lado2 != lado3){
            console.log('Este é um triângulo Escaleno')
        }else {
            console.log('Este é um triângulo Isóceles')
        }
    }
}

const t1 = new classificaTriangulo(4, 4, 4);
t1.verificarTriangulo();

const t2 = new classificaTriangulo(4, 3, 2);
t2.verificarTriangulo();

const t3 = new classificaTriangulo(4, 4, 2);
t3.verificarTriangulo();

/*Construa uma função para um sistema de notas de uma instituição que possui a seguinte política de
classificação: Todo aluno recebe uma nota de 0 a 100. Alunos com nota abaixo de 40 são reprovados. As notas
possuem a seguinte regra de arredondamento: Se a diferença entre a nota e o próximo múltiplo de 5 for menor
que 3, arredondar a nota para esse próximo múltiplo de 5. Se a nota for abaixo de 38, não é feito nenhum
arredondamento pois esta nota resulta na reprovação do aluno. Por exemplo, a nota 84 será arredondada para
85, mas a nota 29 não será arredondada por ser abaixo de 40 e não ser possível arredondamento eficiente, ou
seja, que evite a reprovação do aluno. No caso de a nota ser 38, o arredondamento é possível pois atingirá 40
e o aluno não será aprovado.*/

const ReceberNota = nota => {

    const criterioDeArredondamento = nota % 5

    console.log(`Valor recebido: ${nota}.`);

     if (nota >= 38 && criterioDeArredondamento >= 3){
        EncontrarMultiplo = nota / 5
        valorArredondado = Math.ceil(EncontrarMultiplo) * 5
        return  console.log(`Valor Arredondado: ${valorArredondado}.\n`);

    }else if(nota > 40 && criterioDeArredondamento < 3){
        EncontrarMultiplo = nota / 5
        valorArredondado = Math.floor(EncontrarMultiplo) * 5
        return  console.log(`Valor Arredondado: ${valorArredondado}.\n`);

    } else {
        console.log('Aluno Reprovado com a nota:', nota,'\n');
    }
}

ReceberNota(39);
ReceberNota(38);
ReceberNota(37);
ReceberNota(28);
ReceberNota(49);
ReceberNota(63);
ReceberNota(62);


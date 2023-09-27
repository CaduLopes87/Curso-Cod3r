const escola = "Cod3r";

console.log(escola.charAt(4)); //Diz o caractere da posição
console.log(escola.charAt(5));//Não gera erro, entrga vazio
console.log(escola);
console.log(escola.charCodeAt(3)); //Revela o valor da tabela ASCI/Unicode
console.log(escola.indexOf('o')); //Entrega a posição
console.log(escola.substring(1)); //Entrega os caracteres a partir da posição selecionada
console.log(escola.substring(0, 3)); //Entrega os caracteres nesse intervalo, sem incluir o último
console.log('Escola '.concat(escola).concat('!')); //concatena, mesmo com valor literal no início
console.log(escola.replace(3, 'e')); //Troca o caracter daposição
const vetor = 'Ana, Maria, Braga'
console.log(vetor.split(',')); //Quebra a string e gera um Array com os termos separados

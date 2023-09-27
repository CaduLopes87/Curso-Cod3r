const a = 1;
const b = 2;
const c = 3;

const obj1 = {a: a, b: b, c: c} //Antigamente era necessario
const obj2 = { a, b, c } //Agora não é mais necessário repetir

console.log(obj1, obj2);

//Criar atributo a partir de uma variável

const nomeAttr = 'nota';
const valorAttr = 7.78;

const obj3 = {}
obj3[nomeAttr] = valorAttr;

console.log(obj3)

const obj4 = {[nomeAttr]: valorAttr};
console.log(obj4);

const obj5 = {
    funcao1: function(){
        //...
    },//forma 1 exige o par chave/valor expressos
    funcao2(){
        //... 
        //Forma Reduzida
    }//forma 2 a função pode ser escrita direto
}

console.log(obj5);
var numero = 1;
{
    let numero = 2;
    console.log('dentro =', numero);
}//let tem o escopo (visível) apenas dentro do bloco

console.log('fora =', numero);
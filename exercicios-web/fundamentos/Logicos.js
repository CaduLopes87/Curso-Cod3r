function compras (trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2;
    //1º forma XOR: const comprarTV32 = !!(trabalho1 ^ trabalho2);
    const comprarTV50 = trabalho1 && trabalho2;
    const comprarTV32 = trabalho1 != trabalho2; //2º forma de calcular XOR
    const manterSaudavel = !comprarSorvete; //unário
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
    /* Também pode ser feito assim para declarar o objeto:
    
    return { 
        comprarSorvete: comprarSorvete,
        comprarTV50: comprarTV50,
        comprarTV32: comprarTV32,
        manterSaudavel: manterSaudavel
    } */
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));

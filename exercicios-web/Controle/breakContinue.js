const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let x in nums){
    if(x == 5){
        console.log('Valor encontrado', x);
        break;
    }
    console.log(`${x} = ${nums[x]}`)
}

for(let y in nums){
    if(y == 5){
        continue
    }
    console.log(`Posição ${y} = ${nums[y]}`);
}

externo: 
for(a in nums){
    for(b in nums){
        if (a == 2 && b == 3){
            break externo;
        }
        console.log(`par = a: ${a} e b: ${b}`);
    }
}//Não usar esse tipo de estrutura
const funcs = [];

for (var i = 0; i <= 10; i++){
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]()
funcs[8]()

//teste diferente
for (var i = 0; i <= 10; i++){
    
    funcs[i] = i;        
    console.log(funcs[i]);
    
}

console.log(funcs[2]);
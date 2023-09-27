{
    {
        {
            {var sera = 'Será?'}
            console.log(sera);
        }
    }
}

console.log(sera); //definida com 'var' visível fora e dentro do bloco

 function teste(){
    var local = 123;
    return local;
 }

 teste()
 //console.log(local); //Não está definida pq está dentro da função
 console.log(teste());
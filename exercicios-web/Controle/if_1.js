function boaNoticia(nota){
    if (nota >= 7){
        console.log("Você foi aprovado!! Nota de", nota);
    }
    
}

boaNoticia(8);
boaNoticia(6);

function seForVerdadeEuFalo(valor){

    if(valor){
        console.log('É verdade...' + valor)
    }

}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});
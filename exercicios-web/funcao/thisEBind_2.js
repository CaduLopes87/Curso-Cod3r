/*function pessoa(){
    this.idade = 0;
    this.idade2 = 0;

    const self = this; //self recebe this e não varia por ser constante 

    setInterval(function(){
        this.idade++;
        console.log('idade 1:', this.idade);
        //console.log(this);
    }/*.bind(this)* /, 1000) //bind para resolver

    setInterval(function(){
        self.idade2++;
        console.log('idade 2:', self.idade2);
        ///console.log(self);
    }, 1000)
}

new pessoa */
const self = this;


let pessoa = () => {
    this.idade = 0;
    self.idade2 = 0;


     //self recebe this e não varia por ser constante 

    setInterval(function(){
        this.idade++;
        console.log('idade 1:', this.idade);
        //console.log(this);
    }/*.bind(this)*/, 1000) //bind para resolver

    setInterval(function(){
        self.idade2++;
        console.log('idade 2:', self.idade2);
        ///console.log(self);
    }, 1000)
}

let pessoa2 = () => {
    this.idade3 = 0;
    //const self = this;
    self.idade4 = 0;


     //self recebe this e não varia por ser constante 

    setInterval(function(){
        this.idade3++;
        console.log('idade 3:', this.idade3);
        //console.log(this);
    }/*.bind(this)*/, 1000) //bind para resolver

    setInterval(function(){
        self.idade4 += 2;
        console.log('idade 4 e 2:', self.idade4, self.idade2);
        ///console.log(self);
    }, 1000)
}

pessoa();
pessoa2();
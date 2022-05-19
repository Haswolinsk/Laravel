
function menorValor(){
    let a = 9;
    let b = 5;

    if(a<b){
        return a
    }
    return b    
}


function parOUimpar(){
    var valor = 55;

    if(valor%2 == 0){
        return 1;
    }
    return 0;
}


function CparaF(){
    var temp = 100;

    C = ((temp - 32)*5)/9;
    return C.toFixed(2);
}

function fibonacci(){
    atual = 1;
    ult = 1;
    ant = 1;

    while(atual < 100){
        ant = ult;
        ult =  atual;
        atual = ant + ult;        
    }
    return atual
}

function soma(){
    let a = 100;
    let b = divisao(50,2);
    const resultado = a+b;
    return resultado;
}

function divisao(c, d){
    return c/d;
}


console.log(menorValor());
console.log(parOUimpar());
console.log(CparaF());
console.log(fibonacci());
console.log(soma());

/* const a = 10;
const b = 20;
const abSoma = soma(a, b);
console.log(abSoma); 
const teste = operacao(a, b);
console.log(teste); */

/* function operacao(a, b){
    const x = soma(a, b);
    const y = subtracao(x, b);
    const z = divisao(y, x);
    return z;
}

function soma(a, b) {
    return a + b;
}

function subtracao(a, b){
    return a - b;
}

function divisao(a, b){
    return a / b;
} */

let a = 5;
let a_aux = 0;
let a_fat = 0;
console.log(fatorial(a));

function fatorial(a){
    let valor = 0;
    if(a>0){
        return valor += a*(a-1);
    }
    else{
        return 1;
    }

    
    /* valor += valor * (a-1) */
    return valor
}

const max = 120;
function soma(a, b){
    const c = a + b;
    if(c < 120){
        return soma(c,(a+b));
    }
    return c;
}
const resultado = soma(1,2);
console.log(resultado);

const a = 10;
const b = 20;
const abSoma = soma(a, b);
/* console.log(abSoma); */
const teste = operacao(a, b);
console.log(teste);

function operacao(a, b){
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
}

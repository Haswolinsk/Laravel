//uma função serve para encurtar ou da retorno a algum item 

//função literal
function nomeDaFuncao(parametro1, parametro2, parametro3){
    //escopo da função
    return "Salve!"
}

const variavel = 'ola';
const variavel2 = 2;
const variavel3 = true;
const variavel4 = () => {
    //função arrow( () => {} )
}

let contador=0;
function porta(){
    contador++;
}
const portaDeSaida= ()=>{
    --contador;
}

function divisao(numero){
    if (numero % 3 ==0){
        portaDeSaida();
    }else{
        porta();
    }

}
for(let numero = 0; numero < 100; numero++){
   divisao(numero);
}

console.log(contador);

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


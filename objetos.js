const quarto = [
{
    tipo: 'cama',
    comprimento: '2m',
    cor: 'branca',
    funcao: 'dormir',
    conservacao: 'semi-nova',

},
{
    tipo: 'guarda-roupa',
    altura: '2.20m',
    largura: '1.20m',
    funcao: 'guardar roupas e acessorios',
    conservacao: 'velho',
},
{
    tipo: 'mesa',
    modelo: 'tampo da mesa de vidro e cavaletes como pernas',
    material: 'vidro e cavaletes de madeira',
    altura: '1.10m',
    largura: '1.9m',
}
]

const quarto2 ={
    tipo: 'mesa',
    modelo: 'tampo da mesa de vidro e cavaletes como pernas',
    material: 'vidro e cavaletes de madeira',
    altura: '1.10m',
    largura: '1.9m',
}






const checkGlobalMedia = () => {
    quarto.forEach((tipo) => {
        
        console.log(tipo);
    });
}
checkGlobalMedia()
let soma = document.getElementById('soma');
let subtracaoA = document.getElementById('subtracaoA');
let subtracaoB = document.getElementById('subtracaoB');
let divisaoA = document.getElementById('divisaoA');
let divisaoB = document.getElementById('divisaoB');
let multiplicacao = document.getElementById('multiplicacao');
let potenciaA = document.getElementById('potenciaA');
let potenciaB = document.getElementById('potenciaB');
let raizdeA = document.getElementById('raizdeA');
let raizdeB = document.getElementById('raizdeB');
let fatorA = document.getElementById('fatorA');
let fatorB = document.getElementById('fatorB');
let porcentagemA = document.getElementById('porcentagemA');
let porcentagemB = document.getElementById('porcentagemB');
let media = document.getElementById('media');


soma.innerHTML = 0;
subtracaoA.innerHTML = 0;
subtracaoB.innerHTML = 0;
divisaoA.innerHTML = 0;
divisaoB.innerHTML = 0;
multiplicacao.innerHTML = 0;
potenciaA.innerHTML = 0;
potenciaB.innerHTML = 0;
raizdeA.innerHTML = 0;
raizdeB.innerHTML = 0;
fatorA.innerHTML = 0;
fatorB.innerHTML = 0;
porcentagemA.innerHTML = 0;
porcentagemB.innerHTML = 0;
media.innerHTML = 0;

function calculoSoma(a, b) {
    return a + b;
}

const calculoSubtracao = (a, b) => a - b;

function calculoDivisao(a, b){
    return a / b;
}

function calculoMultiplicacao(a, b){
    return a * b;
}

function calculoPotencia(a, b){
    return a ** b;
}

function calculoRaizdeA(a) {
    return Math.sqrt(a);
}

function calculoRaizdeB(b) {
    return Math.sqrt(b);
}

function calculoFatorA(a){
    var fatorial = a;
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++){
        resultado *= i;
    }
    return resultado();
}

function calculoFatorB(b){
    var fatorial = b;
    var resultado = fatorial;
    for (var i = 1; i < fatorial; i++){
       resultado *= i;
    }
    return resultado;
}

function calculoPorcentagemA(a, b){
    return (b / a) * 100;
}

function calculoPorcentagemB(a, b){
    return (a / b) * 100;
}

//const calculoPorcentagem = (a, b) => (a / b) * 100;

function calculoMedia(a, b){
    return (a + b) / 2;
}

const calcular = () => {
    let inputA = document.getElementById('primeiroNumero').value;
    let inputB = document.getElementById('segundoNumero').value;

    let a = parseFloat(inputA);
    let b = parseFloat(inputB);

    soma.innerHTML = calculoSoma(a, b);
    subtracaoA.innerHTML = calculoSubtracao(a, b);
    subtracaoB.innerHTML = calculoSubtracao(b, a);
    divisaoA.innerHTML = calculoDivisao(a, b);
    divisaoB.innerHTML = calculoDivisao(b, a);
    multiplicacao.innerHTML = calculoMultiplicacao(a, b);
    potenciaA.innerHTML = calculoPotencia(a, b);
    potenciaB.innerHTML = calculoPotencia(b, a);
    raizdeA.innerHTML = calculoRaizdeA(a);
    raizdeB.innerHTML = calculoRaizdeB(b);
    fatorA.innerHTML = calculoFatorA(a);
    fatorB.innerHTML = calculoFatorB(b);
    porcentagemA.innerHTML = calculoPorcentagem(b, a);
    porcentagemB.innerHTML = calculoPorcentagem(a, b);
    media.innerHTML = calculoMedia(a, b);

}

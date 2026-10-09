

/*toda matriz começa com 0.

opção 1:

var item1 = "arroz";
var item2 = "feijão";
var item3 = "macarrão";
var item4 = "carne";

const lista = [item1, item2, item3, item4];

alert(lista[0]);

opção 2:

const lista = [
    "arroz",
    "feijão",
    "macarrão",
    "carne"
];

opção 3:

const lista = [];
lista[0] = "arroz";
lista[1] = "feijão";
lista[2] = "macarrão";
lista[3] = "carne";

opção 4:

const lista = new Array("arroz", "feijão", "macarrão", "carne");

let x=lista[2]

const pessoa = ["João", 25, "São Paulo"];

-> caso queria colocar obejeto dentro de uma matriz utilize chaves {} ex:
const pessoa = {nome: "João", idade: 25, cidade: "São Paulo"};

-> caso queira saber quantos itens tem no seu array utilize o .length ex:
const lista = ["arroz", "feijão", "macarrão", "carne"];

console.log(lista.length);

-> para mostrar o ultimo item do array utilize o .length -1 ex:
const lista = ["arroz", "feijão", "macarrão", "carne"];

console.log(lista[lista.length - 1]);

-> para adicionar um item no final do array utilize o .push
const lista = ["arroz", "feijão", "macarrão", "carne"];
lista.push("batata"); ou lista[lista.length] = "batata";

-> para adicionar um item no inicio do array utilize o .unshift
const lista = ["arroz", "feijão", "macarrão", "carne"];
lista.unshift("batata");



/*
function alertaOla() {
    window.alert("Olá Mundo!");
    document.body.style.backgroundColor = "red";
}

function eventoDblClick() {
    window.alert("Clique duplo!");
    document.body.style.backgroundColor = "blue";
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";

}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue";
}

function adicionaTexto(){
    let p = document.getElementById("teste");
    p.append("Olá Mundo!");
}
function limpaTxt(){
    document.getElementById("campoTxt").value = "";
}
function mudou(){
    console.log("Mudou!");
}
function teclaPress(){
    let input = document.getElementById("campoTxt");
    console.log(input)
}


/*
const carro = { marca: "Fiat", modelo: "Uno", ano: 2020, placa: "ABC-1234", buzina: function() { console.log("Buzinando!"); }, completo: function() { return "A marca é" + this.marca + ", seu modelo é " + this.modelo + " e o ano é  " + this.ano; } };
    console.log(carro.ano);
    console.log(carro["modelo"]);
    console.log(carro.completo());


/*
function minhaFuncao(){
    var x = 2;
}


/*
function paraCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

var x = paraCelsius(77);

console.log("A temperatura em Celsius é: " + x + "°C");


/*
function alertaOla() {
    window.alert("Olá Mundo!");
}


/*
//Função de cotação do Dólar
function realParaDolar(real, cotacaoDolar) {
    return valorDolar = real * cotacaoDolar;
}
var total = realParaDolar(100, 5.25);
window.alert("O valor total em Dólar em"+real+"R$ é de: "+total+"$");


/*
function soma(v1,v2) {
    return v1 + v2;
}
document.getElementById("txt").innerHTML = soma(10,20);
var resultado = soma(10,20);
alert(resultado);

/*
var idade, eleitor, resultado;
idade = 18;
eleitor = (idade >= 18) ? "Eleitor é maior de idade" : "Eleitor é menor de idade";

resultado = (idade > 60 && idade < 70); true or false
resultado = (idade === 60 || idade === 70); true or false
resultado = !(idade === 60); true or false - negação





var valor1, valor2, resultado;
valor1 = 10;
valor2 = 20;

resultado = (valor1 == valor2); igualdade
resultado = (valor1 != valor2); diferença
resultado = (valor1 > valor2); maior que
resultado = (valor1 < valor2); menor que
resultado = (valor1 >= valor2); maior ou igual
resultado = (valor1 <= valor2); menor ou igual
resultado = (valor1 === valor2); igualdade estrita

resultado = valor1 + valor2; soma
resultado = valor1 - valor2; subtração
resultado = valor1 * valor2; multiplicação
resultado = valor1 / valor2; divisão
resultado = valor1 % valor2; resto
resultado = valor1 ** valor2; exponenciação

valor1 += valor2; incremento
valor1 -= valor2; decremento

resultado = ++valor1; incremento
resultado = --valor2; decremento
console.log(resultado);


var pote = "pregos";
    console.log(pote);

    Declaração de variáveis
    let a, b, c;

    Atribuição de valores
    a = 5;
    b = 10;
    c = a + b;
    console.log(c); 


    document.getElementById("txt").innerHTML="texto";
    document.write("olá Mundo!");
    window.alert("olá Mundo!");
    console.log("olá Mundo!");

*/
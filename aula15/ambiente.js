//para executar um arquivo Js: precione F8
/*
Funções: são ações executadas assim que são chamadas ou em decorrência de algum evento. Uma função pode receber parâmetros e retornar valores.


para adicionar um elemento no array, use o método push()
para remover um elemento do array, use o método pop()
para remover o primeiro elemento do array, use o método shift()
para adicionar um elemento no início do array, use o método unshift()
para saber o comprimento do array, use a propriedade length
para colocar os elementos em ordem, use o método sort()
para localizar um elemento no array, use o método indexOf(), ele mostra a posição do elemento.
*/
let num = [10, 20, 30, 40, 50]

num.sort()
num.push(60)
console.log(`O vetor é: ${num}`)
console.log(`O vetor é: ${num.length}`)
let pos = num.indexOf(10)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor ${num[pos]} está na posição ${pos}`)
}

/*
for(let pos = 0; pos < num.length; pos++)
*/

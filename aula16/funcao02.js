/*

*/


function soma(n1=0, n2=0) {
    return n1 + n2
}
function parimar(n) {
    if (n % 2 == 0) {
        return 'par'
    }
    else {
        return 'ímpar'
    }
}
let res = parimar(soma(5, 2))
console.log(`O número ${soma(5, 2)} é ${res}`)
//para executar um arquivo Js: precione F8
let valores = [8, 7, 13, 21, 12, 4]
valores.sort()
/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}



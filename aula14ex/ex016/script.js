function contar() {
    let inicio = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    if (inicio == '' || fim == '' || passo == '') {
        res.innerHTML = 'Impossível contar!'
        return
    }

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (passo <= 0) {
        res.innerHTML = 'Passo inválido! Considerando passo 1.'
        passo = 1
    }

    if (inicio > fim) {
        // Contagem regressiva
        for (var c = inicio; c >= fim; c -= passo) {
            res.innerHTML += `${c} \u{2714} `
        }
    } else {
        // Contagem progressiva
        for (var c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} \u{2714} `
        }
    }
}

/*
Resolução do Professor Guanabara:
let inicio = document.getElementById('txti')
let fim = document.getElementById('txtf')
let passo = document.getElementById('txtp')
let res = document.getElementById('res')

if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossível contar!'
}else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if (p <= 0) {
        window.alert('Passo inválido! Considerando passo 1')
        p = 1
    }
        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }else {
                // Contagem regressiva
                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }
            }
                res.innerHTML += `\u{1F3C1}`

*/
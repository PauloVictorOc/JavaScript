function tabuada() {
    let num = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');
    if (num.length == 0) {
        alert('Por favor, digite um número!');
    } else {
        tab.innerHTML = '';
        for (let c = 1; c <= 100; c++) {
            tab.innerHTML += `<option value="${num * c}">${num} x ${c} = ${num * c}</option>`;
        }
    }
}
/*
Resolução do Professor Guanabara:
function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            intem.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
} 

*/
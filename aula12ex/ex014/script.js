function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 19
msg.innerHTML = `Agora são ${hora} horas.`
if(hora >= 0 && hora < 12){
    // BOM DIA!
    img.src = 'https://s2.glbimg.com/RzBIctvst0DRmZXMMCYOZrRARLQ=/e.glbimg.com/og/ed/f/original/2015/11/27/cafe-manha.jpg'
    document.body.style.background = '#e2cd9f'
}   else if(hora >= 12 && hora < 18){
        // BOA TARDE!
        img.src = 'https://conteudo.imguol.com.br/c/entretenimento/0f/2022/02/07/entardecer-na-serra-da-mantiqueira-sul-de-minas-gerais-1644271111729_v2_1x1.jpg'
        document.body.style.background = '#f9a73c'
    }else{
        // BOA NOITE!
        img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1MgHAKcGStsgAsoEzeyQxacGOc8g6abZNCL3YZblQo0Q5cAqPS1HfqM&s=10'
        document.body.style.background = '#4b0082'
}
}
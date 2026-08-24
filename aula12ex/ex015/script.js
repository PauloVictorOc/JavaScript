function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'https://conteudo.brandili.com.br/wp-content/uploads/2024/10/im-4-years-old-what-about-you-2024-07-19-18-20-05-utc-949x949.jpg')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'https://static.vecteezy.com/ti/fotos-gratis/t1/48867104-jovem-homem-com-medio-castanho-cabelo-poses-contra-branco-fundo-foto.jpeg')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'https://img.magnific.com/fotos-premium/homem-adulto-rosto-sereno-expressao-estudio-retrato_53876-79737.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'https://img.magnific.com/fotos-gratis/homem-africano-empresario-de-sucesso-usando-oculos-retrato-de-rosto_53876-143244.jpg?semt=ais_hybrid&w=740&q=80')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'https://www.nestlefamilynes.com.br/sites/default/files/styles/content_media_mobile/public/content_image/crianca-feliz-menina-seo_0.jpg?h=5ff2e7dc&itok=86RcwQ33')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'https://media.istockphoto.com/id/1295244331/pt/foto/studio-portrait-of-pretty-smiling-african-american-teen-girl-high-school-or-college-student.jpg?s=612x612&w=0&k=20&c=Xju5rBMIovg9GkEYsLcBKuB7kw2swTRKLvkF6wjKTHU=')
            }else if (idade < 50){
                //Adulto
                img.setAttribute('src', 'https://st4.depositphotos.com/10614052/39537/i/450/depositphotos_395377618-stock-photo-beautiful-young-woman-foundation-her.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'https://img.magnific.com/fotos-gratis/retrato-de-um-mulher-americana_53876-34038.jpg?semt=ais_hybrid&w=740&q=80')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
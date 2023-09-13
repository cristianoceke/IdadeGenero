function verificar() {
    var data = new Date() // data
    var ano = data.getFullYear() //ano
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
        var img = document.createElement('img') // variável para tag
        img.setAttribute('id', 'foto') // id da tag
        if (fsex[0].checked) {
            gênero = ' um Homem'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancaM.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','jovemM.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adultoM.png')
            } else {
                // Idoso
                img.setAttribute('src','idosoM.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'uma Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'criancaF.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src','jovemF.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src','adultoF.png')
            } else {
                // Idoso
                
                img.setAttribute('src','idosoF.png')
            }
        }
        res.style.textAlign = 'center' // css dentro do JS
        res.style.padding = '4px'
        res.innerHTML = `Você é ${gênero}, com ${idade} anos`
        res.appendChild(img) // colocar conteúdo
    }

}
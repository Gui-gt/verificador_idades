function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert(`[ERRO] data inválida!`)
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        genero = ''
        if(fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','assets/kidh.png')
            }else if(idade >= 10 && idade < 21){
                //adole
                img.setAttribute('src','assets/jovemh.png')
            }else if(idade >= 21 && idade < 50){
                //adulto
                img.setAttribute('src','assets/homem40.png')
            }else{
                //idoso
                img.setAttribute('src','assets/idosoh.png')
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','assets/minakid.png')
            }else if(idade >= 10 && idade < 21){
                //adole
                img.setAttribute('src','assets/minajovem.png')
            }else if(idade >= 21 && idade < 50){
                //adulta
                img.setAttribute('src','assets/mulher40.png')
            }else{
                //idosa
                img.setAttribute('src','assets/idosa.png')
            }
        }res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
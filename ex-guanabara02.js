function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txt-ano')
    var res = document.getElementById('res')
    var img = document.getElementById('img')

    if (fano.value.length == 0) {
        window.alert('Preencha os campos solicitados!')
    }
    else if (fano.value > ano) {
        window.alert('Você não pode inserir um ano maior que o ano atual!')
    }
    else {
        var idade = ano - Number(fano.value)

        var fsex = document.getElementsByName('radioSex')
        var genero = ''

        if (fsex[0].checked) {
            genero = 'homem'

            if (idade >= 0 && idade < 12) {
                img.src = './img/foto-crianca-m.JPG'
            }

            if (idade >= 12 && idade < 25) {
                img.src = './img/foto-jovem-garoto.JPG'
            }

            if (idade >= 25 && idade < 60) {
                img.src = './img/foto-adulto.JPG'
            }

            if (idade >= 60) {
                img.src = './img/foto-idoso.JPG'
            }
        }

        if (fsex[1].checked) {
            genero = 'mulher'

            if (idade >= 0 && idade < 12) {
                img.src = './img/foto-crianca-f.JPG'
            }

            if (idade >= 12 && idade < 25) {
                img.src = './img/foto-jovem-garota.JPG'
            }

            if (idade >= 25 && idade < 60) {
                img.src = './img/foto-adulta.JPG'
            }

            if (idade >= 60) {
                img.src = './img/foto-idosa.JPG'
            }
        }



        res.innerHTML = `Você é ${genero} e você tem ${idade} anos de idade!`
    }
}
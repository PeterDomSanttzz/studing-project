function contar() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        window.alert('Preencha os campos solicitados!')
    }
    else {
        
        if (pas.value <= 0) {   
            window.alert('Insira um passo válido!')
        }
        else {

            if (ini.value < fim.value) {

                res.innerHTML = 'Contando: '
                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(pas.value)
                var emojicontando = '👉'
                var emojifim = '🎉'
                
                for (let c = i; c <= f; c += p) {

                    res.innerHTML += `${c} ${emojicontando}`
                }

                res.innerHTML += `${emojifim}`
            }

            if (ini.value > fim.value) {
                
                res.innerHTML = 'Contando: '
                var i = Number(ini.value)
                var f = Number(fim.value)
                var p = Number(pas.value)
                var emojicontando = '👉'
                var emojifim = '🎉'
                
                for (let c = i; c >= f; c -= p) {

                    res.innerHTML += `${c} ${emojicontando}`
                }

                res.innerHTML += `${emojifim}`
            }
        }
    }
}
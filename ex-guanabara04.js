function gerar() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('grid')

    if (num.value.length = 0) {
        window.alert('Preencha o campo solicitado!')
    }
    else {
        tab.innerHTML = ''
        tab.style.display = 'flex'
        let n = Number(num.value)
        let c = 1

        for (let i = c; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${(n * i)}`
            tab.appendChild(item)
        }
    }
}
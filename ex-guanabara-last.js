let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        res.innerHTML = ''

        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado!`
        lista.appendChild(item)

        num.value = ''
        num.focus()
    }
    else {
        window.alert('Valor inválido ou já contido na lista!')
    }
}
function finalizar() {
    if (valores.length == 0) {
        window.alert('Preencha o campo solicitado!')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]
            }

            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${total} números.</p>`
        res.innerHTML += `<p>O menor número é ${menor}.</p>`
        res.innerHTML += `<p>O maior número é ${maior}.</p>`
        res.innerHTML += `<p>A soma de todos os números é ${soma}.</p>`
        res.innerHTML += `<p>A média de todos os números é ${media}.</p>`
    }
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    }
    else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    }
    else {
        return false
    }
}
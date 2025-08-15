
contador = 0

function avancar() {
    let carrossel = document.getElementById('carrossel-brinquedos')

    if (carrossel.style.left != "-200%") 
    {
        contador += -25;
    }

    carrossel.style.left = `${contador}%`;
}
function voltar() {
    let carrossel = document.getElementById('carrossel-brinquedos')
    let posAtual = getComputedStyle(carrossel).left;

    if (posAtual !== "0px" && carrossel.style.left != '0%') 
    {
        contador += 25;
    }

    carrossel.style.left = `${contador}%`;
}


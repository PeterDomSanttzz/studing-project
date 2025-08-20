
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

function modal_avancar() {
    const opcoes = document.querySelectorAll('.checkbox:checked')
    let modal_start = document.getElementById('modal-select')
    let modal_erro = document.getElementById('modal-erro')
    let fundo_escuro = document.getElementById('fundo-escuro')
    let selecionados = []

    opcoes.forEach(function(opcao){
        selecionados.push(opcao.value);
    })

    if (selecionados.length !== 3) {
        modal_erro.style.display = 'flex'
        modal_erro.style.flexDirection = 'column'
    }
    else {
        modal_start.close()
        fundo_escuro.style.display = 'none'

        popula_categorias(selecionados)
    }
}

function popula_categorias(selecionados) {

    let titulo_carrossel = document.getElementById('titulo-carrossel')
    let imgs_cat = Array.from(document.querySelectorAll('.carrossel-cat1 .img-cat'))
    let precos_cat = Array.from(document.querySelectorAll('.carrossel-cat1 .preco-produto'))
    let descricao_cat = Array.from(document.querySelectorAll('.carrossel-cat1 .descricao-produto'))

    if (selecionados[0] == 'brinquedos') {
        titulo_carrossel.innerText = 'Brinquedos'

        for (let i = 0; i <= 8; i++) {
            if (i === 0) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/bola.jpg'
                precos_cat[i].innerText = 'R$190,00'
                descricao_cat[i].innerText = 'Bola de basquete Wilson na Laranja'
            }

            if (i === 1) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/carro-controle-remoto.jpg'
                precos_cat[i].innerText = 'R$210,60'
                descricao_cat[i].innerText = 'Carro de controle remoto Ford Mustang Azul'
            }

            if (i === 2) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/arma-dagua.jpg'
                precos_cat[i].innerText = 'R$50,00'
                descricao_cat[i].innerText = 'Arma de água capacidade 90ml'
            }

            if (i === 3) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/boneco.jpg'
                precos_cat[i].innerText = 'R$120,00'
                descricao_cat[i].innerText = 'Boneco Max-Steel azul com peças agregadas'
            }

            if (i === 4) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/espada.jpg'
                precos_cat[i].innerText = 'R$35,00'
                descricao_cat[i].innerText = 'Espada brinquedo mania'
            }

            if (i === 5) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/formas-geometricas.jpg'
                precos_cat[i].innerText = 'R$60,00'
                descricao_cat[i].innerText = 'Formas geométricas de madeira para bebês'
            }

            if (i === 6) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/motoca.jpg'
                precos_cat[i].innerText = 'R$450,00'
                descricao_cat[i].innerText = 'Motoca de sem motor'
            }

            if (i === 7) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/pista-hotwheells.jpg'
                precos_cat[i].innerText = 'R$760,00'
                descricao_cat[i].innerText = 'Pista HotWheells Ultimate Edition'
            }

            if (i === 8) {
                imgs_cat[i].src = '../imgs-Market/imgs-Cat/imgs-Brinquedos/skate.jpg'
                precos_cat[i].innerText = 'R$150,00'
                descricao_cat[i].innerText = 'Penny-Board suporta até 120kg'
            }
        }
    }
}

function fechar_modal_erro() {
    let modal_erro = document.getElementById('modal-erro')

    modal_erro.style.display = 'none'
}


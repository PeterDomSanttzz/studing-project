
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
    const opcoes = document.querySelectorAll('.checkbox')
    let modal_start = document.getElementById('modal-select')
    let modal_erro = document.getElementById('modal-erro')
    let fundo_escuro = document.getElementById('fundo-escuro')
    let selecionados = [];

    opcoes.forEach(function(opcao) {
        if (opcao.checked) {
            selecionados.push(opcao.value);
        }
    });

    if (selecionados.length != 3) {
        modal_erro.style.display = 'flex'
        modal_erro.style.flexDirection = 'column'
    }
        else {
        modal_start.close()
        fundo_escuro.style.display = 'none'
    } 

    for (let i = 0; i < 1; i++) {
        if (selecionados[i].value === 'brinquedos') { 
            let titulo_cat = document.getElementById('title-cat')

            titulo_cat.innerHTML('Brinquedos')
        }
        if (selecionados[i].value == 'eletrodomesticos') { 

        }
        if (selecionados[i].value == 'jardinagem') { 
            
        }
        if (selecionados[i].value == 'roupaseacessorios') { 

        }
        if (selecionados[i].value == 'tecnologia') { 

        }
        if (selecionados[i].value == 'utensiliosdecozinha') { 

        }
    }
}

function fechar_modal_erro() {
    let modal_erro = document.getElementById('modal-erro')

    modal_erro.style.display = 'none'
}


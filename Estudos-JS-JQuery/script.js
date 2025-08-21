const URL = 'https://dummyjson.com/products';

function exec() {
    let resp_usuario = document.getElementById('num-produto');
    let img = document.getElementById('img');
    let nome = document.getElementById('name');
    let preco = document.getElementById('preco');
    let error_message = document.getElementById('error-message');

    resp_usuario.value = resp_usuario.value - 1;

    error_message.style.display = 'none'

    if (resp_usuario.value < 0 || resp_usuario.value > 29) {
        error_message.style.display = 'flex'
        error_message.innerText = 'Produto não encontrado!'

        nome.style.display = 'none'
        preco.style.display = 'none'
        img.style.display = 'none'
    }
    else {
        nome.style.display = 'flex'
        preco.style.display = 'flex'
        img.style.display = 'flex'

        fetch(URL)
        .then(res => res.json())
        .then(dados => {
            const produto = dados.products[resp_usuario.value]
            nome.innerText = produto.title
            preco.innerText = 'R$' + produto.price
            img.src = produto.images[0]
        })
    }
}
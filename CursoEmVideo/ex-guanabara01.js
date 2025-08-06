function load() {
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')

    var data = new Date();
    var hora = data.getHours();

    if (hora > 0 && hora < 12) {
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`;
        img.src = './img/foto-manha.jpg'
        document.body.style.background = 'linear-gradient(45deg, #0060afff, #a2ecffff)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    }

    else if (hora > 12 && hora < 18) {
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`;
        img.src = "./img/foto-tarde.jpg"
        document.body.style.background = 'linear-gradient(45deg, #682600ff, #ff7b00ff)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
 
    }

    else {
        msg.innerHTML = `Boa noite! Agora são ${hora} horas`;
        img.src = './img/foto-noite.jpg'
        document.body.style.background = 'linear-gradient(45deg, #21303aff, #374e8dff)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
    }
}
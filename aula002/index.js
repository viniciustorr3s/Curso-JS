var hoje = new Date()
var mas = document.querySelector('#sexom')
var img = document.querySelector('#img')

function ver() {
    var msg = document.querySelector('#msg')
    var anonas = document.querySelector('#ano').value
    var anoat = hoje.getFullYear()
    var idade = anoat - anonas

    if (mas.checked) {
        if (idade <= 25) {
            msg.innerText = 'Você é um homem jovem'
            img.src = 'fotos/homemj.png'
        } else if (idade <= 50) {
            msg.innerText = 'Você é um homem adulto'
            img.src = 'fotos/homema.png'
        } else {
            msg.innerText = 'Você é um homem idoso'
            img.src = 'fotos/homemi.png'
        }
    } else {
        if (idade <= 25) {
            msg.innerText = 'Você é uma mulher jovem'
            img.src = 'fotos/mulherj.png'
        } else if (idade <= 50) {
            msg.innerText = 'Você é uma mulher adulta'
            img.src = 'fotos/mulhera.png'
        } else {
            msg.innerText = 'Você é uma mulher idosa'
            img.src = 'fotos/mulheri.png'
        }
    }
}

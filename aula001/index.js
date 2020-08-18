var hora = new Date().getHours()
if (hora < 12) {
    document.getElementById('titulo').innerHTML = '<p>Bom dia!</p>'
    document.getElementById('imagem').innerHTML = '<img src="fotos/foto-dia.png" alt="Foto de dia">'
} else if (hora <= 17){
    document.getElementById('titulo').innerHTML = '<p>Boa tarde!</p>'
    document.getElementById('imagem').innerHTML = '<img src="fotos/foto-tarde.png" alt="Foto de tarde">'
} else {
    document.getElementById('titulo').innerHTML = '<p>Boa noite!</p>'
    document.getElementById('imagem').innerHTML = '<img src="fotos/foto-noite.png" alt="Foto de noite">'
}

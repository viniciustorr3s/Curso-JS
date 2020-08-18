function contar() {
    var ini = Number(document.querySelector('#in').value)
    var fim = Number(document.querySelector('#fi').value)
    var pas = Number(document.querySelector('#pa').value)
    var res = document.querySelector('#output')
    var texto = document.createElement('p')
    
    if (pas > 0) {
        if (ini < fim) {
        for (ini; ini <= fim; ini += pas) {
        texto.innerHTML += `${ini} &rArr; `
        }
        } else if (ini > fim) {
            for (ini; ini >= fim; ini -= pas) {
            texto.innerHTML += `${ini} &rArr; `
            }
        } else {
        texto.innerHTML = `${ini} &rArr;`
        }
    } else{
        if (ini < fim) {
            for (ini; ini <= fim; ini++) {
            texto.innerHTML += `${ini} &rArr; `
            }
        } else if (ini > fim) {
            for (ini; ini >= fim; ini--) {
            texto.innerHTML += `${ini} &rArr; `
            }
        } else {
            texto.innerHTML = `${ini} &rArr;`
        }
    }
    
    
    texto.innerHTML += '&#x2714'
    res.appendChild(texto)
}
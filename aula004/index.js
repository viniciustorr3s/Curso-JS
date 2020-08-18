function centro() {
    document.querySelector('#el1').style= 'padding-top: 125px'
}

function veren(event) {
    let tecla = event.key
    if (tecla == 'Enter') {
        document.querySelector('#tabu').innerHTML = ''
        calc()
    }
}

function calc() {
    let num = Number(document.querySelector('#num').value)
    let sel = document.querySelector('#tabu')
    for (let c = 1; c <= 10; c++) {
        let eltab = document.createElement('option')
        eltab.innerText = `${num} X ${c} = ${num*c}`
        sel.appendChild(eltab)
    }
}
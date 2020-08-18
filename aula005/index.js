var nums = []
var totsom = 0
function veren(event, val) {
    let tecla = event.key
    
    if (tecla == 'Enter' && document.querySelector("#num").value != '') {
        document.querySelector('#res').innerHTML = ''
        add(val)
    }
    if (Number(tecla) != NaN) {
        document.querySelector("#num").value = ''
    }
}

function add(v) {
    let ele = document.createElement('option')
    ele.innerText = `Você inseriu o número ${v}`
    nums.push(Number(v))
    document.querySelector('#tab').appendChild(ele)
}

function output() {
    let totnum = document.createElement('p')
    let mainum = document.createElement('p')
    let mennum = document.createElement('p')
    let som = document.createElement('p')
    let med = document.createElement('p')
    

    nums.sort()
    total(totnum)
    mai(mainum)
    men(mennum)
    soma(som)
    media(med)
}

function total(tagtot) {
    tagtot.innerText = `Ao todo, ${nums.length} números foram digitados.`
    document.querySelector('#res').appendChild(tagtot)
}

function mai(tagmai) {
    tagmai.innerText = `O maior número é ${nums[nums.length-1]}`
    document.querySelector('#res').appendChild(tagmai)
}

function men(tagmen) {
    tagmen.innerText = `O menor número é ${nums[0]}`
    document.querySelector('#res').appendChild(tagmen)
}

function soma(tagsom) {
    for (let c = 0; c < nums.length; c++) {
        totsom += nums[c]    
    }
    tagsom.innerText = `A soma dos numeros é ${totsom}`
    document.querySelector('#res').appendChild(tagsom)
}

function media(tagmed) {
    let medi = totsom / nums.length
    tagmed.innerText = `A média é ${medi}`
    document.querySelector('#res').appendChild(tagmed)
}